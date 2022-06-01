import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";
import SwitchTheme from "./SwitchTheme";
const ArrowContentsItem = ({ themetext, themeToggler, isToggle }) => {
  console.log(themetext);
  return (
    <>
      <div className="topbar-container">
        <ul className="topbar-menu">
          <li>
            <span>{themetext}</span>
            <SwitchTheme
              themetext={themetext}
              themeToggler={themeToggler}
              isToggle={isToggle}
            />
            {/* {!themeIcons ? (
              <FaSun onClick={() => themeToggler()} themetext={themetext} />
            ) : (
              <FaMoon onClick={() => themeToggler()} themetext={themetext} />
            )} */}
          </li>
          <li>
            <span>Sign up or Log in</span>
          </li>
          <li>
            <span>Download App</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ArrowContentsItem;
