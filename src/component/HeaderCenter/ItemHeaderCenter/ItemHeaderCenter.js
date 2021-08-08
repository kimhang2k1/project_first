import React, { Component } from "react";

class ItemHeaderCenter extends Component {
  render() {
    const { icon, active, index, handle } = this.props;

    return (
      <li
        onClick={() => handle(index)}
        className={` flex justify-center ${
          active === index ? "active bg-gray-300 border-item" : ""
        }`}
      >
        <span
          className={`${icon} text-xl flex cursor-pointer jusitfy-center 
          items-center`}
        ></span>
      </li>
    );
  }
}

export default ItemHeaderCenter;
