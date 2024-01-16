import React from "react";
import logo from '../../images/g_minimal.png';

const Logo = ({ className }) => {
    return (
        <img src={logo} alt="Logo" className="logo" />
    );
};

export default Logo;