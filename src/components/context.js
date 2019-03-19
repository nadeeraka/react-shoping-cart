import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    products: [],
    details: detailProduct
  };
  componentDidMount = () => {
    this.setProductCopy();
    console.log(this.state.products);
  };

  setProductCopy = () => {
    let tempProduct = [];

    storeProducts.forEach(itam => {
      const singaleProduct = { ...itam };
      console.log(singaleProduct);
      tempProduct = [...tempProduct, singaleProduct];
    });

    console.log(tempProduct);

    return this.setState(() => {
      return { products: tempProduct };
    });
  };
  handelDetail = id => {
    const hold = this.getItem(id);
    return this.setState(() => {
      return { details: hold };
    });
  };
  addToCart = id => {
    console.log(`add to cart ${id}`);
  };
  getItem = id => {
    const product = this.state.products.find(res => res.id === id);
    return product;
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          handelDetail: this.handelDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
// if error occure set ..this.state
