import React from 'react';
import About from '../About/About';
import HomeHeader from '../HomeHeader/HomeHeader'
import Skills from '../Skills/Skills';
import Education from '../Education/Education';

const Home = () => {
    return (
        <div className="container">
            <HomeHeader/>
            <About/>
            <Skills/>
            <Education/>
        </div>
    );
};

export default Home;