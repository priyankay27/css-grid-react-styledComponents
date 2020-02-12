import React from "react";
import realtor_1 from "../../img/realtor-1.jpeg";
import realtor_2 from "../../img/realtor-2.jpeg";
import realtor_3 from "../../img/realtor-3.jpeg";
import Person from "./person";
import styled from "styled-components";

function Realtors() {
  const Realtors = styled.div`
    background-color: ${props => props.theme.colorSecondary};
    grid-column: col-start 7 / full-end;
    padding: 3rem;

    display: grid;
    align-content: center;
    justify-content: center;
    justify-items: center;
    grid-row-gap: 2rem;

    @media only screen and (max-width: ${props => props.theme.bpMedium}) {
      grid-column: 1 / -1;
    }
  `;
  const List = styled.div`
    display: grid;
    grid-template-columns: min-content max-content;
    grid-column-gap: 2rem;
    grid-row-gap: 5vh;
    align-items: center;

    @media only screen and (max-width: ${props => props.theme.bpMedium}) {
      grid-template-columns: repeat(3, min-content max-content);
    }

    @media only screen and (max-width: ${props => props.theme.bpSmall}) {
      grid-template-columns: min-content max-content;
    }
  `;
  const Heading = styled.h3`
    font-size: 1.6rem;
    color: ${props => props.theme.colorPrimary};
    text-transform: uppercase;
  `;
  return (
    <Realtors>
      <Heading>Top 3 Realtors</Heading>
      <List>
        <Person
          realtorNum={realtor_1}
          realtorName="Erik Feinman"
          housesSold="245"
        />
        <Person
          realtorNum={realtor_2}
          realtorName="Kim Brown"
          housesSold="212"
        />
        <Person
          realtorNum={realtor_3}
          realtorName="Toby Ramsey"
          housesSold="198"
        />
      </List>
    </Realtors>
  );
}
export default Realtors;
