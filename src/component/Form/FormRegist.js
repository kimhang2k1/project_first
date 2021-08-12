import React, { Component } from "react";
import Button from "./Button/Button";
import Input from "./Input/Input";

class FormRegist extends Component {
  render() {
    return (
      <>
        <div className="title-form-login">
          <h2 style={{ fontSize: "28px" }}>Đăng Ký</h2>
        </div>
        <form method="POST">
          <div className="form-input-login">
            <Input type="text" name="username" title="Tên Đăng Nhập" />
            <Input type="text" name="email" title="Email" />
            <Input type="password" name="password" title="Mật Khẩu" />
            <Button title="Đăng Ký" />
          </div>
        </form>
      </>
    );
  }
}

export default FormRegist;
