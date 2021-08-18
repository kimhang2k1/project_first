import React, { Component } from "react";
import HeaderCenter from "./HeaderCenter/HeaderCenter";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";

class HeaderCart extends Component {
  render() {
    return (
      <div className="header-cart">
        <div className="header-cart-bar">
          <HeaderLeft />
          <HeaderCenter />
          <HeaderRight />
        </div>
      </div>
    );
  }
}

export default HeaderCart;
