import React, { Component } from "react";

class TitleProductDetail extends Component {
  render() {
    return (
      <div className="title">
        <div className="title-bar">
          <p>
            Trang Chủ &nbsp;&nbsp;
            <i className="fas fa-chevron-right">
              <span
                style={{
                  fontWeight: 500,
                  fontSize: "15px",
                  paddingLeft: "1rem",
                }}
              >
                Son Môi
              </span>
            </i>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <i className="fas fa-chevron-right"></i>
            &nbsp;&nbsp; Son Kem Lì Black Rouge Air Fit Velvet Tint Version 1{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default TitleProductDetail;
