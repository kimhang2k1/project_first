import React, { Component } from "react";
import Footer from "../../component/Footer/Footer";
import Logo from "../../component/Header/Logo/Logo";
import Menu from "../../component/Header/Menu/Menu";
import Right from "../../component/Header/Right/Right";
import AllProduct from "../../component/Product/AllProduct/AllProduct";
import ListBrand from "../../component/Product/ColumnLeft/ListBrand/ListBrand";
import ListCategory from "../../component/Product/ColumnLeft/ListCategory/ListCategory";
import Sort from "../../component/Product/Sort/Sort";
import TitleBar from "../../component/Product/TitleBar/TitleBar";

class MainProduct extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="header-bar">
            <Logo />
            <Menu />
            <Right />
          </div>
        </div>
        <TitleBar />
        <div className="main">
          <div className="row-product">
            <div className="left-part">
              <ListCategory />
              <ListBrand />
            </div>
            <div className="container">
              <Sort />
              <AllProduct />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default MainProduct;
