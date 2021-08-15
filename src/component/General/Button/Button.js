import React, { Component } from "react";

class Button extends Component {
  render() {
    const { title } = this.props;
    return (
      <p>
        <button type="submit">{title}</button>
      </p>
    );
  }
}

export default Button;
