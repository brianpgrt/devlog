import { ObjectLiteral } from "utils/types";
import axios, { Method } from "axios";
import { noop } from "lodash";
import qs from "qs";
import { generatePath } from "react-router-dom";

import { ERROR_CLIENT_UNKNOWN_ERROR } from "utils/constant";

const baseURL = process.env.REACT_APP_API_URL;

declare global {
	interface Window {
		handleOpenModalError: any;
	}
}

type HandleApiProps = {
	url: string;
	method?: Method;
	params?: ObjectLiteral;
	query?: ObjectLiteral;
	data?: any;
	showModalError?: boolean;
	contentType?: "application/json" | "multipart/form-data";
	responseType?: "json" | "blob" | "arraybuffer" | "text";
};

export const handleApi = ({
	url,
	method = "get",
	params = {},
	query = {},
	data = {},
	showModalError = true,
	contentType = "application/json",
	responseType = "json"
}: HandleApiProps) => {
	const apiUrl = generatePath(url, params);

	const requestConfig = {
		url: apiUrl,
		method,
		params: query,
		data,
		responseType,
		headers: { "Content-Type": contentType },
		baseURL,
		paramsSerializer: function (query: any) {
			return qs.stringify(query, { arrayFormat: "repeat" });
		},
		timeout: 2000,
		withCredentials: false,
		responseEncoding: "utf8",
		maxContentLength: 2000,
		maxBodyLength: 2000,
		validateStatus: function (status: number) {
			return status >= 200 && status < 300;
		},
		maxRedirects: 5,
		decompress: true
	};

	const instance = axios.create();

	instance.interceptors.request.use(
		function (config) {
			const token = localStorage.getItem("access_token");
			if (token) {
				config.headers.authorization = `Bearer ${token}`;
			}
			return config;
		},
		function (error) {
			return Promise.reject(error);
		}
	);

	instance.interceptors.response.use(
		function (response) {
			return response;
		},
		async function (error) {
			const config = error.config;
			if (
				error?.response?.status === 401 &&
				config.url !== "/v2/login" &&
				config.url !== "/renew-token" &&
				!config.__isRetryRequest
			) {
				config.__isRetryRequest = true;

				/** renew token */

				return instance(config);
			}
			return Promise.reject(error);
		}
	);

	return instance
		.request(requestConfig)
		.then((res) => {
			return { success: true, data: res.data };
		})
		.catch((error) => {
			const msg = error?.response?.data?.message ?? error?.message ?? ERROR_CLIENT_UNKNOWN_ERROR;

			if (showModalError) {
				window.handleOpenModalError?.({ message: msg });
			}
			return { success: false, message: msg };
		});
};
