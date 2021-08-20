import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div className="title-all-product">
        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
          Tất Cả Sản Phẩm
        </h2>
        <h3>
          Ưu tiên xem : &nbsp;&nbsp;
          <select name="sort">
            <option value="Mặc định">Mặc định</option>
            <option value="ASC">Giá Tăng Dần</option>
            <option value="DESC">Giá Giảm Dần</option>
          </select>
        </h3>
      </div>
    );
  }
}

export default Sort;
