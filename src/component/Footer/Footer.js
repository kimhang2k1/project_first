import React, { Component } from "react";
import ItemFooter from "./ItemFooter/ItemFooter";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="site-footer">
          <ItemFooter />
          <ItemFooter />
          <ItemFooter />
          <ItemFooter />
        </div>
      </div>
    );
  }
}

export default Footer;
