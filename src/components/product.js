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
            <div className="img-container p-5" onClick={console.log("pp")}>
              <Link to="/details">
                <img
                  src={props.pro.img}
                  alt="product img"
                  className="card-img-top"
                />
              </Link>
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
