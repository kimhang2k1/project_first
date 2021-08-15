import React, { Component } from "react";

class TitleTip extends Component {
  render() {
    return (
      <div className="title">
        <img src="img/flower.PNG" alt="" style={{ margin: "auto" }} />
        <h2>
          <span>Tin tức & Mẹo</span>
        </h2>
        <div className="title-introduction">
          <p>Nắm bắt những tin tức & mẹo vặt mới nhất</p>
          <hr />
        </div>
      </div>
    );
  }
}

export default TitleTip;
