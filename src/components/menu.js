import React from "react";
import Hamburger from '../images/hamburger-menu-icon.png';

const Menu = () => {
    return (
        <div className="menu">
            <button>
                <img src={Hamburger} alt="hamburger menu"></img>
            </button>
        </div>
    );
};

export default Menu;