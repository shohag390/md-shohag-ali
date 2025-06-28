import React from 'react';
import Hero from '../Pages/Hero/Hero';
import About from '../Pages/About/About';
import Skills from '../Pages/Skills/Skills';
import Projects from '../Pages/Projects/Projects';
import Contacts from '../Pages/Contacts/Contacts';
import Services from '../Pages/Services/Services';

const HomeLayout = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Skills />
            <Contacts />
        </>
    );
};

export default HomeLayout;