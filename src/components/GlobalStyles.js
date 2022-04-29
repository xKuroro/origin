import styled, { createGlobalStyle } from "styled-components";
// import { LightTheme, DarkTheme } from "./Navbar/ThemeData";

export const LightTheme = {
  body: " #f5f5f5 ",
  fontColor: "#000000",
  border: "#000000",
  bgColor: "#FFFAF0",
};

export const DarkTheme = {
  body: " #0d0d0d",
  fontColor: "#ffffff",
  border: "#ffffff",
  bgColor: "black",
};

export const GlobalStyle = createGlobalStyle`
 *{
     box-sizing: border-box;
     margin:0;
     padding: 0;
     font-family: 'Ubuntu', sans-serif;
    
     body{
         background-color: ${(props) => props.theme.body};
         color: ${(props) => props.theme.color};
         transition:2000ms all ease ;
         
     }
 }
 `;

export const Container = styled.div`
  z-index: 10;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
