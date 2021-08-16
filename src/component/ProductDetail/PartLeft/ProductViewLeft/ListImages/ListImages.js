import React, { Component } from "react";
import ItemImages from "./ItemImages.js/ItemImages";

class ListImages extends Component {
  render() {
    return (
      <div
        className="image-decription-product"
        style="position:relative;margin-top:-1rem;"
      >
        <span onclick="previousImage()">
          <i
            class="fas fa-chevron-circle-left"
            style="font-size: 33px;cursor: pointer;
                        position: absolute;top: 50%;z-index: 1000;left:0;color:gray;"
          ></i>
        </span>
        <br />
        <span onclick="nextImage()">
          <i
            class="fas fa-chevron-circle-right"
            style="font-size: 33px; cursor: pointer;position: absolute;top: 50%;z-index: 1000;right:0;color:gray;"
          ></i>
        </span>
        <ul style="max-width: 344px;display:inline-flex;position:relative;list-style:none;padding:0;margin:0;overflow-x:hidden;">
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
