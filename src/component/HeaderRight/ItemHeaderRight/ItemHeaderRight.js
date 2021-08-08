import React, { Component } from "react";

class ItemHeaderRight extends Component {
  render() {
    const { icon, number, show, index, active, handle } = this.props;

    return (
      <li
        onClick={() => handle(index)}
        className={`w-10  text-center rounded-full cursor-pointer 
        h-10 ml-1 mr-1 ${active === index ? "bg-blue-500" : "bg-gray-200"}`}
      >
        <div className="pt-1.5 relative">
          <i className={`${icon} text-xm pt-1.5 `} />
          {show ? (
            <span
              className="text-white bg-red-600 font-bold rounded-full text-xs px-1 py-0.5 absolute
                                     -top-2 -right-1"
            >
              {number}
            </span>
          ) : (
            ""
          )}
        </div>
      </li>
    );
  }
}

export default ItemHeaderRight;
