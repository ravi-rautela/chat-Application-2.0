import React from "react";
import Users from "./Users";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="title">Chat Application</div>
      <div className="searchBox">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="users">
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
      </div>
    </div>
  );
};

export default Sidebar;
