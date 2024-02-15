import React from "react";
import "../../styles/contact.scss";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h2>Contact</h2>
            <p>
                Have an opportunity for me? Just want to say hi? Either 
                way, my inbox is open. Please reach out and I will reply 
                as soon as I can.
            </p>
            <a href="mailto:gleviholder@gmail.com">
                Say Hello
            </a>
        </div>
    );
};

export default Contact;