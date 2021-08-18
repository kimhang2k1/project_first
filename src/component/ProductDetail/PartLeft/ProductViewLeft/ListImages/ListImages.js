import React, { Component } from "react";
import ItemImages from "./ItemImages.js/ItemImages";

class ListImages extends Component {
  render() {
    return (
      <div
        className="image-decription-product"
        style={{ position: "relative", marginTop: "-1rem" }}
      >
        <span>
          <i
            className="fas fa-chevron-circle-left"
            style={{
              fontSize: "33px",
              cursor: "pointer",
              position: "absolute",
              top: "50%",
              zIndex: 1000,
              left: 0,
              color: "gray",
            }}
          ></i>
        </span>
        <br />
        <span>
          <i
            className="fas fa-chevron-circle-right"
            style={{
              fontSize: "33px",
              cursor: "pointer",
              position: "absolute",
              top: "50%",
              zIndex: 1000,
              right: 0,
              color: "gray",
            }}
          ></i>
        </span>
        <ul
          style={{
            maxWidth: "344px",
            display: "inline-flex",
            position: "relative",
            listStyle: "none",
            padding: 0,
            margin: 0,
            overflowX: "hidden",
          }}
        >
          <ItemImages />
          <ItemImages />
          <ItemImages />
          <ItemImages />
          <ItemImages />
        </ul>
      </div>
    );
  }
}

export default ListImages;
