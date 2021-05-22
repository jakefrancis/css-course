import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Content = () => {
  return (
    <div className="content">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Content;
