import React, { Component } from "react";
import Amount from "./Amount/Amount";
import Brand from "./Brand/Brand";
import ColorProduct from "./ColorProduct/ColorProduct";

class ProductViewRight extends Component {
  render() {
    return (
      <div className="information">
        <div className="name">
          <p style={{ margin: 0 }}>
            Son Kem Lì Black Rouge Velet Tint Version 1
          </p>
        </div>
        <Brand />
        <div className="price">
          <span>160.000đ</span>
          <strike>200.000đ</strike>
        </div>
        <ColorProduct />
        <Amount />
        <div className="buy-product-detail">
          <p style={{ marginTop: "2rem" }}>
            <span>
              <i
                className="fas fa-cart-plus"
                style={{ paddingRight: "1rem", fontSize: "16px" }}
              ></i>
              Thêm vào giỏ hàng{" "}
            </span>
            <button>Mua Ngay</button>
          </p>
        </div>
      </div>
    );
  }
}

export default ProductViewRight;
