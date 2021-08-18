import React, { Component } from "react";

class BtnBuyProduct extends Component {
  render() {
    return (
      <div className="buy-items-cart">
        <div
          className="buy-product"
          style={{ display: "flex", fontSize: "19px" }}
        >
          <div
            className="buy-items-1"
            style={{ display: "flex", width: "40%" }}
          >
            <p>
              <input
                type="checkbox"
                style={{ width: "16px", height: "16px", marginRight: "1rem" }}
                unchecked
              />
            </p>
            <p>
              Chọn tất cả ( <b>0</b> ){" "}
            </p>
          </div>
          <div
            className="btn-buy-product"
            style={{ width: "60%", display: "flex", lineHeight: "2rem" }}
          >
            <div className="title-btn-buy">
              Tổng tiền hàng ( <b>0</b> sản phẩm ) :
            </div>
            <div className="number">
              ₫<b>0</b>
            </div>
            <div className="btn">
              <button>Mua Hàng</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BtnBuyProduct;
