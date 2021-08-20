import React, { Component } from "react";

class ItemAllProduct extends Component {
  render() {
    return (
      <div className="product-frame">
        <div className="images">
          <img src="/img/sonBlackRouge.jpg" alt="" />
        </div>
        <div className="name">
          <h3>
            <p>Son Kem Lì Black Rouge Velet Tint Version 1</p>
          </h3>
        </div>
        <div className="price">
          <span>160.000đ</span>
          <strike>200.000đ</strike>
        </div>
        <div className="button-cart">
          <p>
            <i className="fas fa-shopping-cart">&nbsp;&nbsp; Thêm vào giỏ</i>
          </p>
        </div>
      </div>
    );
  }
}

export default ItemAllProduct;
