import React from "react";
import { Link } from "react-router-dom";
import PropTyps from "prop-types";
import { Consumer } from "./context";

const Product = props => {
  // const { id, title, img, price, inCart } = props.pro;

  return (
    <Consumer>
      {value => {
        return (
          <>
            {props.pro ? (
              <div className="prod">
                <div className="col-9 mx-auto col-md-6 col-lg-6 my-3">
                  <div className="card">
                    <div
                      className="img-container p-5"
                      onClick={() => value.handelDetail(props.pro.id)}
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
                        onClick={() => value.addToCart(props.pro.id)}
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
                      <p className="align-self-center mb-0">
                        {props.pro.title}
                      </p>
                      <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">$ {props.pro.price}</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        );
      }}
    </Consumer>
  );
};
//const { id, title, img, price, inCart } = props.pro;
Product.propTyps = {
  Product: PropTyps.shape({
    id: PropTyps.bool
  }).isRequired
};

export default Product;
//     </>
//
