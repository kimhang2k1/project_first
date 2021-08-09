import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <i className="fas fa-shopping-cart" style={{ fontSize: "25px" }}></i>
        <span>0</span>
        <div className="row-shopping-cart" style={{ textAlign: "center" }}>
          <div className="Image-not-add-cart">
            <img
              src="/img/cart.png"
              alt=""
              style={{ width: "40px", margin: "auto" }}
            />
          </div>
          <div className="content">Chưa có sản phẩm nào</div>
        </div>
      </div>
    );
  }
}

export default Cart;
