import React, { Component } from "react";

class ItemCommitment extends Component {
  render() {
    return (
      <div className="content-commitment">
        <div className="icon">
          <img
            src="/img/icon-chat-luong.png"
            alt=""
            style={{ width: "175px" }}
          />
        </div>
        <div className="row-content-commitment">
          <p>MỸ PHẨM 100% CHÍNH HÃNG</p>
          <p>
            Chất lượng sản phẩm luôn được chứng nhận bằng sự tin cậy của Khách
            Hàng suốt nhiều năm qua
          </p>
        </div>
      </div>
    );
  }
}

export default ItemCommitment;
