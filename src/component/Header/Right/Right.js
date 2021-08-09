import React, { Component } from "react";
import Account from "./Account/Account";
import Cart from "./Cart/Cart";
import IconSearch from "./IconSearch/IconSearch";

class Right extends Component {
  render() {
    return (
      <div className="right">
        <Account />
        <Cart />
        <IconSearch />
      </div>
    );
  }
}

export default Right;
