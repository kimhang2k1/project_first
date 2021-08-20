import React, { Component } from "react";

class TitleProductOrder extends Component {
  render() {
    return (
      <div
        className="row-title-infor-product"
        style={{
          display: "flex",
          padding: "15px",
          fontSize: "18px",
          color: "#bbb",
        }}
      >
        <div
          className="name-product-order"
          style={{ width: "55%", fontSize: "19px", color: "black" }}
        >
          Sản Phẩm
        </div>
        <div
          className="price-product-order"
          style={{ width: "15%", paddingLeft: "3.25rem" }}
        >
          Đơn Giá
        </div>
        <div
          className="amount-product-order"
          style={{ width: "15%", paddingLeft: "3rem" }}
        >
          Số Lượng
        </div>
        <div className="total-product" style={{ width: "15%" }}>
          Thành Tiền
        </div>
      </div>
    );
  }
}

export default TitleProductOrder;
