import React from "react";
import CartWidget from '../CartWidget';
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="container">
        <nav className= "nav">
            <div className="nav-brand">
                <NavLink className="nav_link" to={'/'}>DrinkStore</NavLink>
            </div>
            <ul className="nav-list">
                <li>
                    <NavLink className="nav-link" to={'/categoria/Bebidasconalcohol'}> Bebidas con alcohol</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to={'/categoria/Bebidassinalcohol'}> Bebidas sin alcohol</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to={'/cart'}><CartWidget/> </NavLink>
                </li>
            </ul>
            </nav>


        </div>
    );
}

export default NavBar;