import React, { Component } from "react";
import Title from "./title";
import { storeProducts } from "../data";
export default class Product extends Component {
  state = {
    products: storeProducts
  };
  render() {
    console.log(this.state.products);
    return (
      <>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <Title name="available" title="products" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
