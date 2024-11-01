import React from "react";

import s from "./loading_spin2.module.css";

type LoadingSpinProps = {
	size?: number;
};

export const LoadingSpin2 = ({ size = 24 }: LoadingSpinProps) => {
	return (
		<div className={s.container} style={{ width: size, height: size }}>
			<div className={s.spinner} />
		</div>
	);
};
