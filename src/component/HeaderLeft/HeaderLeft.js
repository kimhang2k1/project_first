import React, { Component } from "react";
import InputHeaderLeft from "./InputHeaderLeft/InputHeaderLeft";
import Logo from "./Logo";

class HeaderLeft extends Component {
  render() {
    return (
      <div className="w-1/4 flex ml-1">
        <Logo />
        <InputHeaderLeft />
      </div>
    );
  }
}

export default HeaderLeft;
