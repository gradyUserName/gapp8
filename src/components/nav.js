import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Logo from './icons/logo';
import useScrollDirection from "../hooks/useScrollDirection";
import '../styles/nav.scss';

const Nav = () => {
    const scrollDirection = useScrollDirection('down');
    const [scrolledToTop, setScrolledToTop] = useState(true);

    const handleScroll = () => {
        setScrolledToTop(window.scrollY < 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="nav" id="nav">
            <Link to="/" aria-label="home">
                <Logo />
            </Link>
        </div>
    );
};

export default Nav;