import React, { Component } from "react";
import ItemMenu from "./ItemMenu/ItemMenu";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul>
          <ItemMenu />
        </ul>
      </div>
    );
  }
}

export default Menu;
