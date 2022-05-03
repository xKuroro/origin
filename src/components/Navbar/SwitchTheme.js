import React, { useEffect } from "react";
import "./Switchtheme.css";

const SwitchTheme = ({ isToggle, themeToggler }) => {
  // useEffect(() => {

  // }[themeToggler])
  return (
    <label className="Switch-label">
      <input type="checkbox" checked={isToggle} onChange={themeToggler} />
      <span className="Slider" />
    </label>
  );
};

export default SwitchTheme;
