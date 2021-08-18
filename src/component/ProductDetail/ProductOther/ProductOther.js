import React, { Component } from "react";
import ListProduct from "../../Home/Product/ListProduct";

class ProductOther extends Component {
  render() {
    return (
      <>
        <div className="title-favorite-product" style={{ textAlign: "center" }}>
          <img style={{ margin: "auto" }} src="/img/flower.png" alt="" />
          <p>Có thể bạn sẽ thích</p>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "16px",
              color: "#292929",
              fontWeight: "400",
            }}
          >
            Sản phẩm được khách hàng lựa chọn thêm
          </p>
          <hr style={{ margin: "auto" }} />
        </div>
        <div className="product">
          <ListProduct />
          <ListProduct />
          <ListProduct />
          <ListProduct />
        </div>
      </>
    );
  }
}

export default ProductOther;
