import React from "react";
import ColdPressed from "./ColdPressed";
import Boosters from "./Boosters";
import Bowls from "./Bowls";
import Smoothies from "./Smoothies";
import Treats from "./Treats";
import Menu from "./Menu";
class Home extends React.Component {
  render() { 
    return (
      <>
      <div className="main-page">
        <div className="main-title">
            <h2>Juice Farmacy</h2>
            <p>Make your life healthy and nutritious</p>
        </div>
      </div>
      <Menu/>
      {/* <ColdPressed/>
      <Smoothies/>
      <Boosters/>
      <Bowls/>
      <Treats/> */}
      </>
    );
  }
}
export default Home;