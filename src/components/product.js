import React, { Component } from "react";
import { Consumer } from "./context";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Product = props => {
  const { id, title, img, price, inCart } = props;

  return (
    <>
      {props.pro ? (
        <div className="col-9 mx-auto col-6 col-3 my-3">
          <div className="card">
            <div
              className="img-container p-5"
              onClick={() => console.log("pp")}
            >
              <Link to="/details">
                <img
                  src={props.pro.img}
                  alt="product img"
                  className="card-img-top"
                />
              </Link>
              <button
                className="cart-btn"
                disabled={props.pro.inCart ? true : false}
                onClick={() => console.log("clicked")}
              >
                {props.pro.inCart ? (
                  <p className="mb-0" disabled>
                    IN CART
                  </p>
                ) : (
                  <i className="fas fa-cart-plus" />
                )}
              </button>
            </div>
            {/* card footer*/}
            <div className="card-footer d-flex justify-content-between">
              <p className="align-self-center mb-0">{props.pro.title}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Product;
