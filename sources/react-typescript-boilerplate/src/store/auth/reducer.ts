import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	user: null
};

export const authReducer = createReducer(initialState, (builder) => {
	builder.addCase("fulfilled", (state, action) => {});
});
