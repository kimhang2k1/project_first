import React, { Component } from "react";
import Banner from "./component/Banner/Banner";
import Logo from "./component/Header/Logo/Logo";
import Menu from "./component/Header/Menu/Menu";
import Right from "./component/Header/Right/Right";
import Introduce from "./component/Introduce/Introduce";
import NewProduct from "./component/NewProduct/NewProduct";

class App extends Component {
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
            <NewProduct />
          </div>
        </div>
      </>
    );
  }
}

export default App;
