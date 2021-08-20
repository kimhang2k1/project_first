import React, { Component } from "react";

class ItemProductOrder extends Component {
  render() {
    return (
      <div
        className="the-items-order"
        style={{ display: "flex", padding: "15px", fontSize: "17px" }}
      >
        <div className="items-order" style={{ display: "flex", width: "55%" }}>
          <div className="images-items-order" style={{ paddingRight: "1rem" }}>
            <img
              src="/img/sonBlackRouge.jpg"
              style={{ width: "80px" }}
              alt=""
            />
          </div>
          <div
            className="name-items"
            style={{
              lineHeight: "5em",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              width: "50%",
            }}
          >
            Son Kem Lì Black Rouge Velet Tint Version 1
          </div>

          <div
            className="product-type"
            style={{ marginLeft: "0.5rem", lineHeight: "5rem", color: "grey" }}
          >
            Loại:A01
          </div>
        </div>
        <div
          className="price-items-order"
          style={{ textAlign: "center", lineHeight: "4.5em", width: "15%" }}
        >
          160.000
        </div>
        <div className="amount-items-order">1</div>
        <div
          className="total-items"
          style={{ width: "15%", lineHeight: "4.5em" }}
        >
          160.000{" "}
        </div>
      </div>
    );
  }
}

export default ItemProductOrder;
