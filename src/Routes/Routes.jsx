import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../Layout/HomeLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: HomeLayout,
            }
        ]
    }
]);