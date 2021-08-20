import React, { Component } from "react";
import ItemProductFavorite from "./ItemProductFavorite/ItemProductFavorite";

class ProductFavorite extends Component {
  render() {
    return (
      <div className="favorite-product">
        <h2>Có thể bạn sẽ thích</h2>
        <ItemProductFavorite />
        <ItemProductFavorite />
        <ItemProductFavorite />
      </div>
    );
  }
}

export default ProductFavorite;
