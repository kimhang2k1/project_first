import React, { Component } from "react";
import Footer from "../../../component/Footer/Footer";
import EndFormLogin from "../../../component/General/Login/EndFormLogin/EndFormLogin";
import FormLogin from "../../../component/General/Login/FormLogin";
import ImageLeft from "../../../component/General/Login/ImageLeft/ImageLeft";
import TitleLogin from "../../../component/General/Login/TitleLogin/TitleLogin";
import Logo from "../../../component/Header/Logo/Logo";
import Menu from "../../../component/Header/Menu/Menu";
import Right from "../../../component/Header/Right/Right";

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
            <ImageLeft />
            <div className="form-login" style={{ lineHeight: "3rem" }}>
              <TitleLogin />
              <FormLogin />
              <EndFormLogin />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Login;
