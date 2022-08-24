import React from "react";
import SVG from "./SVG";
class Home extends React.Component {
  render() { 
    return (
      <>
      <div className="logo"><SVG/></div>
      <div className="main-page">
        <div className="main-title">
            <h2>Juice Farmacy</h2>
            <p>Make your life healthy and nutritious</p>
        </div>
      </div>
      </>
    );
  }
}
export default Home;