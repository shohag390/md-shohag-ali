import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./context/ThemeContext";

// AOS initializer wrapper component
const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return children;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <ThemeProvider>
      <AOSWrapper>
        <RouterProvider router={router} />
      </AOSWrapper>
    </ThemeProvider>
  </StrictMode>
);
