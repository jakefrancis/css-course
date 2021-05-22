import React from "react";
import Icon from "./Icon";

const NavLink = ({ component, iconName, description, href }) => {
  return (
    <li className={`${component}__item`}>
      <a href={href} className={`${component}__link`}>
        <Icon component={component} iconName={iconName} />
        <span>{description}</span>
      </a>
    </li>
  );
};

export default NavLink;
