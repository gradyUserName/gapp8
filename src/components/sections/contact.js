import React from "react";
import "../../styles/contact.scss";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h2>Contact</h2>
            <p>
                I am currently looking for new opportunities, so my inbox is 
                open for business. If you have any questions, or just want to 
                say hi, please reach out and I will reply as soon as I can.
            </p>
            <a href="mailto:gleviholder@gmail.com">
                Say Hello
            </a>
        </div>
    );
};

export default Contact;