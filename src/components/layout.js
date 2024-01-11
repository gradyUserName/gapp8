import React, { useState } from "react";

const Layout = ({ children, location }) => {
    const isHome = locaion.pathname === '/';
    const [isLoading, setIsLoading] = useState(isHome);

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
        if (isLoading) {
            return;
        }

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
    }, [isLoading]);
};

export default Layout;