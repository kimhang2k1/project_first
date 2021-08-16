import React, { Component } from "react";

class ProductViewLeft extends Component {
  render() {
    return (
      <div class="image-product">
        <ImageProductMain />
        <ListImages />
      </div>
    );
  }
}

export default ProductViewLeft;
