import React, { Component } from "react";
import BtnBuyProduct from "./BtnBuyProduct/BtnBuyProduct";
import RowListProduct from "./RowListProduct/RowListProduct";
import RowTitleCart from "./RowTitleCart/RowTitleCart";

class TableProduct extends Component {
  render() {
    return (
      <div className="shopping-cart">
        <div className="cart">
          <RowTitleCart />
          <div className="all-product-cart">
            <RowListProduct />
            <RowListProduct />
          </div>
          <BtnBuyProduct />
        </div>
      </div>
    );
  }
}

export default TableProduct;
