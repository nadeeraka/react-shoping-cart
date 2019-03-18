import React, { Component } from "react";
import { Consumer } from "./context";
import { ButttonContainer } from "./button";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const {
            id,
            inCart,
            title,
            company,
            img,
            price,
            info
          } = value.details;
          // console.log(id)
          return (
            <div className="container py-5">
              {/* product title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-blue text-title my-3">
                  <h1>{title}</h1>
                </div>
                {/* product title  end*/}
                {/* product info */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} className="img-fluid" alt="img" />
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3">
                    {/* product text */}
                    {/*console.log(img)*/}
                    <h3>Modal : {title}</h3>
                    <h4 className="text-title  text-muted mt-3 mb-2">
                      Made By : {company}
                    </h4>
                    <h4 className="text-blue">Price: {`$ ${price}`}</h4>
                    <p className="mt-3 mb-0 details">infro about the product</p>
                    <p className="text-muted lead">{info}</p>
                    {/* blue button */}
                    <Link to="/">
                      <ButttonContainer>Back To Product</ButttonContainer>
                    </Link>
                    <ButttonContainer
                      onClick={() => value.addToCart(id)}
                      disabled={inCart ? true : false}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButttonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
