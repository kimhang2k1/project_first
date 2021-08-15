import React, { Component } from "react";

class InputField extends Component {
  render() {
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
