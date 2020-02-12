import React from "react";
import story_1 from "../../img/story-1.jpeg";
import story_2 from "../../img/story-2.jpeg";
import styled from "styled-components";
import back from "../../img/back.jpg";

function Story() {
  const StoryPictures = styled.div`
    background-color: ${props => props.theme.colorPrimary};
    grid-column: full-start / col-end 4;
    background-image: linear-gradient(
        ${props => props.theme.colorPrimary},
        ${props => props.theme.colorPrimary}
      ),
      url(${back});
    background-size: cover;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(6, 1fr);
    align-items: center;

    @media only screen and (max-width: ${props => props.theme.bpMedium}) {
      grid-column: 1 / -1;
      padding: 6rem;
    }
  `;
  const StoryContent = styled.div`
    background-color: ${props => props.theme.colorGreyLight1};
    grid-column: col-start 5 / full-end;
    padding: 6rem 8vw;
    display: grid;
    align-content: center;
    justify-items: start;

    @media only screen and (max-width: ${props => props.theme.bpMedium}) {
      grid-column: 1 / -1;
      grid-row: 5 / 6;
    }
  `;
  const StoryText = styled.p`
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 4rem;
  `;
  const CoupleImage = styled.img`
    width: 100%;
    grid-row: 2 / 6;
    grid-column: 2 / 6;
    box-shadow: 0 2rem 5rem rgba(#000, 0.1);
    
    @media only screen and (max-width: ${props => props.theme.bpMedium}) {
      grid-column: 1 / 5;
      grid-row: 1 / -1;
    }
  `;
  const HouseImage = styled.img`
    width: 115%;
    grid-row: 4 / 6;
    grid-column: 4 / 7;
    z-index: 20;
    box-shadow: 0 2rem 5rem rgba(#000, 0.2);

    @media only screen and (max-width: ${props => props.theme.bpMedium}) {
      grid-row: 1 / -1;
      width: 100%;
    }
  `;
  const Heading3 = styled.h3`
    font-size: 1.6rem;
    color: ${props => props.theme.colorPrimary};
    text-transform: uppercase;
    margin-bottom: 2rem;
  `;
  const Heading2 = styled.h2`
    font-size: 4rem;
    font-style: italic;
    line-height: 1;
    color: ${props => props.theme.colorGreyDark1};
    margin-bottom: 3rem;
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
    <React.Fragment>
      <StoryPictures>
        <CoupleImage src={story_1} alt="Couple with new house" />
        <HouseImage src={story_2} alt="New house" />
      </StoryPictures>

      <StoryContent>
        <Heading3>Happy Customers</Heading3>
        <Heading2>&ldquo;The best decision of our lives&rdquo;</Heading2>
        <StoryText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </StoryText>
        <StyledButton>Find your own home</StyledButton>
      </StoryContent>
    </React.Fragment>
  );
}
export default Story;
