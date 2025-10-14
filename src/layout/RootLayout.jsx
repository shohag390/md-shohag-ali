import React from 'react'
import Services from '../pages/Services/Services';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Skills from '../pages/Skills/Skills';
import Contacts from '../pages/Contacts/Contacts';
import Projects from '../pages/Projects/Projects';

const RootLayout = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contacts />
    </>
  )
}

export default RootLayout;