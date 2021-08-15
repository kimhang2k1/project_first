import React, { Component } from "react";

class InputEmail extends Component {
  render() {
    return (
      <div className="input-email-registration">
        <input type="text" placeholder="Nhập email của bạn" />
        <span>
          <i className="fas fa-paper-plane"></i> ĐĂNG KÝ
        </span>
      </div>
    );
  }
}

export default InputEmail;
