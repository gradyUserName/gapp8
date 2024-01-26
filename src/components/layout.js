import React, { useEffect } from "react";
import Nav from "./nav";
import Social from "./social";
import Email from "./email";
import Footer from "./footer";

const Layout = ({ children, location }) => {
    const handleExternalLinks = () => {
        const links = document.querySelectorAll('a');

        links.forEach(link => {
            const href = link.getAttribute('href');
            const isExternal = href.startsWith('http') && !href.startsWith(window.location.origin);
    
            if (isExternal) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    };

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView();
                    el.focus();
                }
            }, 0);
        }

        handleExternalLinks();
    }, [location.hash]);

    return (
        <body>
            <Nav />
            <Social />
            <Email />
            <main>
                {children}
            </main>
            <Footer />
        </body>
    );
};

export default Layout;