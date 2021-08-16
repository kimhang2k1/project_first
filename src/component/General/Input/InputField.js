import React, { Component } from "react";

class InputField extends Component {
  render() {
    var { title } = this.props;
    return (
      <>
        <p>
          {title} <span>*</span>{" "}
        </p>
        <p>
          <input type="text" name="username" />
        </p>
      </>
    );
  }
}

export default InputField;
