import React, { Component } from "react";

class ItemProductFavorite extends Component {
  render() {
    return (
      <div className="favorite-product-information">
        <div className="images-product-favorite">
          <img src="/img/sonBlackRouge.jpg" alt="" />
        </div>
        <div className="information-product-favorite">
          <div className="product-name-favorite">
            <p>Son Kem Lì Black Rouge Velet Tint Version 1</p>
          </div>
          <div className="product-price-favorite">
            <span>160.000đ</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemProductFavorite;
