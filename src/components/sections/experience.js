import React, { useState, useEffect, useCallback } from "react";
import "../../styles/experience.scss";

const Experience = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const showTab = useCallback(() => {
        const tabs = document.getElementsByClassName("job-info");
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].style.display = "none";
        }

        document.getElementById(currentTab).style.display = 'block';
    }, [currentTab]);

    useEffect(() => {
        showTab();
    }, [currentTab, showTab]);

    return (
        <div className="experience" id="experience">
            <h2>Experience</h2>
            <div className="job-list">
                <button className={currentTab === 0 ? "job-tab-active" : "job-tab"} onClick={() => setCurrentTab(0)}>
                    <p>Farmers Insurance</p>
                </button>
                <button className={currentTab === 1 ? "job-tab-active" : "job-tab"} onClick={() => setCurrentTab(1)}>
                    <p>University of Oklahoma</p>
                </button>
                <button className={currentTab === 2 ? "job-tab-active" : "job-tab"} onClick={() => setCurrentTab(2)}>
                    <p>University of Oklahoma</p>
                </button>
            </div>
            <div className="job-info" id={0}>
                <div className="job-title">
                    <h3 className="job-title-title">IT Analyst</h3>
                    <h3 className="job-title-at">@</h3>
                    <h3><a className="job-title-company" href="https://www.farmers.com/" target="_blank" rel="noopener noreferrer">Farmers Insurance</a></h3>
                </div>
                <h4 className="job-dates">Jan 2019 - Present</h4>
                <ul className="job-bullets">
                    <li>
                        <p>
                            Deliver high-quality hardware and software support to Farmers 
                            Insurance Claims and Management employees for a wide range of 
                            enterprise technologies including Guidewire ClaimCenter & PolicyCenter, 
                            ServiceNow, Salesforce SRM, Amazon WorkSpaces, Microsoft Azure, and more.
                        </p>
                    </li>
                    <li>
                        <p>
                            Create and maintain IT knowledgebase articles used by the IT Service Desk, 
                            as well as public articles used by Claims and Management employees outlining 
                            formal processes and providing self-guided troubleshooting for common issues.
                        </p>
                    </li>
                    <li>
                        <p>
                            Develop and maintain scripts for Quick3270, a terminal emulator used by IT and 
                            non-IT personnel to access a variety of IBM Mainframe systems 
                            (zSeries and iSeries).
                        </p>
                    </li>
                </ul>
            </div>
            <div className="job-info" id={1}>
                <div className="job-title">
                    <h3 className="job-title-title">Student Mentor </h3>
                    <h3 className="job-title-at">@ </h3>
                    <h3><a className="job-title-company" href="https://www.ou.edu/" target="_blank" rel="noopener noreferrer">University of Oklahoma</a></h3>
                </div>
                <h4 className="job-dates">Jan 2017 - Jan 2019</h4>
                <ul className="job-bullets">
                    <li>
                        <p>
                            Training, development, and leadership of IT analysts on the 
                            University of Oklahoma IT Service Desk, as well as supervision of 
                            four Service Centers across the campus.
                        </p>
                    </li>
                    <li>
                        <p>
                            Creation and maintenance of IT knowledgebase articles used by 
                            IT personnel to troubleshoot technical issues and serve as 
                            official documentation of organizational processes and policies.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaboration between the IT Service Desk and other departments within 
                            IT to maintain knowledgebase accuracy, identify and improve process 
                            inefficiencies, and assure the quality of service provided.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="job-info" id={2}>
                <div className="job-title">
                    <h3 className="job-title-title">Service Delivery Specialist </h3>
                    <h3 className="job-title-at">@ </h3>
                    <h3><a className="job-title-company" href="https://www.ou.edu/" target="_blank" rel="noopener noreferrer">University of Oklahoma</a></h3>
                </div>
                <h4 className="job-dates">May 2015 - Jan 2017</h4>
                <ul className="job-bullets">
                    <li>
                        <p>
                            Delivery of high-quality hardware and software support to University 
                            of Oklahoma students, faculty, and staff, with a focus on telecommunications 
                            requests, distribution list/shared mailbox management, and Active Directory 
                            updates.
                        </p>
                    </li>
                    <li>
                        <p>
                            Creation and maintenance of IT knowledgebase articles used by 
                            IT personnel to troubleshoot technical issues and serve as 
                            official documentation of organizational processes and policies.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Experience;