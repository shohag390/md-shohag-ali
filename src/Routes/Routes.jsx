import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../layout/HomeLayout";
import AboutLayout from "../layout/AboutLayout";
import ServiceLayout from "../layout/ServiceLayout";
import ProjectLayout from "../layout/ProjectLayout";
import ContactLayout from "../layout/ContactLayout";

const router = createBrowserRouter([
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
        Component: AboutLayout,
      },
      {
        path: "/services",
        Component: ServiceLayout,
      },
      {
        path: "/projects",
        Component: ProjectLayout,
      },
      {
        path: "/contact",
        Component: ContactLayout,
      },
    ],
  },
]);

export default router;
