import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
const Navbar = () => {
  const Container = styled.div`
    ${mobile({ width: "100vw", height: "100%" })}
  `;
  const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
  `;
  /* Adding components to the left side */
  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({ justifyContent: "space-evenly" })}
  `;
  const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
  `;

  /* Center side */
  const Center = styled.div`
    flex: 1;
    text-align: center;
    ${mobile({
      display: "flex",
      justifyContent: "space-evenly",
    })}
  `;
  const Logo = styled.h1`
    font-weight: bold;
  `;

  /* Right Side */
  const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: "space-evenly" })}
  `;
  const MenuItem = styled.div`
    margin-right: 10px;
    cursor: pointer;
    color: black;
    text-decoration: none;
  `;

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENGLISH LIBRARY</Language>
        </Left>
        <Center>
          <Logo>UDIT's Library</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link
              style={{
                color: "black",
                textDecoration: "none",
              }}
              to="/addBooks"
            >
              Add Books
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
