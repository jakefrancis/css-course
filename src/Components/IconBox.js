import React from "react";
import Icon from "./Icon";
const IconBox = ({ iconName, component, notifications }) => {
  return (
    <div className={`${component}__icon-box`}>
      <Icon component={component} iconName={iconName} />
      <span className={`${component}__notification`}>{notifications}</span>
    </div>
  );
};

export default IconBox;
