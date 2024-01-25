import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faCog,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Data from "../../Data.json";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="main">
        <br />
        <br />
        <br />
        <p className="header">{Data.heading}</p>
        <div className="nav">
          {Data.menuItems.map((item, index) => (
            <Link to={`/${item.link}`} key={index} style={{textDecoration:'none', color:'white'}}>
              <p>
                <FontAwesomeIcon icon={getFontAwesomeIcon(item.icon)} />{" "}
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const getFontAwesomeIcon = (icon) => {
  switch (icon) {
    case "home":
      return faHome;

    case "info-circle":
      return faInfoCircle;

    case "cog":
      return faCog;

    case "briefcase":
      return faBriefcase;

    case "envelope":
      return faEnvelope;

    default:
      return null;
  }
};

export default Sidebar;
