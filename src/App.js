import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import Contact from "./components/Contact";
import ColdPressed from "./components/ColdPressed";
import Smoothies from "./components/Smoothies";
import Bowls from "./components/Bowls";
import Boosters from "./components/Boosters";
import Treats from "./components/Treats";
class App extends React.Component {
  render() { 
    return (
      <>
        <Navbar/>
        <Routes>
          <Route path='/koox-redesign' element={<Home/>} />
          <Route path='/koox-redesign/menu/coldpressed' element={<ColdPressed/>} />
          <Route path='/koox-redesign/menu/smoothies' element={<Smoothies/>} />
          <Route path='/koox-redesign/menu/boosters' element={<Boosters/>} />
          <Route path='/koox-redesign/menu/bowls' element={<Bowls/>} />
          <Route path='/koox-redesign/menu/treats' element={<Treats/>} />
          <Route path='/koox-redesign/order' element={<Order/>} />
          <Route path='/koox-redesign/contacts' element={<Contact/>} />
        </Routes>
      </>
      );
  }
}
export default App;