import React from 'react';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Services from '../Pages/Services/Services';
import Projects from '../Pages/Projects/Projects';
import Skills from '../Pages/Skills/Skills';
import Contacts from '../Pages/Contacts/Contacts';

const HomeLayout = () => {
    return (
        <div className='w-[76%] h-[83vh] bg-[#9696961a] rounded-xl p-[30px] overflow-scroll'>
            <div>
                <Home />
                <About />
                <Services />
                <Skills />
                <Projects />
                <Contacts />
            </div>
        </div>
    );
};

export default HomeLayout;