import React from "react";

const UserProfile = ({ source, component, userName }) => {
  return (
    <div className={`${component}__user`}>
      <img src={source} alt="User" className={`${component}__user-photo`} />
      <span className={`${component}__user-name`}>{userName}</span>
    </div>
  );
};

export default UserProfile;
