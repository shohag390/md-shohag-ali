import React from "react";
import Hero from "../pages/Hero/Hero";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";
import Skill from "../pages/Skill/Skill";
import Projects from "../pages/Projects/Projects";
import Contacts from "../pages/Contacts/Contacts";

const HomeLayout = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Skill />
      <Projects />
      <Contacts />
    </div>
  );
};

export default HomeLayout;
