import React, { Component } from "react";

class TitleProductNew extends Component {
  render() {
    return (
      <div className="title">
        <img src="img/flower.PNG" alt="" style={{ margin: "auto" }} />
        <h2>
          <span>Sản phẩm mới</span>
        </h2>
        <div className="title-introduction">
          <p>Những sản phẩm được khách hàng lựa chọn nhiều nhất</p>
          <hr />
        </div>
      </div>
    );
  }
}

export default TitleProductNew;
