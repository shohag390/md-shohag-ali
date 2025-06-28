import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../Layout/HomeLayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/",
                index: true,
                errorElement: <ErrorPage />,
                Component: HomeLayout,
            }

        ]
    },
]);