import React from "react";
import '../styles/navbar.css'
import { Link } from "react-router-dom";


const NavBar = () =>{
    return (
        <div className="navBar">
            <img className="Logo"  src="logo.png" alt='Sureal_Estate_Logo'></img>
            <ul className="navbar-links">
                <Link to="/">
                <li className="navbar-links-item">View Properties</li>
                </Link>
                <Link to="/AddProperty">
                <li className="navbar-links-item">Add a Property</li>
                </Link>
            </ul>


        </div>
    )
};
export default NavBar;