import React, { Component } from "react";
import Footer from "../../component/Footer/Footer";
import Logo from "../../component/Header/Logo/Logo";
import Menu from "../../component/Header/Menu/Menu";
import Right from "../../component/Header/Right/Right";
import DeliveryAddress from "../../component/Payment/DeliveryAddress/DeliveryAddress";
import ListAddress from "../../component/Payment/ListAddress/ListAddress";
import ListProductOrder from "../../component/Payment/ListProductOrder/ListProductOrder";
import TotalProduct from "../../component/Payment/TotalProduct/TotalProduct";

class Payment extends Component {
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
        <div className="row-address">
          <div className="payment">
            <div className="address" style={{ display: "block" }}>
              <DeliveryAddress />
            </div>
            <div className="row-address-customer" style={{ display: "none" }}>
              <ListAddress />
            </div>
            <ListProductOrder />
            <TotalProduct />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Payment;
