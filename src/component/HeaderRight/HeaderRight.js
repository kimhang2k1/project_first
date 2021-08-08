import React, { Component } from "react";
import ItemHeaderRight from "./ItemHeaderRight/ItemHeaderRight";
import ProfileUser from "./ProfileUser/ProfileUser";

class HeaderRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
    this.dataRight = [
      {
        icon: "fas fa-plus ",
        show: false,
        id: 0,
      },
      {
        icon: "fab fa-facebook-messenger ",
        show: true,
        id: 1,
      },
      {
        icon: "far fa-bell",
        show: true,
        id: 2,
      },
      {
        icon: "fas fa-sign-out-alt",
        show: false,
        id: 3,
      },
    ];
  }

  render() {
    const { active } = this.state;
    return (
      <div className="w-1/4 pl-8 flex">
        <ProfileUser />
        <div className="w-7/12 pt-  2 pb-2">
          <ul className="w-full flex">
            {this.dataRight.map((item, index) => {
              return (
                <ItemHeaderRight
                  handle={() =>
                    this.setState({
                      active: index,
                    })
                  }
                  icon={item.icon}
                  number="99"
                  show={item.show}
                  index={item.id}
                  key={index}
                  active={active}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default HeaderRight;
