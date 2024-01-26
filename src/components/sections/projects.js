import React from "react";
import "../../styles/projects.scss";
import Github from "../icons/github";
import ytdWindow from "../../images/ytd.png";

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h2>Things I've made</h2>
            <div className="project" id="ytd">
                <div className="project-info">
                    <h4>Featured Project</h4>
                    <h3>YouTube Video Downloader</h3>
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
                <img src={ytdWindow} alt="YouTube Downloader" />
            </div>
        </div>
    );
};

export default Projects;