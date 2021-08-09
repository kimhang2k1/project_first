import React, { Component } from "react";

class CategoryProduct extends Component {
  render() {
    return (
      <div className="col-item-1">
        <div className="name-product">
          <p>Son môi</p>
        </div>
        <div className="amount-product">
          <i>8 sản phẩm</i>
        </div>
        <div className="img" style={{ paddingLeft: "1rem" }}>
          <img src="img/image_ab_1.png" alt="" />
        </div>
      </div>
    );
  }
}

export default CategoryProduct;
