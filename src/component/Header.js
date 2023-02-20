import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo-no-background-img.svg" alt="logo-img" />
      <NavMenu>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="verilog">
          <span>Verilog</span>
        </Link>
        <Link to="system">
          <span>System Verilog</span>
        </Link>
        <Link to="uvm">
          <span>UVM</span>
        </Link>
        <Link to="interview">
          <span>Interview Question</span>
        </Link>
      </NavMenu>
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 90px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  justify-content: right;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
    color: white;
    img {
      height: 20px;
    }

    span {
      font-size: 16px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span: after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
