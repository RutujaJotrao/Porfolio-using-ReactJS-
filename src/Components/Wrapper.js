// Wrapper.js
import React from "react";
import Sidebar from "./Sidebar";

const Wrapper = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="content">{children}</div>
    </>
  );
};

export default Wrapper;
