import React from "react";
import styled from "styled-components";
function FooterMenu(props) {
  const Link = styled.a`
    &__link:link,
    &__link:visited {
      font-size: 1.4rem;
      color: #fff;
      text-decoration: none;
      font-family: ${props => props.theme.fontDisplay};
      text-transform: uppercase;
      text-align: center;
      padding: 1.5rem;
      display: block;
      transition: all 0.2s;
    }

    &__link:hover,
    &__link:active {
      background-color: rgba(#fff, 0.05);
      transform: translateY(-3px);
    }
  `;
  return (
    <li>

      <Link href="#" className="nav__link">
        {props.text}
      </Link>
    </li>
  );
}
export default FooterMenu;
