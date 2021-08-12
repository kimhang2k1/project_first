import React, { Component } from "react";
import Button from "./Button/Button";
import Input from "./Input/Input";

class FormLogin extends Component {
  render() {
    return (
      <>
        <div className="title-form-login">
          <h2 style={{ fontSize: "28px" }}>Đăng Nhập</h2>
        </div>
        <form method="POST">
          <div className="form-input-login">
            <Input type="text" name="email" title="Email" />
            <Input type="password" name="password" title="Mật Khẩu" />
            <Button title="Đăng Nhập" />
          </div>
        </form>
        <div className="account-not-register">
          <p>
            <i>Quên Mật Khẩu?</i>
          </p>
          <p>
            Chưa có tài khoản đăng ký <u style={{ color: "red" }}>tại đây</u>
          </p>
        </div>
      </>
    );
  }
}

export default FormLogin;
