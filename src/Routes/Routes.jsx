import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../layout/HomeLayout";



const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: HomeLayout,
            },
        ]
    }
])

export default router;