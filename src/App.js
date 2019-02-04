import React, { Component } from "react";
import Nav from "./components/nav";
import Plist from "./components/pList";
import Details from "./components/details";
import Notfound from "./components/Notfound";
import Cart from "./components/Cart";
//import  from "./components/";
//import  from "./components/";

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Plist />
        <Details />
        <Notfound />
        <Cart />
      </>
    );
  }
}

export default App;
