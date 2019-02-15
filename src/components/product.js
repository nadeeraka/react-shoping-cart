import React, { Component } from "react";
import Title from "./title";

export default class Product extends Component {
  render() {
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
