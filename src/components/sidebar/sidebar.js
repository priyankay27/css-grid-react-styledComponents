import React from "react";
import styled from "styled-components";

function Sidebar() {
  const Sidebar = styled.div`
    background-color: ${props => props.theme.colorPrimary};
    grid-column: sidebar-start / sidebar-end;
    grid-row: 1 / -1;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: ${props => props.theme.bpLarge}) {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      justify-content: flex-end;
      align-items: center;
    }
  `;
  const HamburgerButton = styled.button`
    border: none;
    border-radius: 0;

    background-color: #fff;
    height: 2px;
    width: 4.5rem;
    margin-top: 4rem;

    &::before,
    &::after {
      background-color: #fff;
      height: 2px;
      width: 4.5rem;
      content: "";
      display: block;
    }

    &::before {
      transform: translateY(-1.5rem);
    }
    &::after {
      transform: translateY(1.3rem);
    }

    @media only screen and (max-width: ${props => props.theme.bpLarge}) {
      margin-top: 0;
      margin-right: 3rem;

      &::before {
        transform: translateY(-1.2rem);
      }
      &::after {
        transform: translateY(1rem);
      }
    }
  `;
  return (
    <Sidebar>
      <HamburgerButton />
    </Sidebar>
  );
}

export default Sidebar;
