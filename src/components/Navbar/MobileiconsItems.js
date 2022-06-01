import React from "react";
import "./Navbar.css";
import { FaTimes } from "react-icons/fa";
const MobileiconsItems = ({ showMobile }) => {
  console.log(showMobile);
  return (
    <div className="Overlay-mobile">
      <div className="Mobile-container">
        <FaTimes id="close" onClick={showMobile} />
      </div>
    </div>
  );
};

export default MobileiconsItems;
