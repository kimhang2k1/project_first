import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <>
        <div className="slide-1">
          <img src="/img/slider_1.jpg" alt="" />
        </div>
        <div className="slide-2">
          <div className="advertisement-1st">
            <img src="/img/banner_offset_1.jpg" alt="" />
          </div>
          <div className="advertisement-2nd">
            <img src="/img/banner_offset_2.jpg" alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default Banner;
