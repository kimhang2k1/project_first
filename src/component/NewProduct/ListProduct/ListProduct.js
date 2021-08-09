import React, { Component } from "react";

class ListProduct extends Component {
  render() {
    return (
      <div className="product-frame">
        <div className="images-product">
          <img src="./img/sonBbia.jpg" alt="" />
        </div>
        <div className="product-name">
          <h3>
            <p>Son kem lì Bbia Last Velvet Lip Tint Version 1 </p>
          </h3>
        </div>
        <div className="price-product">
          <span>180.000đ</span>
          <strike>220.000đ</strike>
        </div>
        <div className="button-cart">
          <p>THÊM VÀO GIỎ</p>
        </div>
      </div>
    );
  }
}

export default ListProduct;
