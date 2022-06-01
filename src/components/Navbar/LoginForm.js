import React, { useState, useEffect } from "react";
import { FaTimes, FaChrome, FaFacebook, FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import "./Signin.css";
const LoginForm = ({ theme, toggleForm, showForm, bodyDimmer }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(null);

  const onsubmit = (event) => {
    event.preventDefault();
  };
  const body = document.body;
  // const styleBody = body.style.backgroundColor
  useEffect(() => {
    console.log("render");

    return () => {
      console.log("out");
    };
  }, []);
  return (
    <div className="Overlay-background">
      <div className="Signin-container" data-theme={theme}>
        <div className="modal-header">
          <div className="modal-header-close">
            <FaTimes onClick={toggleForm} />
          </div>
          <div className="modal-header-title">Log in</div>
        </div>
        <div className="login-view">
          <div className="signup-social-list">
            <a className="signup-scoial-link">
              <FaFacebook style={svgStyle} />
              Facebook
            </a>
            <a className="signup-scoial-link">
              <FaChrome style={svgStyle} />
              Google
            </a>
            <a className="signup-scoial-link">
              <FaTwitter style={svgStyle} />
              Pornhub
            </a>
          </div>
          <div className="login-view-divider">or</div>
          <form className="signin-form-container" onSubmit={onsubmit}>
            <div className="signin-form">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              ></input>
            </div>
            <div className="signin-form">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              ></input>
            </div>
            <button
              onClick={() => {
                console.log(email);
              }}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
const svgStyle = {
  position: "absolute",
  left: "4px",
  top: "2px",
  width: "16px",
  height: "19px",
};
export default LoginForm;
