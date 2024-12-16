import React from "react";

import s from "./loading_suspense.module.css";

import { LoadingSpin } from "../loadingSpin";

export const LoadingSuspense = () => {
	return (
		<div className={s.container}>
			<LoadingSpin />
		</div>
	);
};
