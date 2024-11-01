import { handleApi } from "config/handleApi";

export const apiPostSignIn = async ({ data = {} }) => {
	const rs = await handleApi({
		url: "/login",
		method: "post",
		data
	});

	if (rs.success) {
		localStorage.setItem("access_token", "access_token");
		localStorage.setItem("refresh_token", "refresh_token");
	}

	return rs;
};
