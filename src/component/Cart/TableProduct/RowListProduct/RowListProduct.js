import React, { Component } from "react";

class RowListProduct extends Component {
  render() {
    return (
      <div
        className="items-in-cart"
        style={{ display: "flex", fontSize: "17px", paddingTop: "1rem" }}
      >
        <div className="check-box-cart" style={{ marginRight: "1rem" }}>
          <input
            type="checkbox"
            name="item"
            style={{ width: "16px", height: "16px" }}
          />
        </div>
        <div
          className="items-name"
          style={{ width: "45%", color: "black", display: "flex" }}
        >
          <div className="images-cart" style={{ marginRight: "1rem" }}>
            <img
              src="/img/sonBlackRouge.jpg"
              style={{ width: "80px" }}
              alt=""
            />
          </div>
          <div className="name-product" style={{ lineHeight: 1 }}>
            <p>Son Kem Lì Black Rouge Velet Tint Version 1</p>
          </div>

          <div
            className="classification-of-goods"
            style={{ width: "200px", textAlign: "center", marginTop: "1rem" }}
          >
            A01
          </div>
        </div>
        <div
          className="items-price"
          style={{ width: "15%", marginTop: "1rem", textAlign: "center" }}
        >
          <p style={{ margin: 0 }}> 160.000 </p>
        </div>
        <div
          className="items-amount"
          style={{ width: "15%", marginTop: "1rem" }}
        >
          <button> - </button>
          <input type="text" value="1" disabled />
          <button> + </button>
        </div>
        <div
          className="items-total_price"
          style={{ width: "10%", marginTop: "1rem" }}
        >
          <p style={{ margin: "0" }}> 160.000đ</p>{" "}
        </div>
        <div
          className="items-action"
          style={{ width: "15%", marginTop: "1rem" }}
        >
          <p style={{ margin: 0, cursor: "pointer" }}>Xóa</p>
        </div>
      </div>
    );
  }
}

export default RowListProduct;
