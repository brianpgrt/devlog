import React from "react";
import { useForm } from "react-hook-form";
import { noop } from "lodash";

import { Button, GridContainer, GridItem, Input } from "components/elements";
import { ObjectLiteral } from "utils/types";

type FormContainerProps = {
	onSubmit: (fn: any) => void;
	children: React.ReactNode;
	gridProps?: ObjectLiteral;
};

type FormItemProps = {
	type?: "input" | "button";
	name?: string;
	gridItemProps?: ObjectLiteral;
	children?: React.ReactNode;
	loading?: boolean;
};

export const FormContainer = ({ onSubmit = noop, children, gridProps = {} }: FormContainerProps) => {
	const { handleSubmit } = useForm();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<GridContainer {...gridProps}>{children}</GridContainer>
		</form>
	);
};

export const FormItem = ({
	type = "input",
	name,
	gridItemProps = {},
	children = null,
	loading = false
}: FormItemProps) => {
	const {
		register,
		formState: { errors }
	} = useForm();

	const f = {
		input: name && <Input {...register(name, { required: true })} />,
		button: <Button loading={loading}>{children}</Button>
	};

	return (
		<div>
			<GridItem {...gridItemProps}>{f[type]}</GridItem>
			{name && errors[name] && <div>{errors[name].message?.toString()}</div>}
		</div>
	);
};
