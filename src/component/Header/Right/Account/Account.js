import React, { Component } from "react";

class Account extends Component {
  render() {
    return (
      <div className="account">
        <ul style={{ display: "inline-flex" }}>
          <li>Đăng Nhập </li>
          <li style={{ padding: "0 7px" }}> / </li>
          <li>Đăng Ký</li>
        </ul>
      </div>
    );
  }
}

export default Account;
