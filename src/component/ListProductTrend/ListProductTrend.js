import React, { Component } from "react";

class ListProductTrend extends Component {
  render() {
    return (
      <div className="product-frame">
        <div className="images-product">
          <img src="img/7.jpg" alt="" />
        </div>
        <div className="product-name">
          <h3>
            <p>Đông trùng hạ thảo Aloha</p>
          </h3>
        </div>
        <div className="price-product">
          <span>380,000đ</span>
          <strike>490,000đ</strike>
        </div>
        <div className="button-cart">
          <p>THÊM VÀO GIỎ</p>
        </div>
      </div>
    );
  }
}

export default ListProductTrend;
