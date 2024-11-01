import React from "react";
import { noop } from "lodash";

import s from "./modal_error.module.css";
import { IconXCircle } from "assets/svgs";
import { Modal } from "../modal";
import { FlexContainer } from "../flex";
import { Typography } from "../typography";

type ModalErrorProps = {
	open?: boolean;
	message?: string | null;
	onClose?: () => void;
};

export function ModalError({ open = false, onClose = noop, message = null }: ModalErrorProps) {
	return (
		<Modal open={open} onClose={onClose}>
			<div className={s.container}>
				<FlexContainer alignItems="center" justifyContent="center">
					<IconXCircle />
				</FlexContainer>
				{message && (
					<FlexContainer alignItems="center" justifyContent="center">
						<Typography align="center" style={{ maxWidth: 450 }} top={12}>
							{message}
						</Typography>
					</FlexContainer>
				)}
			</div>
		</Modal>
	);
}
