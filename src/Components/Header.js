import React from "react";
import Icon from "./Icon";
import IconBox from "./IconBox";
import UserProfile from "./UserProfile";

const Header = () => {
  return (
    <header className="header">
      <img src="img/logo.png" alt="trillo logo" className="logo" />
      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search hotels"
        />
        <button className="search__button">
          <Icon component="search" iconName="magnifying-glass" />
        </button>
      </form>
      <nav className="user-nav">
        <IconBox component="user-nav" iconName="bookmark" notifications="13" />
        <IconBox component="user-nav" iconName="chat" notifications="7" />
        <UserProfile
          source="img/user.jpg"
          userName="Jonas"
          component="user-nav"
        />
      </nav>
    </header>
  );
};

export default Header;
