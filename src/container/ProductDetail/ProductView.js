import React, { Component } from "react";
import ProductViewLeft from "../../component/ProductDetail/PartLeft/ProductViewLeft/ProductViewLeft";
import ProductViewRight from "../../component/ProductDetail/PartLeft/ProductViewRight/ProductViewRight";

class ProductView extends Component {
  render() {
    return (
      <div className="content-left">
        <ProductViewLeft />
        <ProductViewRight />
      </div>
    );
  }
}

export default ProductView;
