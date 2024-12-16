import React from "react";
import { noop } from "lodash";

import s from "./modal.module.css";
import { IconX } from "assets/svgs";

type ModalProps = {
	open?: boolean;
	onClose?: () => void;
	children?: React.ReactNode;
};

export function Modal({ open = false, onClose = noop, children }: ModalProps) {
	if (!open) return null;

	return (
		<div className={s.overlay}>
			<div className={s.modal}>
				<button className={s.close_button} onClick={onClose}>
					<IconX />
				</button>
				<div>{children}</div>
			</div>
		</div>
	);
}
