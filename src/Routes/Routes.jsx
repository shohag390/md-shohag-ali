import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../Layout/HomeLayout";
import AboutLayout from "../Layout/AboutLayout";
import ProjectsLayout from "../Layout/ProjectsLayout";
import ContactsLayout from "../Layout/ContactsLayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: HomeLayout
            },
            {
                path: "/about",
                Component: AboutLayout
            },
            {
                path: "/projects",
                Component: ProjectsLayout
            },
            {
                path: "/contacts",
                Component: ContactsLayout
            },
        ]
    }
])


export default router;