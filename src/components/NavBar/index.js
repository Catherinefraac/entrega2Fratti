import React from "react";
import CartWidget from '../CartWidget';

export const NavBar = () => {
    return (
        <div className="container">
        <nav className= "nav">
            <div className="nav-brand">
                <a className="nav_link" href=""> </a>
            </div>
            <ul className="nav-list">
                <li>
                    <a className="nav-link" href=""><CartWidget/> </a>
                </li>
            </ul>
        </nav>


        </div>
    );
}

export default NavBar;