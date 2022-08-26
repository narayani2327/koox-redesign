import React from "react";
import SVG from "./SVG";
class Home extends React.Component {
  render() {  
    window.addEventListener('scroll',()=>{
      var reveals=document.querySelectorAll(".cardd")
      for(var i=0;i<reveals.length;i++){
        var windowheight=window.innerHeight
        var revealtop=reveals[i].getBoundingClientRect().top
        var revealpoint=150
        if(revealtop<windowheight-revealpoint){
            reveals[i].classList.add('active')
        }
        else{
            reveals[i].classList.remove('active')
        }
      }
    })
    return (
      <>
      <div className="logo"><SVG/></div>
      <div className="main-page">
        <div className="main-title">
            <h2>Juice Farmacy</h2>
            <p>Make your life healthy and nutritious</p>
        </div>
      </div>
      <div id="about">
        <p className="main-title">About Us</p>
        <p className="about-text">
          Koox is a fruit juice company based in London, which is known for its 100% Organic, 100% cold-pressed, 100% raw, 0% additives, 0% pasteurization, and 0% HPP, healthy juices, and immunity boosters. Our juices are filled with nutrients and natural ingredients like coconut water, avocado, kale, spinach, lime, mint, Apple, lemon, celery, parsley, ginger, beetroot, carrot, aloe vera, and many more. We sell many products, you can choose according to your health and body needs. Below each product, there is a list of nutrients present in the product with the ingredients used.
        </p>
      </div>
      <div className="claims">
        <p className="main-title">Product Info</p>
        <div className="cards">
          <div className="cardd">100%<br/>Organic</div>
          <div className="cardd">100%<br/>Cold Pressed</div>
          <div className="cardd">100%<br/>Raw</div>
          <div className="car cardd">Certified by Soil Association</div>
          <div className="cardd">0%<br/>Additives</div>
          <div className="cardd">0%<br/>HPP</div>
          <div className="cardd">0%<br/>Pasteurisation</div>
        </div>
      </div>
      </>
    );
  }
}
export default Home;