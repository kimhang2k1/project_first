import React, { Component } from "react";

class Amount extends Component {
  render() {
    return (
      <div className="form-amount">
        <span
          style={{
            marginRight: "1rem",
            lineHeight: "2rem",
            fontSize: "17px",
            color: "grey",
          }}
        >
          Số Lượng :{" "}
        </span>
        <button style={{ width: "35px", border: "1px solid #ccc" }}> - </button>
        <input
          type="text"
          value="1"
          style={{
            width: "50px",
            border: "1px solid #ccc",
            textAlign: "center",
            height: "40px",
          }}
        />
        <button style={{ width: "35px", border: "1px solid #ccc" }}> + </button>
      </div>
    );
  }
}

export default Amount;
