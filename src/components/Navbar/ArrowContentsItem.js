import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";
const ArrowContentsItem = ({ themetext, themeIcons, themeToggler }) => {
  console.log(themetext);
  return (
    <>
      <div>
        <ul className="topbar-menu">
          <li>
            <span>{themetext}</span>
            {!themeIcons ? (
              <FaSun onClick={() => themeToggler()} themetext={themetext} />
            ) : (
              <FaMoon onClick={() => themeToggler()} themetext={themetext} />
            )}
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
