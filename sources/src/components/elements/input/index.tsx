import React from "react";

import s from "./input.module.css";
import { LoadingSpin } from "../loadingSpin";
import { ObjectLiteral } from "utils/types";

type InputProps = {
	type?: "primary" | "secondary";
	width?: React.CSSProperties["width"];
	shape?: "round" | "default";
	disabled?: boolean;
	icon?: React.ReactNode;
	iconPosition?: "start" | "end";
	loading?: boolean;
	size?: "large" | "middle" | "small";
	style?: React.CSSProperties;
	props?: ObjectLiteral;
};

export const Input = React.forwardRef(
	(
		{
			type = "primary",
			width = "fit-content",
			shape = "round",
			disabled = false,
			icon = null,
			iconPosition = "start",
			loading = false,
			size = "middle",
			style = {},
			props = {}
		}: InputProps,
		ref: any
	) => {
		const loadingSize = { large: 20, middle: 16, small: 14 };

		return (
			<div style={{ width: "100%", maxWidth: width, ...style }} className={s.input_container}>
				<input
					ref={ref}
					disabled={disabled}
					className={
						icon
							? `${s.input} ${s[type]} ${s[size]} ${s[`shape_${shape}`]} ${s[`input_with_icon_${size}_${iconPosition}`]}`
							: `${s.input} ${s[type]} ${s[size]} ${s[`shape_${shape}`]}`
					}
					{...props}
				/>
				{loading && (
					<div className={`${s.loading_wrapper} ${s[`loading_${size}`]}`}>
						<LoadingSpin size={loadingSize[size]} />
					</div>
				)}
				{icon ? (
					<>
						{iconPosition === "end" ? (
							<>
								{loading ? (
									<div className={`${s.loading_wrapper} ${s[`loading_${size}`]}`}>
										<LoadingSpin size={loadingSize[size]} />
									</div>
								) : (
									<div className={`${s.input_icon} ${s[`icon_${size}_end`]}`}>{icon}</div>
								)}
							</>
						) : (
							<div className={`${s.input_icon} ${s[`icon_${size}_start`]}`}>{icon}</div>
						)}
					</>
				) : (
					<>
						{loading && (
							<div className={`${s.loading_wrapper} ${s[`loading_${size}`]}`}>
								<LoadingSpin size={loadingSize[size]} />
							</div>
						)}
					</>
				)}
			</div>
		);
	}
);
