import React, { Component } from "react";

class Amount extends Component {
  render() {
    return (
      <div className="form-amount">
        <span style="margin-right: 1rem; line-height: 2rem;font-size:17px; color: grey;">
          Số Lượng :{" "}
        </span>
        <button> - </button>
        <input type="text" value="1" />
        <button> + </button>
      </div>
    );
  }
}

export default Amount;
