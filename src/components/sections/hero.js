import React from "react";
import '../../styles/hero.scss';
import resume from '../../images/resume.pdf';

const Hero = () => {
    const handleOpenResume = () => {
        window.open(resume, '_blank');
    };

    return (
        <div className="hero">
            <h1>Hi, my name is</h1>
            <h2>Grady Holder</h2>
            <h3>I make stuff for computers.</h3>
            <p>
                I'm an ametuer coder specializing in web applications. 
                But I've been known to dabble in Python... ;)
            </p>
            <button onClick={handleOpenResume}>Check out my resume!</button>
        </div>
    );
};

export default Hero;