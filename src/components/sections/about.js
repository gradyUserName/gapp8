import React from "react";
import "../../styles/about.scss";
import selfie from "../../images/self.jpg";

const About = () => {
    return (
        <div className="about" id="about">
            <h2>About Me</h2>
            <div className="about-main">
                <p>
                    Hello! My name is Grady. I am a self-taught coder living in Oklahoma City.
                    I started learning to code in 2021 when I learned to create scripts for 
                    a legacy system at work that was otherwise very complicated, sensitive to 
                    mistypes, and all around user-unfriendly. Not only did that experience open 
                    my eyes to the fun, puzzle solving nature of coding, but seeing my work save 
                    people a lot of time and headache sparked a love of programming that has only 
                    continued to grow.
                </p>
                <p>
                    In January of 2022, I made a simple New Year's resolution: Spend 30 minutes learning 
                    to code every day. Pretty soon, 30 minutes a day turned into 45 minutes a day, 
                    turned into an hour a day, et cetera. Now, I spend most of my free time 
                    learning to use new technologies and working on projects to practice what I've learned, 
                    further honing my skills.
                </p>
            </div>
            <div className="about-techs">
                <p>
                    Here are a few of the technologies I am most familiar with:
                </p>
                <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Gatsby</li>
                    <li>Python</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>
            <img src={selfie} alt="headshot" />
        </div>
    );
};

export default About;