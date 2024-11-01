import React from "react";

import s from "./loading_spin.module.css";
import { IconSpinner } from "assets/svgs";

type LoadingSpinProps = {
	size?: number;
};

export const LoadingSpin = ({ size = 32 }: LoadingSpinProps) => {
	return (
		<div className={s.container}>
			<IconSpinner width={size} height={size} />
		</div>
	);
};
