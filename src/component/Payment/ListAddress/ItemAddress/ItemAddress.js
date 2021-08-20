import React, { Component } from "react";

class ItemAddress extends Component {
  render() {
    return (
      <div
        className="content-delivery-address"
        style={{ display: "flex", height: "45px" }}
      >
        <div
          className="input-radio"
          style={{ lineHeight: "28px", paddingRight: "10px" }}
        >
          <p>
            <input type="radio" name="diachi" value="" />
          </p>
        </div>
        <div
          className="name-customer"
          style={{ fontSize: "18px", lineHeight: "4rem" }}
        >
          Nguyễn Thị Nụ<span>(+84)&nbsp;98765432</span>
        </div>

        <div
          className="address-customer"
          style={{
            width: "50%",
            fontSize: "18px",
            lineHeight: "4rem",
            whiteSpace: "nowrap",
          }}
        >
          Tổ 14,&nbsp;xã OK,&nbsp;huyện OK,&nbsp;Tỉnh OK
        </div>
      </div>
    );
  }
}

export default ItemAddress;
