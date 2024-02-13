import React from "react";
import "../../styles/projects.scss";
import Github from "../icons/github";
import gordle from '../../images/gordle.png';
import ytdWindow from "../../images/ytd.png";

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h2>Things I've made</h2>
            <div className="project" id="gordle">
                <div className="project-info">
                    <h4>Featured Project</h4>
                    <a href="/gordle" className="project-title" target="_blank" rel="noopener noreferrer">Gordle</a>
                    <div className="project-description">
                        <p>
                            A Wordle clone. Get 6 chances to guess a 5-letter word, with 
                            feedback given on each guess in the form of colored tiles.
                        </p>
                    </div>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Gatsby</li>
                    </ul>
                    <a href="gradyUserName/gapp8/blob/main/src/pages/gordle.js" target="_blank" rel="noopener noreferrer">
                        <Github />
                    </a>
                </div>
                <img className="splash" src={gordle} alt="Gordle" />
            </div>
            <div className="project" id="ytd">
                <div className="project-info">
                    <h4>Featured Project</h4>
                    <a className="project-title" href="https://github.com/gradyUserName/python-youtube-downloader" target="_blank" rel="noopener noreferrer">YouTube Video Downloader</a>
                    <div className="project-description">
                        <p>
                            A simple Python application that lets you download 
                            and save YouTube videos in the form of an MP4.
                        </p>
                    </div>
                    <ul>
                        <li>Python</li>
                        <li>Tkinter</li>
                        <li>Pytube</li>
                    </ul>
                    <a href="https://github.com/gradyUserName/python-youtube-downloader" target="_blank" rel="noopener noreferrer">
                        <Github />
                    </a>
                </div>
                <img className="splash" src={ytdWindow} alt="YouTube Downloader" />
            </div>
        </div>
    );
};

export default Projects;