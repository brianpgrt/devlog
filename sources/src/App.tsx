import React, { useEffect, useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { store } from "config/configureStore";
import { router } from "config/router";
import { LoadingSuspense, ModalError } from "components/elements";

function App() {
	const [openModalError, setOpenModalError] = useState({ open: false, message: null });

	useEffect(() => {
		Object.defineProperty(window, "handleOpenModalError", {
			value: ({ message = null }) => setOpenModalError({ open: true, message }),
			writable: false
		});
	}, []);

	return (
		<ReduxProvider store={store}>
			<RouterProvider router={router} fallbackElement={<LoadingSuspense />} />
			<ModalError {...openModalError} onClose={() => setOpenModalError({ open: false, message: null })} />
		</ReduxProvider>
	);
}

export default App;
