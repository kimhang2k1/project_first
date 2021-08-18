import React, { Component } from "react";
import ItemCommitment from "./ItemCommitment/ItemCommitment";

class Commitment extends Component {
  render() {
    return (
      <>
        <div className="title-singer">
          <h2 style={{ marginTop: "1rem" }}>CAM KẾT VỚI KHÁCH HÀNG</h2>
          <hr style={{ margin: "auto", marginTop: "0.375rem" }} />
        </div>
        <div className="infor-commitment">
          <ItemCommitment />
          <ItemCommitment />
          <ItemCommitment />
          <ItemCommitment />
        </div>
      </>
    );
  }
}

export default Commitment;
