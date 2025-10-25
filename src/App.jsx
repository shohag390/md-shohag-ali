import { Outlet } from "react-router";
import Navbar from "./shared/Navbar/Navbar";
import Footer from "./shared/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import MouseFollower from "./components/MouseFollower/MouseFollower";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <MouseFollower />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
