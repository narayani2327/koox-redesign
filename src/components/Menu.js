import React from 'react';
import {Component} from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar';
class Menu extends Component {
    render() { 
        return (
            <>
                <Navbar/>
                <div>
                    <Link to="/koox-redesign/menu/coldpressed">Cold - Pressed</Link>
                    <Link to="/koox-redesign/menu/smoothies">Smoothies</Link>
                    <Link to="/koox-redesign/menu/boosters">Boosters</Link>
                    <Link to="/koox-redesign/menu/bowls">Bowls</Link>
                    <Link to="/koox-redesign/menu/treats">Treats</Link>
                </div>
            </>
        );
    }
}
export default Menu;