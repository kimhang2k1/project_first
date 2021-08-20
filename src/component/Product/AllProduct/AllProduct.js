import React, { Component } from "react";
import ListProduct from "../../Home/Product/ListProduct";

class AllProduct extends Component {
  render() {
    return (
      <div className="all-product">
        <ListProduct />
        <ListProduct />
        <ListProduct />
        <ListProduct />
        <ListProduct />
        <ListProduct />
        <ListProduct />
      </div>
    );
  }
}

export default AllProduct;
