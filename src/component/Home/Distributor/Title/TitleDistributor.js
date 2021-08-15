import React, { Component } from "react";

class TitleDistributor extends Component {
  render() {
    return (
      <div className="title">
        <img src="img/flower.PNG" alt="" style={{ margin: "auto" }} />
        <h2>
          <span>Nhà phân phối tiêu biểu và đánh giá khách hàng</span>
        </h2>
        <div className="title-introduction">
          <p>
            Danh sách các nhà phân phối, các đại lý tiêu biểu và đánh giá của
            khách hàng về sản phẩm của Delta Cosmetic Việt Nam
          </p>
          <hr />
        </div>
      </div>
    );
  }
}

export default TitleDistributor;
