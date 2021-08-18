import React, { Component } from "react";

class RowTitleCart extends Component {
  render() {
    return (
      <div className="row-title-cart" style={{ display: "flex" }}>
        <div
          className="product-name-cart"
          style={{ width: "50%", color: "black", display: "flex" }}
        >
          Sản Phẩm
          <div
            className="loai-sp"
            style={{ marginLeft: "18.75em", color: "grey" }}
          >
            Loại
          </div>
        </div>
        <div
          className="price-cart"
          style={{ width: "12%", paddingLeft: "1.75rem" }}
        >
          Đơn Giá{" "}
        </div>
        <div
          className="amount-cart"
          style={{ width: "15%", paddingLeft: "2rem" }}
        >
          Số Lượng{" "}
        </div>
        <div
          className="total_price"
          style={{ width: "10%", paddingLeft: "1rem" }}
        >
          Số Tiền{" "}
        </div>
        <div className="action" style={{ width: "15%" }}>
          Thao Tác{" "}
        </div>
      </div>
    );
  }
}

export default RowTitleCart;
