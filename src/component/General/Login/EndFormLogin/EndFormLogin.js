import React, { Component } from "react";

class EndFormLogin extends Component {
  render() {
    return (
      <div className="account-not-register">
        <p>
          <i>Quên Mật Khẩu?</i>
        </p>
        <p>
          Chưa có tài khoản đăng ký <u style={{ color: "red" }}>tại đây</u>
        </p>
      </div>
    );
  }
}

export default EndFormLogin;
