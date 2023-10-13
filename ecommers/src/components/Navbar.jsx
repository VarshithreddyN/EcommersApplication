import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Container = styled.div`
  height: 60px;
  background-color: red;
  width:100wh
  @media only screen and (max-width:380px){
    display:none;
  }
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  background-color: #66545e;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
padding:10px;
  flex: 1;
  display: flex;
  flex-direction: coloumn;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  flex-direction: coloumn;
`;
const SearchContainer = styled.span`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  flex-direction: coloumn;
  margin-left: 10px;
`;
const Input = styled.input`

  border: 2px solid white;
  border-radius: 0.25rem; 
  height: '13%';  
  width: '15px';  
  fontSize: '14px';
  
`;
const Right = styled.div`
  flex: 1;
  display:flex;
  flex-direction:row;
  justify-content:flex-end; 
  
`;
const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction:coloumn;
  justify-content: center;
  padding:10px;
`;
const Center = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding:10px;
  flex: 1;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>
          <SearchContainer>
            <form><Input /></form>
            
            <Search style={{color:"blueviolet"}} />
          </SearchContainer>
        </Left>
        <Center>SAVANA</Center>
        <Right>
        <MenuItem>CART  <ShoppingCartIcon></ShoppingCartIcon></MenuItem>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGNIN</MenuItem>
          <MenuItem>
          <Badge badgeContent={10} color="primary">
            <MailIcon color="action" />
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
