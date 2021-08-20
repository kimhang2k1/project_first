import React, { Component } from "react";

class TotalProduct extends Component {
  render() {
    return (
      <>
        <div className="total-buy-product">
          <div className="infor-money-order-items">
            <div
              className="row-infor-name-money"
              style={{ gridRowStart: 1, gridRowEnd: 1, height: "40px" }}
            >
              Tổng số tiền
            </div>
            <div
              className="row-infor-total-money-items"
              style={{ gridColumnStart: 3, gridColumnEnd: 6 }}
            >
              160.000
            </div>
            <div
              className="row-infor-name-money"
              style={{ gridRowEnd: 8, gridRowStart: 3 }}
            >
              Tổng thanh toán
            </div>
            <div
              className="row-infor-total-money-items"
              style={{ gridRowStart: 2, gridColumnStart: 5, gridColumnEnd: 5 }}
            >
              25.000đ
            </div>
            <div
              className="row-infor-name-money"
              style={{ gridRowStart: 2, gridRowEnd: 3, height: "40px" }}
            >
              Phí vận chuyển
            </div>
            <div
              className="row-infor-total-money-items"
              style={{
                gridColumnStart: 5,
                gridColumnEnd: 5,
                fontSize: "29px",
                color: "#ee4d2d",
              }}
            >
              <span>₫</span>160.000đ
            </div>
          </div>
        </div>
        <div
          className="btn-order-product"
          style={{
            display: "flex",
            padding: "15px",
            border: "1px solid #f1f0ed",
            borderTop: "none",
            backgroundColor: "#fffefb",
          }}
        >
          <p style={{ paddingRight: "22rem", fontSize: "18px" }}>
            Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo Điều Khoản
            của Shop
          </p>
          <button type="submit">Đặt Hàng </button>
        </div>
      </>
    );
  }
}

export default TotalProduct;
