import React from "react";
import Feat from "./feat";
import styled from "styled-components";

function Features() {
  const Features = styled.section`
    grid-column: center-start / center-end;
    margin: 15rem 0;
    @supports (display: grid) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
      grid-gap: 6rem;
      align-items: start;
    }
  `;
  return (
    <Features>
      <Feat
        iconName="global"
        title="World's best luxury homes"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus."
      />
      <Feat
        iconName="trophy"
        title="Only the best properties"
        description="Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
        rerum sed a eligendi aut quia."
      />
      <Feat
        iconName="map-pin"
        title="All homes in in top locations"
        description="Tenetur distinctio necessitatibus pariatur voluptatibus quidem
        consequatur harum."
      />
      <Feat
        iconName="key"
        title="New home in one week"
        description="Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit
        amet consectetur adipisicing elit."
      />
      <Feat
        iconName="presentation"
        title="Top 1% realtors"
        description="Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
        necessitatibus pariatur voluptatibus."
      />
      <Feat
        iconName="lock"
        title="Secure payments on nexter"
        description="Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
        quae."
      />
    </Features>
  );
}
export default Features;
