import React, { Component } from "react";
import ImageProductMain from "../ProductViewLeft/ImageProductMain/ImageProductMain";
import ListImages from "./ListImages/ListImages";

class ProductViewLeft extends Component {
  render() {
    return (
      <div className="image-product">
        <ImageProductMain />
        <ListImages />
      </div>
    );
  }
}

export default ProductViewLeft;
