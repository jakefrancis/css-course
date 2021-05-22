import React from "react";
import NavLink from "./NavLink";

const sideBarItems = [
  {
    iconName: "home",
    description: "Hotel",
    key: 1
  },
  {
    iconName: "aircraft-take-off",
    description: "Flight",
    key: 2
  },
  {
    iconName: "key",
    description: "Car Rental",
    key: 3
  },
  {
    iconName: "map",
    description: "Tours",
    key: 4
  }
];

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        {sideBarItems.map((item) => {
          return (
            <NavLink
              component="side-nav"
              iconName={item.iconName}
              description={item.description}
              href="#"
              key={item.key}
            />
          );
        })}
      </ul>
      <div className="legal">&copy; 2017 by trillo, All rights reserved</div>
    </nav>
  );
};

export default Sidebar;
