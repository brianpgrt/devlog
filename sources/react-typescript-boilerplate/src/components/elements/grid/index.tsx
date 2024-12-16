import React from "react";

import s from "./grid.module.css";

type GridContainerProps = {
	columnGap?: number;
	rowGap?: number;
	style?: React.CSSProperties;
	children: React.ReactNode;
};

type GridItemProps = {
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
	xxl?: number;
	children: React.ReactNode;
};

export function GridContainer({ columnGap = 0, rowGap = 0, style = {}, children }: GridContainerProps) {
	return (
		<div
			className={s.grid_container}
			style={
				{
					marginInline: `-${columnGap / 2}px`,
					marginBlock: `-${rowGap / 2}px`,
					"--padding-inline": `${columnGap / 2}px`,
					"--padding-block": `${rowGap / 2}px`,
					...style
				} as React.CSSProperties
			}
		>
			{children}
		</div>
	);
}

export function GridItem({ xs, sm, md, lg, xl, xxl, children }: GridItemProps) {
	const colXXL = xxl ?? xl ?? lg ?? md ?? sm ?? xs;
	const colXL = xl ?? lg ?? md ?? sm ?? xs;
	const colLG = lg ?? md ?? sm ?? xs;
	const colMD = md ?? sm ?? xs;
	const colSM = sm ?? xs;

	return (
		<div
			style={
				{
					"--flex-xxl": colXXL ? `0 0 ${(colXXL * 100) / 24}%` : "auto",
					"--flex-xl": colXL ? `0 0 ${(colXL * 100) / 24}%` : "auto",
					"--flex-lg": colLG ? `0 0 ${(colLG * 100) / 24}%` : "auto",
					"--flex-md": colMD ? `0 0 ${(colMD * 100) / 24}%` : "auto",
					"--flex-sm": colSM ? `0 0 ${(colSM * 100) / 24}%` : "auto",
					"--flex-xs": xs ? `0 0 ${(xs * 100) / 24}%` : "auto"
				} as React.CSSProperties
			}
			className={s.grid_item}
		>
			{children}
		</div>
	);
}
