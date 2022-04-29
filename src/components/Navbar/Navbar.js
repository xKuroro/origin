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
import { useState } from "react";
import { IconContext } from "react-icons/lib";
import LoginForm from "./LoginForm";
import ArrowContentsItem from "./ArrowContentsItem";
import SigninUser from "./SigninUser";

const Navbar = ({
  showSideNav,
  themeToggler,
  themeIcons,
  themetext,
  theme,
}) => {
  const [click, setClick] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showSigninForm, setShowSigninForm] = useState(false);
  const [secondNav, setSecondNav] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  // login form
  const toggleForm = () => {
    console.log("show Form");
    setShowForm(true);
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
                    />
                  </ArrowContents>
                )}
              </ListIcons>
            </SecondNav>
            <MobileIcon onClick={handleClick}>
              {click ? (
                <FaTimes style={{ color: (props) => props.theme.fontColor }} />
              ) : (
                <FaBars />
              )}
            </MobileIcon>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
const styleImage = {
  height: "30px",
  width: "40px",
};
export default Navbar;
