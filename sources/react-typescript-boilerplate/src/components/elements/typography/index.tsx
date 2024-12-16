import React from "react";
import { omitBy } from "lodash";

import s from "./typography.module.css";

type TypographyProps = {
	variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "error_title" | "error_des" | "h8";
	style?: React.CSSProperties;
	color?: React.CSSProperties["color"];
	top?: React.CSSProperties["marginTop"];
	left?: React.CSSProperties["marginLeft"];
	right?: React.CSSProperties["marginRight"];
	bottom?: React.CSSProperties["marginBottom"];
	align?: React.CSSProperties["textAlign"];
	transform?: React.CSSProperties["textTransform"];
	children: React.ReactNode;
	truncate?: boolean;
	width?: number | null;
	element?: "div" | "span";
	clamp?: number;
};

export function Typography({
	variant = "h7",
	style = {},
	color = undefined,
	top = undefined,
	left = undefined,
	right = undefined,
	bottom = undefined,
	align = "left",
	transform = undefined,
	children = null,
	truncate = false,
	width = null,
	element = "div",
	clamp = 0
}: TypographyProps) {
	let inline: React.CSSProperties = {
		color: color,
		marginTop: top,
		marginLeft: left,
		marginRight: right,
		marginBottom: bottom,
		textAlign: align,
		textTransform: transform
	};

	if (width) inline.width = width;
	if (truncate) inline = { ...inline, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" };
	if (clamp > 0)
		inline = {
			...inline,
			display: "-webkit-box",
			WebkitLineClamp: clamp,
			WebkitBoxOrient: "vertical",
			overflow: "hidden"
		};

	const omitStyle = omitBy(inline, (s) => !s);

	return (
		<>
			{element === "div" && (
				<div style={{ ...omitStyle, ...style }} className={s[variant]}>
					{children}
				</div>
			)}
			{element === "span" && (
				<span style={{ ...omitStyle, ...style }} className={s[variant]}>
					{children}
				</span>
			)}
		</>
	);
}
