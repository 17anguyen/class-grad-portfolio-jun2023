import React from "react";
import { Link } from "react-router-dom"


function Navigation() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item px-4">
                <Link to="/">About</Link>
            </li>
            <li className="nav-item px-4">
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item px-4">
                <Link to="/contact">Contact</Link>
            </li>
            <li className="nav-item px-4">
                <Link to="/resume">Resume</Link>
            </li>
        </ul>
    );
}

export default Nav;