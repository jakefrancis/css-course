import React from "react";
import Icon from "./Icon";

const NavLink = ({component, iconName, description, href, handler, active }) => {


  return (
    <li onFocus={handler} className={ active ? `${component}__item ${component}__item--active`: `${component}__item` }>
      <a href={href}  className={`${component}__link`}>
        <Icon  component={component} iconName={iconName} />
        <span>{description}</span>
      </a>
    </li>
  );
};

export default NavLink;
