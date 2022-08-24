import {Component} from "react";
import SVG from "./SVG";
class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <SVG/>
                    </a>
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
                        <a className="nav-link active" aria-current="page" href="#">
                            Home
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            About
                        </a>
                        </li>
                        <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Menu
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                            <a className="dropdown-item" href="#">
                                Cold - Pressed
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Smoothies
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Boosters
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Bowls
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Treats
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            Order Now
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            Contact
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        );
    }
}
export default Navbar;