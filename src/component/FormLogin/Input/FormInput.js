import React, { Component } from "react";

class FormInput extends Component {
  render() {
    return (
      <form method="POST">
        <div className="form-input-login">
          <p>
            Email <span>*</span>{" "}
          </p>
          <p>
            <input type="text" name="email" placeholder="example@gmail.com" />
          </p>
          <p>
            Mật Khẩu <span>*</span>
          </p>
          <p>
            <input type="password" name="password" placeholder="Mật Khẩu" />
          </p>
          <p>
            <button type="submit">ĐĂNG NHẬP</button>
          </p>
        </div>
      </form>
    );
  }
}

export default FormInput;
