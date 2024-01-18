import React from "react";
import { Link } from "gatsby";
import Logo from './icons/logo';
import '../styles/nav.scss';

const Nav = () => {    
    return (
        <div className="nav">
            <Link to="/" aria-label="home">
                <Logo />
            </Link>
        </div>
    );
};

export default Nav;