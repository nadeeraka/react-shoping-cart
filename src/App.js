import React, { Component } from "react";
import Nav from "./components/nav";
import Plist from "./components/pList";
import Details from "./components/details";
import Notfound from "./components/Notfound";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./components/product";
//import  from "./components/";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <>
            <Nav />
            <Switch>
              <Route path="/" component={Plist} exact />
              <Route path="/details" component={Details} />
              <Route path="/cart" component={Cart} />
              <Route component={Notfound} />
            </Switch>
            <Product />
          </>
        </Router>
      </>
    );
  }
}

export default App;
