import React, { Component } from "react";
import Banner from "../../component/Banner/Banner";
import Footer from "../../component/Footer/Footer";
import Logo from "../../component/Header/Logo/Logo";
import Menu from "../../component/Header/Menu/Menu";
import Right from "../../component/Header/Right/Right";
import Comment from "../../component/Home/Distributor/CommentCustomer/Comment/Comment";
import ImageCustomer from "../../component/Home/Distributor/CommentCustomer/ImageCustomer/ImageCustomer";
import NameCustomer from "../../component/Home/Distributor/CommentCustomer/NameCustomer/NameCustomer";
import TableDistributor from "../../component/Home/Distributor/TableDistributor/TableDistributor";
import TitleDistributor from "../../component/Home/Distributor/Title/TitleDistributor";
import ListProduct from "../../component/Home/Product/ListProduct";
import TitleProductNew from "../../component/Home/Product/ProductNew/TitleProductNew";
import TitleProductTrend from "../../component/Home/Product/ProductTrend/TitleProductTrend";
import Content from "../../component/Home/SignUpFor/Content/Content";
import InputEmail from "../../component/Home/SignUpFor/InputEmailRegistration/InputEmail";
import ListTip from "../../component/Home/Tip/ListTip/ListTip";
import TitleTip from "../../component/Home/Tip/TitleTip/TitleTip";
import Introduce from "../../component/Introduce/Introduce";
import ItemPolicy from "../../component/ItemPolicy/ItemPolicy";

class Index extends Component {
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
        <div className="advertisement">
          <Banner />
        </div>
        <div className="product-introduction">
          <div className="about-product">
            <Introduce />
          </div>
        </div>
        <div className="new-product">
          <div className="new-item-product">
            <TitleProductNew />
            <div className="product">
              <ListProduct />
              <ListProduct />
              <ListProduct />
              <ListProduct />
              <ListProduct />
              <ListProduct />
              <ListProduct />
              <ListProduct />
              <ListProduct />
              <ListProduct />
              <ListProduct />
            </div>
          </div>
        </div>
        <div className="distributors">
          <div className="item-distributors">
            <TitleDistributor />
            <div className="supplier-list">
              <div className="table-supplier-list">
                <TableDistributor />
              </div>
              <div className="comment-customs">
                <p>Nhận xét của khách hàng</p>
                <div className="information-customs">
                  <ImageCustomer />
                  <NameCustomer />
                  <Comment />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-trend">
          <div className="the-item-product-trend">
            <TitleProductTrend />
            <div className="product">
              <ListProduct />
              <ListProduct />
              <ListProduct />
              <ListProduct />
              <ListProduct />
              <ListProduct />
              <ListProduct />
              <ListProduct />
              <ListProduct />
              <ListProduct />
              <ListProduct />
            </div>
          </div>
        </div>
        <div className="tips">
          <div className="tips-beauty">
            <TitleTip />
            <div className="news-beauty" style={{ marginTop: "1rem" }}>
              <ListTip />
              <ListTip />
              <ListTip />
            </div>
          </div>
        </div>
        <div className="policy">
          <div className="policies">
            <ItemPolicy />
            <ItemPolicy />
            <ItemPolicy />
            <ItemPolicy />
          </div>
        </div>
        <div className="sign-up-for">
          <div className="registration">
            <Content />
            <InputEmail />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Index;
