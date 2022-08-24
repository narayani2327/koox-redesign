import React from 'react';
import {Component} from "react";
import { Link } from "react-router-dom";
import SVG from "./SVG";
class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/koox-redesign"><SVG/></Link>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/koox-redesign">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/koox-redesign/about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="/koox-redesign/menu"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >Menu</Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className="dropdown-item" to="/koox-redesign/menu/coldpressed">Cold-Pressed</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/koox-redesign/menu/smoothies">Smoothies</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/koox-redesign/menu/boosters">Boosters</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/koox-redesign/menu/bowls">Bowls</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/koox-redesign/menu/treats">Treats</Link>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/koox-redesign/order">Order</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/koox-redesign/contact">Contact</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        );
    }
}
export default Navbar;