import React, { Component } from "react";
import ItemColorProduct from "./ItemColorProduct/ItemColorProduct";

class ColorProduct extends Component {
  render() {
    return (
      <div className="color-product">
        <ItemColorProduct />
        <ItemColorProduct />
        <ItemColorProduct />
        <ItemColorProduct />
        <ItemColorProduct />
        <ItemColorProduct />
        <ItemColorProduct />
        <ItemColorProduct />
      </div>
    );
  }
}

export default ColorProduct;
