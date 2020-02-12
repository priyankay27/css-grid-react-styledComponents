import React from "react";
import styled from "styled-components";

function Person(props) {
  const Image = styled.img`
    width: 7rem;
    border-radius: 50%;
    display: block;
  `;
  const Sold = styled.p`
    text-transform: uppercase;
    color: ${props => props.theme.colorGreyLight2};
    margin-top: -3px;
  `;
  const Heading = styled.h4`
    font-size: 1.9rem;
    color: ${props => props.theme.colorGreyLight1};
  `;
  return (
    <React.Fragment>
      <Image src={props.realtorNum} alt={props.realtorNum} />
      <div>
        <Heading>{props.realtorName}</Heading>
        <Sold>{props.housesSold} houses sold</Sold>
      </div>
    </React.Fragment>
  );
}
export default Person;
