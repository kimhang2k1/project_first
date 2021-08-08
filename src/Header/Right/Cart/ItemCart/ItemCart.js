import React, { Component } from "react";

class ItemCart extends Component {
  render() {
    return (
      <div className="row-shopping-cart" style={{ textalign: "center" }}>
        <div className="Image-not-add-cart">
          <img src="/img/cart.png" alt="" style={{ width: "40px" }} />
        </div>
        <div className="content">Chưa có sản phẩm nào</div>
      </div>
    );
  }
}

export default ItemCart;
