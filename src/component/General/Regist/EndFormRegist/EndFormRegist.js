import React, { Component } from "react";

class EndFormRegist extends Component {
  render() {
    return (
      <>
        <div className="btn-login">
          <button type="submit">Đăng Ký</button>
        </div>
        <div class="account-not-register">
          <p>
            Đã có tài khoản đăng nhập <u>tại đây</u>
          </p>
        </div>
      </>
    );
  }
}

export default EndFormRegist;
