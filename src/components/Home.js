import React from "react";
import MainPic from "../assets/mixture.jpg";
import ColdPressed from "./ColdPressed";
import Boosters from "./Boosters";
import Bowls from "./Bowls";
import Smoothies from "./Smoothies";
import Treats from "./Treats";
class Home extends React.Component {
  render() { 
    return (
      <div className="main-page">
        <img src={MainPic}></img>
        <div className="main-title">
            <h2>Juice Farmacy</h2>
            <p>Make your life healthy and nutritious</p>
        </div>
        <ColdPressed/>
        <Smoothies/>
        <Boosters/>
        <Bowls/>
        <Treats/>
      </div>
    );
  }
}
export default Home;