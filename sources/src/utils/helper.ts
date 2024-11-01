import { isNumber, isString, words } from "lodash";
import { AsYouType } from "libphonenumber-js";
import dayjs from "dayjs";

export const getAbbreviations = (name: string) => {
	if (typeof name === "string" && name.trim() !== "") {
		const ws = words(name);
		const { length } = ws;
		if (length === 0) return null;

		let sh;
		if (length > 1) {
			sh = ws[0].charAt(0) + ws[length - 1].charAt(0);
		} else {
			sh = ws[0].charAt(0) + ws[0].charAt(ws[0].length - 1);
		}
		return sh.toUpperCase();
	}
	return null;
};

export const jwtDecode = (jwt: string) => {
	if (jwt) {
		const jwtSplit = jwt.split(".");

		if (jwtSplit[1]) {
			const jwtJSON = atob(jwtSplit[1]);
			const { permissions } = JSON.parse(jwtJSON);
			return permissions;
		}
	}
	return null;
};

export const formatPhoneNumber = (value = "") => {
	if (isString(value)) {
		return new AsYouType().input(value);
	}
	return "-";
};

export const getBase64 = (file: File) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			resolve(reader.result);
		};
		reader.onerror = (error) => reject(error);
	});
};

export const formatCurrency = (value: number, currency = "USD", maximumFractionDigits = undefined) => {
	return new Intl.NumberFormat("us-US", {
		style: "currency",
		currency,
		currencyDisplay: "narrowSymbol",
		maximumFractionDigits
	}).format(value);
};

export const toCapitalize = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const toAllCapitalize = (str: string) => {
	const arr = str.split("_");
	return arr.map((a) => toCapitalize(a)).join(" ");
};

export const formatNumberPerThousand = (num: number) => {
	if (isNumber(num)) {
		if (num > 0) {
			return `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
		return num;
	}
	return 0;
};

export const timeToNumber = (time: Date | number) => {
	if (isNumber(time)) return time;
	if (time) {
		const hour = dayjs(time).hour();
		const min = dayjs(time).minute();

		const t = hour + min / 60;
		return Number(t.toFixed(2));
	}
	return null;
};
