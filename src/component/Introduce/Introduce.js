import React, { Component } from "react";
import CategoryProduct from "./CategoryProduct/CategoryProduct";

class Introduce extends Component {
  render() {
    return (
      <>
        <div className="title">
          <h2>
            <span>Giới thiệu</span>
          </h2>
          <div className="title-introduction" style={{ lineHeight: "3rem" }}>
            <p>Giới thiệu về Delta Comestic Việt Nam</p>
            <hr style={{ margin: "auto" }} />
          </div>
        </div>
        <div className="content">
          <p>
            Công ty Delta Csosmetic Việt Nam trực tiếp sản xuất các dòng mỹ phẩm
            thiên nhiên- không theo trào lưu mỹ phẩm công nghiệp hiện hành, công
            ty đi theo hướng phát triển bền vững, lâu dài các dòng mỹ phẩm được
            làm handmade “BÀN TAY VÀ KHỐI ÓC CON NGƯỜI” làm chủ thể!
          </p>
        </div>
        <div className="star">
          <p>
            <i className="fas fa-star"></i>
          </p>
          <p>
            <i className="fas fa-star"></i>
          </p>
          <p>
            <i className="fas fa-star"></i>
          </p>
          <p>
            <i className="fas fa-star"></i>
          </p>
          <p>
            <i className="fas fa-star"></i>
          </p>
        </div>
        <div className="product-line">
          <div className="col-title-product">
            <p>CÁC DÒNG SẢN PHẨM CỦA DELTA COMESTIC VIỆT NAM</p>
          </div>
          <div className="item">
            <CategoryProduct />
            <CategoryProduct />
            <CategoryProduct />
            <CategoryProduct />
          </div>
        </div>
      </>
    );
  }
}

export default Introduce;
