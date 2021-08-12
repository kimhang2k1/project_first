import React, { Component } from "react";
import Footer from "./component/Footer/Footer";
import FormRegist from "./component/Form/FormRegist";
import ImageLeft from "./component/Form/ImageLeft/ImageLeft";
import Logo from "./component/Header/Logo/Logo";
import Menu from "./component/Header/Menu/Menu";
import Right from "./component/Header/Right/Right";

class SignUp extends Component {
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
              <FormRegist />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default SignUp;
