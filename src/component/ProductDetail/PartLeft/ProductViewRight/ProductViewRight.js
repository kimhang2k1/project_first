import React, { Component } from "react";
import ImageProductMain from "../ProductViewLeft/ImageProductMain/ImageProductMain";
import ListImages from "../ProductViewLeft/ListImages/ListImages";
import ColorProduct from "./ColorProduct/ColorProduct";
import PriceProduct from "./PriceProduct/PriceProduct";
import ProductName from "./ProductName/ProductName";

class ProductViewRight extends Component {
  render() {
    return (
      <div className="information">
        <div className="name">
          <p style="margin:0;">Son Kem Lì Black Rouge Velet Tint Version 1</p>
        </div>
        <Brand />
        <div className="price">
          <span>160.000đ</span>
          <strike>200.000đ</strike>
        </div>
        <ColorProduct />
        <Amount />
        <div className="buy-product-detail">
          <p style="margin-top:2rem;">
            <span>
              <i
                class="fas fa-cart-plus"
                style="padding-right: 1rem; font-size: 16px;"
              ></i>
              Thêm vào giỏ hàng{" "}
            </span>
            <a href="" style="background-color:red;color:#fff;">
              Mua Ngay{" "}
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default ProductViewRight;
