import React, { Component } from "react";

class HeaderRight extends Component {
  render() {
    return (
      <div className="right-cart">
        <div className="account">
          <ul style={{ display: "inline-flex", listStyle: "none", margin: 0 }}>
            <li>
              <i
                className="fas fa-user-circle"
                style={{ fontSize: "30px" }}
              ></i>
            </li>
            <li
              style={{
                lineHeight: "30px",
                paddingLeft: "10px",
                fontSize: "17px",
              }}
            >
              <span>Hằng</span>
            </li>
          </ul>
          <div className="account-1">
            <p>Đăng Xuất</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderRight;
