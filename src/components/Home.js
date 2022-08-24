import React from "react";
import MainPic from "../assets/mixture.jpg"
class Home extends React.Component {
  render() { 
    return (
      <div className="main-page">
        <img src={MainPic}></img>
        <div className="main-title">
            <h2>Juice Farmacy</h2>
            <p>Make your life healthy and nutritious</p>
        </div>
      </div>
      );
  }
}
export default Home;