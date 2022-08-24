import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
class App extends React.Component {
  render() { 
    return (
      <>
        <Navbar/>
        <h1>Hello</h1>
        <Home/>
      </>
      );
  }
}
export default App;