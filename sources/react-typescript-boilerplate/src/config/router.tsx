import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "pages/error-page";
import { LoadingSuspense } from "components/elements";

const SignInPage = React.lazy(() => import("pages/sign-in"));
const NotFoundPage = React.lazy(() => import("pages/notfound"));
const MainLayout = React.lazy(() => import("components/layouts/mainLayout"));
const DashboardPage = React.lazy(() => import("pages/dashboard"));

export const PATH_NOT_FOUND = "*";
export const PATH_SIGN_IN = "/sign-in";
export const PATH_DASHBOARD = "/";

export const SIDEBAR_ITEMS = [];

export const router = createBrowserRouter([
	{
		path: PATH_SIGN_IN,
		element: (
			<Suspense fallback={<LoadingSuspense />}>
				<SignInPage />
			</Suspense>
		),
		errorElement: <ErrorPage isGlobal={true} />
	},
	{
		path: PATH_DASHBOARD,
		element: (
			<Suspense fallback={<LoadingSuspense />}>
				<MainLayout />
			</Suspense>
		),
		errorElement: <ErrorPage isGlobal={true} />,
		children: [
			{
				index: true,
				path: PATH_DASHBOARD,
				element: <DashboardPage />,
				errorElement: <ErrorPage />
			}
		]
	},
	{
		path: PATH_NOT_FOUND,
		element: (
			<Suspense fallback={<LoadingSuspense />}>
				<NotFoundPage isGlobal />
			</Suspense>
		),
		errorElement: <ErrorPage isGlobal={true} />
	}
]);
