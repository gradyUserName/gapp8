import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Logo from './icons/logo';
import useScrollDirection from "../hooks/useScrollDirection";
import '../styles/nav.scss';

const Nav = () => {
    const scrollDirection = useScrollDirection('up');
    const [scrolledToTop, setScrolledToTop] = useState(true);

    const handleScroll = () => {
        setScrolledToTop(window.scrollY < 50);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleLinkClick = (event) => {
        event.preventDefault();
        const targetElement = document.querySelector(event.target.getAttribute('href').substring(1));
        targetElement.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={scrollDirection === 'up' || scrolledToTop === true ? "nav" : "nav-hidden"} id="nav">
            <Link to="/#hero" onClick={scrollToTop} aria-label="home">
                <Logo />
            </Link>
            <ul>
                <li>
                    <Link to="/#about" onClick={handleLinkClick} aria-label="About">About</Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;