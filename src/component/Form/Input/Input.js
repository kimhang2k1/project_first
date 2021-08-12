import React, { Component } from "react";

class FormInput extends Component {
  render() {
    const { type, name, title } = this.props;
    return (
      <>
        <p>
          {title} <span>*</span>{" "}
        </p>
        <p>
          <input type={type} name={name} />
        </p>
      </>
    );
  }
}

export default FormInput;
