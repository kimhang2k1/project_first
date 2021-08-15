import React, { Component } from "react";
import ItemDistributor from "./ItemDistributor/ItemDistributor";

import TitleTable from "./TitleTable/TitleTable";

class TableDistributor extends Component {
  render() {
    return (
      <>
        <p>Danh sách nhà phân phối & đại lý tiêu biểu</p>
        <table>
          <tbody>
            <TitleTable />
            <ItemDistributor />
            <ItemDistributor />
            <ItemDistributor />
          </tbody>
        </table>
      </>
    );
  }
}

export default TableDistributor;
