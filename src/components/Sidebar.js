import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../css/Sidebar.css";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import { IconButton } from "@material-ui/core";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__search">
          <SearchIcon className="sidebar__searchIcon" />
          <input placeholder="Search " className="sidebar__input"></input>
        </div>
        <IconButton variant="outlined" id="sidbar__button">
          <BorderColorOutlinedIcon />
        </IconButton>
      </div>
      <div className="sidebar__threads"></div>
      <div className="sidebar__bottom"></div>
    </div>
  );
};

export default Sidebar;
