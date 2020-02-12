import React from "react";
import logo from "../../img/logo.png";
import logo_bbc from "../../img/logo-bbc.png";
import logo_forbes from "../../img/logo-forbes.png";
import logo_techcrunch from "../../img/logo-techcrunch.png";
import logo_bi from "../../img/logo-bi.png";
import styled from "styled-components";
import hero from "../../img/hero.jpeg";

function Header(props) {
  const Header = styled.header`
    background-color: ${props => props.theme.colorGreyDark1};
    grid-column: full-start / col-end 6;
    background-image: linear-gradient(
        ${props => props.theme.colorSecondaryFade},
        ${props => props.theme.colorSecondary}
      ),
      url(${hero});
    background-size: cover;
    background-position: center;
    padding: 8rem;
    padding-top: 4rem;

    display: grid;
    grid-template-rows: 1fr min-content minmax(6rem, min-content) 1fr;
    grid-template-columns: minmax(min-content, max-content);
    grid-row-gap: 1.5rem;
    justify-content: center;

    @media only screen and (max-width: ${props => props.theme.bpMedium}) {
      grid-column: 1 / -1;
    }

    @media only screen and (max-width: ${props => props.theme.bpSmall}) {
      padding: 5rem;
    }
  `;
  const Logo = styled.img`
    height: 3rem;
    justify-self: center;
  `;
  const SeenOnText = styled.div`
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-column-gap: 1.5rem;
    align-items: center;

    font-size: 1.6rem;
    color: ${props => props.theme.colorGreyLight2};

    &::before,
    &::after {
      content: "";
      height: 1px;
      display: block;
      background-color: currentColor;
    }
  `;

  const SeeonOnLogo = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 3rem;
    justify-items: center;
    align-items: center;

    img {
      max-height: 2.5rem;
      max-width: 100%;
      filter: brightness(70%);
    }
  `;
  const Heading3 = styled.h3`
    font-size: 1.6rem;
    color: ${props => props.theme.colorPrimary};
    text-transform: uppercase;
  `;
  const Heading1 = styled.h1`
    font-size: 4.5rem;
    color: ${props => props.theme.colorGreyLight1};
    line-height: 1;
  `;
  const StyledButton = styled.button`
    align-self: start;
    justify-self: start;
    background-color: ${props => props.theme.colorPrimary};
    color: #fff;
    border: none;
    border-radius: 0;
    font-family: ${props => props.theme.fontDisplay};
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1.8rem 3rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: ${props => props.theme.colorPrimaryDark};
    }
  `;
  return (
    <Header>
      <Logo src={logo} alt="Nexter logo" />
      <Heading3>Your own home:</Heading3>
      <Heading1>The ultimate personal freedom</Heading1>
      <StyledButton>View our properties</StyledButton>
      <SeenOnText>Seen on</SeenOnText>
      <SeeonOnLogo>
        <img src={logo_bbc} alt="Seen on logo 1" />
        <img src={logo_forbes} alt="Seen on logo 2" />
        <img src={logo_techcrunch} alt="Seen on logo 3" />
        <img src={logo_bi} alt="Seen on logo 4" />
      </SeeonOnLogo>
    </Header>
  );
}
export default Header;
