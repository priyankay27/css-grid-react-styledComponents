import React from "react";
import Sprite from "../../img/sprite.svg";
import styled from "styled-components";

function Feat(props) {
  const Feat = styled.div`
    float: left;
    width: 33.3333%;
    margin-bottom: 6rem;

    @supports (display: grid) {
      width: auto;
      margin-bottom: 0;
    }

    display: grid;
    grid-template-columns: min-content 1fr;
    grid-row-gap: 1.5rem;
    grid-column-gap: 2.5rem;
  `;

  const FeatureIcon = styled.svg`
    fill: ${props => props.theme.colorPrimary};
    width: 4.5rem;
    height: 4.5rem;
    grid-row: 1 / span 2;
    transform: translateY(-1rem);
  `;
  const FeatureText = styled.p`
    font-size: 1.7rem;
  `;
  const Heading = styled.h4`
    font-size: 1.9rem;
    color: ${props => props.theme.colorGreyDark1};
  `;

  return (
    <Feat>
      <FeatureIcon>
        <use xlinkHref={`${Sprite}#icon-${props.iconName}`} />
      </FeatureIcon>
      <Heading>{props.title}</Heading>
      <FeatureText>{props.description}</FeatureText>
    </Feat>
  );
}
export default Feat;
