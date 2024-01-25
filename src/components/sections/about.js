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
                    I started learning to code in 2021 when I decided to create scripts for 
                    a legacy system at work that was otherwise very complicated, sensitive to 
                    mistypes, and all around user-unfriendly. I always thought that I wasn't 
                    smart enough for coding, but that project started to change the way I thought, 
                    and seeing the scripts in action, and seeing how much time and headache they saved 
                    people, sparked a genuine love of code that continues to this day.
                </p>
                <p>
                    In January of 2022, I made a simple New Year's resolution: Spend 30 minutes learning 
                    to code every day. Pretty soon, 30 minutes a day turned into 45 minutes a day, 
                    turned into an hour a day, et cetera. Now, I spend pretty much all of my free 
                    time learning or working on projects in hopes of eventually getting to do this 
                    professionally.
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