import React, { Component } from "react";
import ItemAddress from "./ItemAddress/ItemAddress";

class ListAddress extends Component {
  render() {
    return (
      <>
        <div
          className="title-address"
          style={{ color: "#ee4d2d", fontSize: "20px", display: "flex" }}
        >
          <i
            className="fas fa-map-marker-alt"
            style={{ paddingRight: "1rem" }}
          ></i>{" "}
          <span style={{ width: "60%" }}> Địa Chỉ Nhận Hàng</span>
          <div className="add-address" style={{ display: "flex" }}>
            <div className="add">
              <button type="button">
                <i
                  className="fas fa-plus"
                  style={{
                    paddingRight: "4px",
                    color: "gray",
                    fontWeight: "100",
                  }}
                ></i>
                Thêm địa chỉ mới
              </button>
            </div>
          </div>
        </div>
        <ItemAddress />
        <ItemAddress />
      </>
    );
  }
}

export default ListAddress;
