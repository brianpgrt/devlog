import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PATH_DASHBOARD } from "config/router";
import AuthLayout from "components/layouts/authLayout";
import { FormContainer, FormItem } from "components/elements";
import { apiPostSignIn } from "store/auth/apis";
import { ObjectLiteral } from "utils/types";

const SignInPage = () => {
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);

	const handleSubmit = async (values: ObjectLiteral) => {
		setLoading(true);
		const rs = await apiPostSignIn({ data: values });
		if (rs.success) {
			navigate(PATH_DASHBOARD);
		}
		setLoading(false);
	};

	return (
		<AuthLayout>
			<FormContainer onSubmit={handleSubmit}>
				<FormItem name="email" />
				<FormItem name="password" />
				<FormItem type="button" loading={loading} />
			</FormContainer>
		</AuthLayout>
	);
};

export default SignInPage;
