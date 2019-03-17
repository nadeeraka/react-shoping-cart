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
            <div className="img-container p-5">{props.pro.id}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Product;
