import React, { Component } from "react";

class TitleBar extends Component {
  render() {
    return (
      <div className="title">
        <div className="title-bar">
          <p>
            Trang chủ &nbsp;&nbsp; <i classNam="fas fa-chevron-right"></i>
            &nbsp;&nbsp; Tất cả sản phẩm
          </p>
        </div>
      </div>
    );
  }
}

export default TitleBar;
