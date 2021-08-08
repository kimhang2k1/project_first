import React, { Component } from "react";
import LogoWeb from "./Header/Logo/LogoWeb";
import Menu from "./Header/Menu/Menu";
import Right from "./Header/Right/Right";

class App extends Component {
  render() {
    return (
      // <div className={`w-full block z-50 fixed top-0 bg-white`} id="header">
      //   <div className="w-full flex px-2 py-1">
      //     <HeaderLeft />
      //     <HeaderCenter />
      //     <HeaderRight />
      //   </div>
      // </div>

      <div className="header">
        <div className="header-bar">
          <LogoWeb />
          <Menu />
          <Right />
        </div>
      </div>
    );
  }
}

export default App;
