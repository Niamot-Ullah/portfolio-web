import React from 'react';
import Banner from './../Components/Banner';
import AboutMe from '../Components/AboutMe';
import SkillsSection from '../Components/SkillsSection';
import Education from '../Components/Education';
import Contact from '../Components/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <SkillsSection></SkillsSection>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;