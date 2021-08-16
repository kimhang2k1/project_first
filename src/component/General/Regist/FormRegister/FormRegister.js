import React, { Component } from "react";
import InputField from "../../Input/InputField";

class FormRegister extends Component {
  render() {
    return (
      <form method="POST">
        <div className="form-input-login">
          <InputField title="Tên Đăng Nhập" />
          <InputField title="Email" />
          <InputField title="Mật Khẩu" />
          <InputField title="Nhập Lại Mật Khẩu" />
        </div>
      </form>
    );
  }
}

export default FormRegister;
