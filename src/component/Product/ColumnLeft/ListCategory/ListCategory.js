import React, { Component } from "react";
import ItemCategory from "./ItemCategory/ItemCategory";

class ListCategory extends Component {
  render() {
    return (
      <div class="product-category">
        <p>
          <h2>Danh Mục Sản Phẩm</h2>
        </p>
        <ul>
          <ItemCategory />
        </ul>
      </div>
    );
  }
}

export default ListCategory;
