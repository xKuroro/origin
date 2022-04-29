import React, { useState, useEffect } from "react";
import { FaRoad, FaTimes } from "react-icons/fa";
import "./Sidenav.css";
import { SidenavData } from "./SidenavData";
import { Link } from "react-router-dom";
import gabe from "../Images/gabe.jpg";
import { IconContext } from "react-icons/lib";
// import Subnav from './Subnav'

const Sidebar = ({ show, showSideNav, theme }) => {
  const [subnav, setSubnav] = useState(false);
  const [themeToggle, setThemeToggle] = useState("light");

  console.log(theme);
  const showSubnav = () => setSubnav(!subnav);
  const profileName = "Jelly Ace";

  useEffect(() => {
    console.log("side bar");
    return () => {
      console.log("out");
    };
  }, [themeToggle]);
  return (
    <>
      <IconContext.Provider value={{ colors: (props) => props.theme.color }}>
        <div
          className={show ? "sidenavContainer active" : "sidenavContainer"}
          data-theme={theme}
        >
          <FaTimes style={faStyle} onClick={showSideNav} />
          <div className="profileUser">
            <img src={gabe} />
            <div className="profileName">{profileName}</div>
          </div>
          <ul className="section">
            {SidenavData.map((item) => {
              return (
                <li key={item.id} className={item.cName} alt="tae">
                  <Link
                    to={!item?.hasDropdown && item.path}
                    onClick={item.subNav && showSubnav}
                    theme={theme}
                  >
                    <img src={item.image} alt="tae" style={imgStyle} />
                    <p>{item.title}</p>
                    <div>
                      {item.subNav && subnav
                        ? item.iconUp
                        : item.subNav
                        ? item.iconDown
                        : null}
                    </div>
                  </Link>
                  {subnav &&
                    item.subNav?.map((subitem) => {
                      return (
                        <ul className="SubNavs" key={subitem.id}>
                          <li className={subitem.cName}>
                            <Link to={subitem.path}>
                              <p>{subitem.title}</p>
                            </Link>
                          </li>
                        </ul>
                      );
                    })}
                </li>
              );
            })}
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
};
const faStyle = {
  width: "50px",
  height: "30px",
  padding: "5px",
};
const imgStyle = {
  width: "30px",
  height: "30px",
};

export default Sidebar;
