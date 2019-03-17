import React, { Component } from "react";
import Product from "./product";
import { Consumer } from "./context";
import uuid from "uuid";
class Plist extends Component {
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <Consumer>
                {value => {
                  const { products } = value;
                  console.log(products);
                  return products.map(data => {
                    //const { id, title, img, price, inCart } = data;
                    return <Product key={uuid()} pro={data} />;
                  });
                }}
              </Consumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Plist;
