import React from "react";
import Github from "./icons/github";
import Linkedin from "./icons/linkedin";
import '../styles/social.scss';

const Social = () => {
    return (
        <div className="social">
            <ul>
                <li>
                    <a href="https://github.com/gradyUserName" aria-label="GitHub" target="_blank" rel="noreferrer">
                        <Github />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/grady-holder/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                        <Linkedin />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Social;