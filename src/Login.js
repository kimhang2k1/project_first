import React, { Component } from "react";
import Footer from "./component/Footer/Footer";
import Logo from "./component/Header/Logo/Logo";
import Menu from "./component/Header/Menu/Menu";
import Right from "./component/Header/Right/Right";

class Login extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="header-bar">
            <Logo />
            <Menu />
            <Right />
          </div>
        </div>
        <div className="login">
          <div className="login-web">
            <div className="part-left">
              <img src="img/bg_login.jpg" alt="" />
            </div>
            <div className="form-login" style={{ lineHeight: "3rem" }}>
              <div className="title-form-login">
                <h2 style={{ fontSize: "28px" }}>Đăng Nhập</h2>
              </div>
              <form method="POST">
                <div className="form-input-login">
                  <p>
                    Email <span>*</span>{" "}
                  </p>
                  <p>
                    <input
                      type="text"
                      name="email"
                      placeholder="example@gmail.com"
                    />
                  </p>
                  <p>
                    Mật Khẩu <span>*</span>
                  </p>
                  <p>
                    <input
                      type="password"
                      name="password"
                      placeholder="Mật Khẩu"
                    />
                  </p>
                  <p>
                    <button type="submit">ĐĂNG NHẬP</button>
                  </p>
                </div>
              </form>
              <div className="account-not-register">
                <p>
                  <i>Quên Mật Khẩu?</i>
                </p>
                <p>
                  Chưa có tài khoản đăng ký{" "}
                  <u style={{ color: "red" }}>tại đây</u>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Login;
