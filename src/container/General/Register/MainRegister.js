import React, { Component } from "react";
import Footer from "../../../component/Footer/Footer";
import ImageLeft from "../../../component/General/Login/ImageLeft/ImageLeft";
import EndFormRegist from "../../../component/General/Regist/EndFormRegist/EndFormRegist";
import FormRegister from "../../../component/General/Regist/FormRegister/FormRegister";
import TitleRegist from "../../../component/General/Regist/TitleRegist/TitleRegist";
import Logo from "../../../component/Header/Logo/Logo";
import Menu from "../../../component/Header/Menu/Menu";
import Right from "../../../component/Header/Right/Right";

class MainRegister extends Component {
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
              <TitleRegist />
              <FormRegister />
              <EndFormRegist />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default MainRegister;
