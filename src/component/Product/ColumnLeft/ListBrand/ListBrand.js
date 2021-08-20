import React, { Component } from "react";
import ItemBrand from "./ItemBrand/ItemBrand";

class ListBrand extends Component {
  render() {
    return (
      <div className="brand">
        <h2>Thương Hiệu</h2>
        <div className="content-brand">
          <ItemBrand />
          <ItemBrand />
          <ItemBrand />
          <ItemBrand />
          <ItemBrand />
          <ItemBrand />
          <ItemBrand />
          <ItemBrand />
          <ItemBrand />
        </div>
      </div>
    );
  }
}

export default ListBrand;
