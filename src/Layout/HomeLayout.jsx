import React from 'react';
import Banner from '../Pages/Banner/Banner'
import About from '../Pages/About/About';
import Services from '../Pages/Services/Services';
import Projects from '../Pages/Projects/Projects';
import Skills from '../Pages/Skills/Skills';
import Testimonials from '../Pages/Testimonial/Testimonials';
import Contacts from '../Pages/Contacts/Contacts';

const HomeLayout = () => {
    return (
        <>
            <Banner />
            <About />
            <Services />
            <Skills />
            <Projects />
            <Testimonials />
            <Contacts />
        </>
    )
}

export default HomeLayout;