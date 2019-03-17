import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    products: storeProducts,
    details: detailProduct
  };

  // handelDetail = () => {
  //   console.log("handel details");
  // };
  // addToCart = () => {
  //   console.log("add to cart");
  // };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
// if error occure set ..this.state
