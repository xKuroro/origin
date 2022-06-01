import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../GlobalStyles";

export const Nav = styled.nav`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  position: fixed;
  height: 80px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  top: 0;
  border-bottom: 1px solid ${(props) => props.theme.border};
  z-index: 1;
  transition: 2000ms ease;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled(Container)`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;

  ${Container}
`;
export const NavLogo = styled(Link)`
  color: ${(props) => props.theme.fontColor};
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin: 0;
`;

export const ListIcons = styled.div`
  display: flex;
  position: relative;
  padding: 4px;
  cursor: pointer;
  font-size: 1.8rem;
  justify-content: space-around;
  align-items: center;
  right: 0;
  transition: transform all linear 0.5s;
  width: 100px;
  flex-wrap: wrap;
  color: ${(props) => props.theme.fontColor};

  svg {
    display: block;
    width: 36px;
    padding: 4px 0;
    border-radius: 20px;
    font-size: 1.6rem;

    svg.active {
      background: #696969;
    }
    &:hover {
      background: #8a8a5c;
      transition: 0.5s;
    }
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const NavIcon = styled.a`
  padding: 5px;
  width: 90px;
  font-weight: 600;
`;
export const SecondNav = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100%;
  right: 0;
  top: 0;
  width: 300px;
  justify-content: space-between;

  /* @media screen and (max-width: 960px) {
    display: none;
  } */
`;

export const VisitorsLink = styled.div`
  display: block;
  position: relative;
  right: 0;
  top: 0;
  float: left;
`;

export const Signinlink = styled(Link)`
  color: #fff;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 700;
  margin-left: 8px;
  background-color: #07f;
  border-radius: 18px;
  text-decoration: none;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const Loginlink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #999;
  line-height: 30px;
  height: 30px;
  padding: 0 12px;
  font-weight: 700;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const ArrowContents = styled.div`
  position: absolute;
  height: 300px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontColor};
  top: 50px;
  left: -100px;
  list-style-type: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 4px rgb(0 0 0 / 20%), 0px 0px 2px rgb(0 0 0 / 10%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 270px;
  padding: 8px 0px;
  transition: transform linear 400ms;

  @media screen and (max-width: 960px) {
    width: 200px;
    height: 200px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    top: 0;
    right: 0;
    transform: translate(1%, 6%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${(props) => props.theme.fontColor};
  }
`;

// export const
