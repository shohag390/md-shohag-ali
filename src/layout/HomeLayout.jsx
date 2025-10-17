import React from 'react'
import Hero from '../pages/Hero/Hero';
import Services from '../pages/Services/Services';
import About from '../pages/About/About';

const HomeLayout = () => {
    return (
        <div>
            <Hero />
            <Services />
            <About />
        </div>
    )
}

export default HomeLayout;