import React, { Component } from "react";
import FormInput from "./Input/FormInput";

class FormLogin extends Component {
  render() {
    return (
      <>
        <div className="title-form-login">
          <h2 style={{ fontSize: "28px" }}>Đăng Nhập</h2>
        </div>
        <FormInput />
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
