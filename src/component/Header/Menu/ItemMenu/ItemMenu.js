import React, { Component } from "react";

class ItemMenu extends Component {
  render() {
    return (
      <>
        <li className="active">TRANG CHỦ</li>
        <li>GIỚI THIỆU</li>
        <li>
          SẢN PHẨM <i className="fas fa-angle-down"></i>
          <ul className="catalogues">
            <li>Son Môi</li>
          </ul>
        </li>

        <li>TIN TỨC</li>

        <li>LIÊN HỆ</li>
      </>
    );
  }
}

export default ItemMenu;
