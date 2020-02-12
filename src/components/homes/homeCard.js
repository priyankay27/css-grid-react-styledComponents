import React from "react";
import Sprite from "../../img/sprite.svg";
import styled from "styled-components";

function Homes(props) {
  const Home = styled.div`
    background-color: ${props => props.theme.colorGreyLight1};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3.5rem;
  `;
  const CardImage = styled.img`
    width: 100%;
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    z-index: 1;
  `;
  const Like = styled.svg`
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    fill: ${props => props.theme.colorPrimary};
    height: 2.5rem;
    width: 2.5rem;
    z-index: 2;
    justify-self: end;
    margin: 1rem;
  `;
  const HomeName = styled.h5`
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    justify-self: center;
    align-self: end;
    z-index: 3;
    width: 80%;
    font-family: ${props => props.theme.fontDisplay};
    font-size: 1.6rem;
    text-align: center;
    padding: 1.25rem;
    background-color: ${props => props.theme.colorSecondary};
    color: #fff;
    font-weight: 400;
    transform: translateY(50%);
  `;
  const Details = styled.div`
    font-size: 1.5rem;
    margin-left: 2rem;
    display: flex;
    align-items: center;
  `;
  const UpperDetails = styled.div`
    margin-top: 2.5rem;
  `;
  const Icon = styled.svg`
    fill: ${props => props.theme.colorPrimary};
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
  `;
  const StyledButton = styled.button`
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
    grid-column: 1 / -1;
  `;
  return (
    <Home>
      <CardImage src={props.homeNum} alt={`House ${props.homeNum}`} />
      <Like>
        <use xlinkHref={`${Sprite}#icon-heart-full`} />
      </Like>
      <HomeName>{props.homeDesc}</HomeName>

      <Details>
        <UpperDetails>
          <Icon>
            <use xlinkHref={`${Sprite}#icon-map-pin`} />
          </Icon>
          <p>{props.city}</p>
        </UpperDetails>
      </Details>

      <Details>
        <UpperDetails>
          <Icon>
            <use xlinkHref={`${Sprite}#icon-profile-male`} />
          </Icon>
          <p>{props.rooms}</p>
        </UpperDetails>
      </Details>

      <Details>
        <Icon>
          <use xlinkHref={`${Sprite}#icon-expand`} />
        </Icon>
        <p>
          {props.area} m<sup>2</sup>
        </p>
      </Details>

      <Details>
        <Icon>
          <use xlinkHref={`${Sprite}#icon-key`} />
        </Icon>
        <p>Rs.{props.cost}</p>
      </Details>
      <StyledButton>Contact realtor</StyledButton>
    </Home>
  );
}
export default Homes;
