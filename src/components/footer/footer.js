import React from "react";
import FooterMenu from "./footerMenu";
import styled from "styled-components";

function Footer(props) {
  const Footer = styled.footer`
    background-color: ${props => props.theme.colorSecondary};
    grid-column: full-start / full-end;
    padding: 8rem;
  `;
  const Nav = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 2rem;
    align-items: center;
  `;
  const Copyright = styled.p`
    font-size: 1.4rem;
    color: ${props => props.theme.colorGreyLight2};
    margin-top: 6rem;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    width: 70%;
  `;
  return (
    <Footer>
      <Nav>
        <FooterMenu text="Find your dream home" />
        <FooterMenu text="Request proposal" />
        <FooterMenu text="Download home planner" />
        <FooterMenu text="Contact us" />
        <FooterMenu text="Submit your property" />
        <FooterMenu text="Come work with us!" />
      </Nav>
      <Copyright>&copy; Copyright 2020 by Priyanka. </Copyright>
    </Footer>
  );
}
export default Footer;
