import React from "react";
import { Link } from "gatsby";
import Logo from './icons/logo';

const Nav = () => {    
    return (
        <>
            <Link to="/" aria-label="home">
                <Logo />
            </Link>
        </>
    );
};

export default Nav;