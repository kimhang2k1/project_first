import React, { Component } from "react";

class ItemPolicy extends Component {
  render() {
    return (
      <div className="free-ship">
        <div className="images">
          <img src="img/imgcs_1.png" alt="" style={{ margin: "auto" }} />
        </div>
        <div className="content-policy">
          <p>Miễn Phí Ship</p>
          <span>Cho đơn hàng trên 1 triệu</span>
        </div>
      </div>
    );
  }
}

export default ItemPolicy;
