import React, { Component } from "react";

class FormLogin extends Component {
  render() {
    return (
      <form method="POST">
        <div className="form-input-login">
          <Input />
          <Input />
          <Button title="Đăng Nhập" />
        </div>
      </form>
    );
  }
}

export default FormLogin;
