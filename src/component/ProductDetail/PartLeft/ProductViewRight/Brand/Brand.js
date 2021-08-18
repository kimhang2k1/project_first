import React, { Component } from "react";

class Brand extends Component {
  render() {
    return (
      <div className="rate" style={{ lineHeight: "3rem" }}>
        <ul
          style={{ display: "inline-flex", listStyle: "none", color: "orange" }}
        >
          <li>
            <i className=" orange fas fa-star"></i>
          </li>
          <li>
            <i className=" orange fas fa-star"></i>
          </li>
          <li>
            <i className=" orange fas fa-star"></i>
          </li>
          <li>
            <i className=" orange fas fa-star"></i>
          </li>
          <li>
            <i className=" orange fas fa-star"></i>
          </li>
        </ul>
        <span>
          Thương Hiệu :
          <span style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}></span>
          Black Rouge
        </span>
      </div>
    );
  }
}

export default Brand;
