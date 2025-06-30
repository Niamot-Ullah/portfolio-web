import React from 'react';
import Banner from './../Components/Banner';
import AboutMe from '../Components/AboutMe';
import SkillsSection from '../Components/SkillsSection';
import Education from '../Components/Education';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Education></Education>
            <SkillsSection></SkillsSection>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;