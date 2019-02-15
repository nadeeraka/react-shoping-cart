import React, { Component } from "react";
const productContext = React.createContext;

export default class ProductProvider extends Component {
  render() {
    return (
      <productContext.Provider value="json">
        {this.props.children}
      </productContext.Provider>
    );
  }
}
