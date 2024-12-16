import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "store/auth/reducer";

export const store = configureStore({
	reducer: {
		authReducer: authReducer
	},
	devTools: true,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});
