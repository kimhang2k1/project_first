import React, { Component } from "react";

class ProfileUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "bg-gray-700",
    };
  }
  componentDidMount() {
    document.getElementsByTagName("body")[0].classList = this.state.bgColor;
  }
  componentDidUpdate() {
    document.getElementsByTagName("body")[0].classList = this.state.bgColor;
  }
  render() {
    const { bgColor } = this.state;
    return (
      <div
        onClick={() => {
          this.setState({
            bgColor: bgColor === null ? "bg-gray-700" : null,
          });
        }}
        className="w-5/12 flex py-0.875 px-2.5 mx-2 mt-1 mb-1.5 p-1.5 hover:bg-gray-200 round-avatar"
      >
        <div className="w-full">
          {/* avatar user  */}

          <img className="w-8 h-8 rounded-full" src="/img/avatar.jpg" alt="" />
        </div>
        <div className="w-full pt-1">
          {/* name user  */}
          Hưởng
        </div>
      </div>
    );
  }
}

export default ProfileUser;
