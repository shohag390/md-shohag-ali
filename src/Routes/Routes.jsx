import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../Layout/HomeLayout";
import AboutLayout from "../Layout/AboutLayout";
import ServicesLayout from "../Layout/ServicesLayout";
import SkillsLayout from "../Layout/SkillsLayout";
import ProjectsLayout from "../Layout/ProjectsLayout";
import Contactslayout from "../Layout/Contactslayout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: HomeLayout,
            },
            {
                path: "/about",
                Component: AboutLayout
            },
            {
                path: "/services",
                Component: ServicesLayout
            },
            {
                path: "/skills",
                Component: SkillsLayout
            },
            {
                path: "/projects",
                Component: ProjectsLayout
            },
            {
                path: "/contacts",
                Component: Contactslayout
            },
        ]
    }
]);