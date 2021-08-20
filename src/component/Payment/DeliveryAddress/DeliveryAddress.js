import React, { Component } from "react";

class DeliveryAddress extends Component {
  render() {
    return (
      <>
        <div
          className="title-address"
          style={{ color: "#ee4d2d", fontSize: "20px" }}
        >
          <i
            className="fas fa-map-marker-alt"
            style={{ paddingRight: "1rem" }}
          />{" "}
          <span> Địa Chỉ Nhận Hàng</span>
        </div>
        <div
          className="content-delivery-address"
          style={{ display: "flex", marginTop: "1rem" }}
        >
          <div className="name-customer">
            <p>
              Nguyễn Thị Nụ <span>(+84)&nbsp;&nbsp;987654321</span>
            </p>
          </div>
          <div className="address-customer" style={{ width: "50%" }}>
            <p>Tổ 1 Thôn Bảo Nhai,Xã Bảo Nhai,Huyện Bắc Hà,Tỉnh Lào Cai</p>
          </div>
        </div>
        <div className="change-address" style={{ lineHeight: "50px" }}>
          <span
            onclick="loadDeliveryAddress()"
            style={{
              textDecoration: "none",
              color: "#05a",
              fontSize: "17px",
              cursor: "pointer",
            }}
          >
            THAY ĐỔI
          </span>
        </div>
      </>
    );
  }
}

export default DeliveryAddress;
