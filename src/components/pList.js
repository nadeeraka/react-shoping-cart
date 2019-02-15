import React, { Component } from "react";
import Product from "./product";
import { Consumer } from "./context";
import uuid from "uuid";
class Plist extends Component {
  render() {
    return (
      <>
        <Consumer>
          {value => {
            return value.products.map(val => {
              return <Product key={uuid()} data={val} />;
            });
          }}
        </Consumer>
      </>
    );
  }
}
export default Plist;
