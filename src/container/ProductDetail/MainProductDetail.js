import React, { Component } from "react";
import Footer from "../../component/Footer/Footer";
import Logo from "../../component/Header/Logo/Logo";
import Menu from "../../component/Header/Menu/Menu";
import Right from "../../component/Header/Right/Right";
import DecriptionProduct from "../../component/ProductDetail/DecriptionProduct/DecriptionProduct";
import Commitment from "../../component/ProductDetail/PartRight/Commitment";
import ProductOther from "../../component/ProductDetail/ProductOther/ProductOther";
import TitleProductDetail from "../../component/ProductDetail/TitleProductDetail/TitleProductDetail";
import ProductView from "./ProductView";

class MainProductDetail extends Component {
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
        <TitleProductDetail />
        <div className="information-product">
          <div className="container">
            <div className="infor">
              <ProductView />
              <div className="commitment">
                <Commitment />
              </div>
            </div>
            <DecriptionProduct />
          </div>
        </div>
        <div
          className="favorite-product"
          style={{ width: "80%", margin: "auto" }}
        >
          <ProductOther />
        </div>
        <Footer />
      </>
    );
  }
}

export default MainProductDetail;
