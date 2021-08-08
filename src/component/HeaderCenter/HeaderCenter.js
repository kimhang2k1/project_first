import React, { Component } from "react";
import ItemHeaderCenter from "./ItemHeaderCenter/ItemHeaderCenter";

class HeaderCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
    this.dataCenter = [
      {
        icon: "fas fa-home",
        id: 0,
      },
      {
        icon: "fas fa-tv",
        id: 1,
      },
      {
        icon: "fas fa-store-alt",
        id: 2,
      },
      {
        icon: "fas fa-users",
        id: 3,
      },
      {
        icon: "fas fa-question-circle",
        id: 4,
      },
    ];
  }

  render() {
    const { active } = this.state;
    return (
      <div className="w-2/4">
        <div className=" m-auto wrapper" style={{ width: "80%" }}>
          <ul className="list-icon-header">
            {this.dataCenter.map((item, index) => {
              return (
                <ItemHeaderCenter
                  handle={() => {
                    this.setState({
                      active: index,
                    });
                  }}
                  icon={item.icon}
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

export default HeaderCenter;
