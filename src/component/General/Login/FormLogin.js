import React, { Component } from "react";
import InputField from "../Input/InputField";

class FormLogin extends Component {
  render() {
    return (
      <form method="POST">
        <div className="form-input-login">
          <InputField title="Email" />
          <InputField title="Mật Khẩu" />
        </div>
      </form>
    );
  }
}

export default FormLogin;
