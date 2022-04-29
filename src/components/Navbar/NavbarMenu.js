import React from 'react'
import styled from 'styled-components'

const NavbarMenus = styled.div`
position:relative;
background-color: black;
color: white;
display: flex;
justify-content: space-between;
width:80vh;
height:50px;
flex-direction: row;

`;
const Navcons = styled.div`
display: flex;
flex-direction: row;
`;
const Ps = styled.p`
display:flex;
margin:10px 10px;
text-align: center;
justify-content: center;
border-right: 1px solid white;

`;
const NavbarMenu = () => {
    return (
        <NavbarMenus >  
          <Navcons>      
         
        </Navcons>
        </NavbarMenus>
        
    )
}

export default NavbarMenu
