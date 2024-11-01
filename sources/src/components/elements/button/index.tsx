import React from "react";

import s from "./button.module.css";
import { LoadingSpin } from "../loadingSpin";
import { noop } from "lodash";

type ButtonProps = {
	type?: "primary" | "dashed" | "text" | "default";
	shape?: "round" | "circle" | "square";
	width?: React.CSSProperties["width"];
	disabled?: boolean;
	size?: "large" | "middle" | "small";
	onClick?: () => void;
	icon?: React.ReactNode;
	iconPosition?: "start" | "end";
	style?: React.CSSProperties;
	children: React.ReactNode;
	loading?: boolean;
};

export function Button({
	type = "primary",
	shape = "round",
	width = "fit-content",
	disabled = false,
	size = "middle",
	onClick = noop,
	icon = null,
	iconPosition = "start",
	style = {},
	children = null,
	loading = false
}: ButtonProps) {
	const iconOrder = {
		start: 0,
		end: 1
	};

	return (
		<button
			style={{ width, ...style }}
			disabled={disabled}
			className={`${s.button} ${s[type]} ${s[size]} ${s[shape]}`}
			onClick={onClick}
		>
			{icon && (
				<div className={s.button_icon} style={{ order: iconOrder[iconPosition] }}>
					{icon}
				</div>
			)}
			{children}
			{loading && <LoadingSpin />}
		</button>
	);
}
