import React, { Component } from "react";
import HeaderCart from "../../component/Cart/HeaderCart/HeaderCart";
import TableProduct from "../../component/Cart/TableProduct/TableProduct";
import Footer from "../../component/Footer/Footer";

class MainCart extends Component {
  render() {
    return (
      <>
        <HeaderCart />
        <div
          className="container"
          style={{ marginTop: "1rem", display: "block" }}
        >
          <TableProduct />
        </div>
        <Footer />
      </>
    );
  }
}

export default MainCart;
