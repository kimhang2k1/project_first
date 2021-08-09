import React, { Component } from "react";
import ListProduct from "./ListProduct/ListProduct";

class NewProduct extends Component {
  render() {
    return (
      <>
        <div className="title">
          <img src="img/flower.PNG" alt="" style={{ margin: "auto" }} />
          <h2>
            <span>Sản phẩm mới</span>
          </h2>
          <div className="title-introduction">
            <p>Những sản phẩm được khách hàng lựa chọn nhiều nhất</p>
            <hr />
          </div>
        </div>
        <div className="product">
          <ListProduct />
          <ListProduct />
          <ListProduct />
          <ListProduct />
          <ListProduct />
          <ListProduct />
          <ListProduct />
          <ListProduct />
          <ListProduct />
        </div>
      </>
    );
  }
}

export default NewProduct;
