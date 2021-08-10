import React, { Component } from "react";

class ItemFooter extends Component {
  render() {
    return (
      <div className="row-footer-1">
        <div className="row-title-footer">
          <p>ĐỊA CHỈ</p>
          <hr />
        </div>
        <div className="row-content-footer">
          <div className="row-icon-footer" style={{ lineHeight: "3rem" }}>
            <p>
              <i className="fas fa-phone-square-alt"></i>
            </p>
            <p>
              <i className="fa fa-map-marker"></i>
            </p>
            <p>
              <i className="fa fa-envelope"></i>
            </p>
          </div>
          <div className="row-content-infor" style={{ lineHeight: "3rem" }}>
            <p>0123456789</p>
            <p>Thăng Bình, Quảng Nam</p>
            <p>ttkhang.19i@cit.udn.vn</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemFooter;
