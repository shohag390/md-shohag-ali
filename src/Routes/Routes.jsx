import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Skills from "../Pages/Skills/Skills";
import Projects from "../Pages/Projects/Projects";
import Contacts from "../Pages/Contacts/Contacts";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/services",
                Component: Services
            },
            {
                path: "/skills",
                Component: Skills
            },
            {
                path: "/projects",
                Component: Projects
            },
            {
                path: "/contacts",
                Component: Contacts
            },
        ]
    }
]);