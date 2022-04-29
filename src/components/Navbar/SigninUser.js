import React, { useState } from "react";
import { FaTimes, FaChrome, FaFacebook, FaTwitter } from "react-icons/fa";
import "./SignupStyle.css";
import Axios from "axios";

const SigninUser = ({ theme, toggleSignin }) => {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);
  const onsubmit = (event) => {
    console.log(nickName);
    event.preventDefault();
    Axios.post("http://localhost:3001/create", {
      nickName: nickName,
      email: email,
      password: password,
    }).then(() => {
      console.log("success");
    });
  };
  return (
    <div className="Signup-container" data-theme={theme}>
      <div className="modal-header">
        <div className="modal-header-close">
          <FaTimes onClick={toggleSignin} />
        </div>
        <div className="modal-header-title">Sign up</div>
      </div>

      <form className="signup-form-container" onSubmit={onsubmit}>
        <div className="signup-form">
          <span className="signup-form-title">Nick name</span>
          <input
            type="text"
            placeholder="Nick name"
            value={nickName}
            onChange={(e) => {
              setNickName(e.target.value);
            }}
          ></input>
        </div>
        <div className="signup-form">
          <span className="signup-form-title">Email</span>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="signup-form">
          <span className="signup-form-title">Password</span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default SigninUser;
