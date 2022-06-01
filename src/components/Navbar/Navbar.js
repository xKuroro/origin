import {
  FaBars,
  FaTimes,
  FaAngleDoubleRight,
  FaSignInAlt,
  FaMoon,
  FaCaretDown,
  FaSun,
} from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  ListIcons,
  Signinlink,
  SecondNav,
  showArrowContents,
  ArrowContents,
  VisitorsLink,
  Loginlink,
} from "./Navbar.elements";
import { IoMdNotifications } from "react-icons/io";
import { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import LoginForm from "./LoginForm";
import ArrowContentsItem from "./ArrowContentsItem";
import SigninUser from "./SigninUser";
import SwitchTheme from "./SwitchTheme";
import { ReactDimmer } from "react-dimmer";
import "./Navbody.css";

const Navbar = ({
  showSideNav,
  themeToggler,
  themeIcons,
  themetext,
  theme,
  isToggle,
}) => {
  const [click, setClick] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showSigninForm, setShowSigninForm] = useState(false);
  const [secondNav, setSecondNav] = useState(false);
  const [bodyDimmer, setBodyDimmer] = useState(null);

  const handleClick = () => {
    setClick(!click);
  };
  // login form
  const toggleForm = () => {
    setShowForm(true);
    setBodyDimmer("active");
    setSecondNav(false);
    setShowSigninForm(false);
  };
  // Arrow contents
  const showArrowContents = () => {
    console.log("arrowcontents");
    setSecondNav(!secondNav);
    setShowForm(false);
    setShowSigninForm(false);
  };
  return (
    <>
      {/* <div className={`Body-dimmer ${showForm ? "active" : ""}`}> */}
      <IconContext.Provider value={{ color: (props) => props.theme.color }}>
        <Nav>
          <FaAngleDoubleRight
            onClick={showSideNav}
            themeToggler={themeToggler}
          />
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon>9GAG</NavIcon>
            </NavLogo>
            <SecondNav>
              <VisitorsLink>
                <Loginlink to="#" onClick={toggleForm}>
                  Log in
                </Loginlink>
                <Signinlink
                  to="#"
                  onClick={() => {
                    setShowSigninForm(true);
                    setShowForm(false);
                    setSecondNav(false);
                  }}
                >
                  <p>Sign up</p>
                </Signinlink>
              </VisitorsLink>
              {showForm && (
                <LoginForm
                  theme={theme}
                  toggleForm={() => setShowForm(false)}
                  showForm={showForm}
                  show
                  bodyDimmer={bodyDimmer}
                />
              )}
              {showSigninForm && (
                <SigninUser
                  theme={theme}
                  toggleSignin={() => {
                    setShowSigninForm(false);
                    setShowForm(false);
                    setSecondNav(false);
                  }}
                  signinStyle={showSigninForm}
                />
              )}
              <ListIcons>
                <IoMdNotifications />
                <FaCaretDown
                  className={secondNav ? `active` : null}
                  onClick={showArrowContents}
                />
                {secondNav && (
                  <ArrowContents>
                    <ArrowContentsItem
                      themetext={themetext}
                      themeIcons={themeIcons}
                      themeToggler={themeToggler}
                      isToggle={isToggle}
                    />
                  </ArrowContents>
                )}
              </ListIcons>

              <MobileIcon onClick={handleClick}>
                {click ? (
                  <FaTimes
                    style={{ color: (props) => props.theme.fontColor }}
                  />
                ) : (
                  <FaBars />
                )}
              </MobileIcon>
            </SecondNav>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>

      {/* <ReactDimmer
        isOpen={showForm}
        exitDimmer={setShowForm}
        zIndex={20}
        blur={1.5}
      />
      <ReactDimmer
        isOpen={showSigninForm}
        exitDimmer={setShowSigninForm}
        zIndex={20}
        blur={1.5}
      /> */}
      {/* </div> */}
    </>
  );
};
const styleImage = {
  height: "30px",
  width: "40px",
};
export default Navbar;
