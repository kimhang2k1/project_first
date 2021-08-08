import React, { Component } from "react";

class InputHeaderLeft extends Component {
  render() {
    return (
      <div className="pr-4 mt-1 w-3/4">
        {/* form tìm kiếm */}
        <form method="get">
          <input
            className="w-full p-2.5 outline-none rounded-full border-none bg-gray-100"
            type="text"
            name="input"
            placeholder=" Tìm kiếm trên facebook"
          />
        </form>
      </div>
    );
  }
}

export default InputHeaderLeft;
