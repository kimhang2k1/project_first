import React, { Component } from "react";
import ItemProductOrder from "./ItemProductOrder/ItemProductOrder";
import TitleProductOrder from "./TitleProductOrder/TitleProductOrder";

class ListProductOrder extends Component {
  render() {
    return (
      <>
        <div className="information-product-order">
          <div className="order">
            <TitleProductOrder />
            <ItemProductOrder />
          </div>
        </div>
      </>
    );
  }
}

export default ListProductOrder;
