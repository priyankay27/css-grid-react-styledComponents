import React from "react";
import Gal_1 from "../../img/gal-1.jpeg";
import Gal_2 from "../../img/gal-2.jpeg";
import Gal_3 from "../../img/gal-3.jpeg";
import Gal_4 from "../../img/gal-4.jpeg";
import Gal_5 from "../../img/gal-5.jpeg";
import Gal_6 from "../../img/gal-6.jpeg";
import Gal_7 from "../../img/gal-7.jpeg";
import Gal_8 from "../../img/gal-8.jpeg";
import Gal_9 from "../../img/gal-9.jpeg";
import Gal_10 from "../../img/gal-10.jpeg";
import Gal_11 from "../../img/gal-11.jpeg";
import Gal_12 from "../../img/gal-12.jpeg";
import Gal_13 from "../../img/gal-13.jpeg";
import Gal_14 from "../../img/gal-14.jpeg";
import styled from "styled-components";

function Gallery() {
  const Gallery = styled.section`
    background-color: ${props => props.theme.colorGreyLight1};
    grid-column: full-start / full-end;
    display: grid;
    grid-template: repeat(7, 5vw) / repeat(8, 1fr);
    grid-gap: 1.5rem;
    padding: 1.5rem;
  `;

  const Item1 = styled.figure`
    grid-row: 1 / span 2;
    grid-column: 1 / span 2;
  `;
  const Item2 = styled.figure`
    grid-row: 1 / span 3;
    grid-column: 3 / span 3;
  `;
  const Item3 = styled.figure`
    grid-row: 1 / span 2;
    grid-column: 6 / 7;
  `;
  const Item4 = styled.figure`
    grid-row: 1 / span 2;
    grid-column: 7 / -1;
  `;
  const Item5 = styled.figure`
    grid-row: 3 / span 3;
    grid-column: 1 / span 2;
  `;
  const Item6 = styled.figure`
    grid-row: 4 / span 2;
    grid-column: 3 / span 2;
  `;
  const Item7 = styled.figure`
    grid-row: 4 / 5;
    grid-column: 5 / 6;
  `;
  const Item8 = styled.figure`
    grid-row: 3 / span 2;
    grid-column: 6 / span 2;
  `;
  const Item9 = styled.figure`
    grid-row: 3 / span 3;
    grid-column: 8 / -1;
  `;
  const Item10 = styled.figure`
    grid-row: 6 / span 2;
    grid-column: 1 / 2;
  `;
  const Item11 = styled.figure`
    grid-row: 6 / span 2;
    grid-column: 2 / span 2;
  `;
  const Item12 = styled.figure`
    grid-row: 6 / span 2;
    grid-column: 4 / 5;
  `;
  const Item13 = styled.figure`
    grid-row: 5 / span 3;
    grid-column: 5 / span 3;
  `;
  const Item14 = styled.figure`
    grid-row: 6 / span 2;
    grid-column: 8 / -1;
  `;
  const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  `;
  return (
    <Gallery>
      <Item1>
        <Image src={Gal_1} alt="Gallery 1" />
      </Item1>
      <Item2>
        <Image src={Gal_2} alt="Gallery 2" />
      </Item2>
      <Item3>
        <Image src={Gal_3} alt="Galler 3" />
      </Item3>
      <Item4>
        <Image src={Gal_4} alt="Gallery 4" />
      </Item4>
      <Item5>
        <Image src={Gal_5} alt="Gallery 5" />
      </Item5>
      <Item6>
        <Image src={Gal_6} alt="Gallery 6" />
      </Item6>
      <Item7>
        <Image src={Gal_7} alt="Gallery 7" />
      </Item7>
      <Item8>
        <Image src={Gal_8} alt="Gallery 8" />
      </Item8>
      <Item9>
        <Image src={Gal_9} alt="Gallery 9" />
      </Item9>
      <Item10>
        <Image src={Gal_10} alt="Gallery 10" />
      </Item10>
      <Item11>
        <Image src={Gal_11} alt="Gallery 11" />
      </Item11>
      <Item12>
        <Image src={Gal_12} alt="Gallery 12" />
      </Item12>
      <Item13>
        <Image src={Gal_13} alt="Gallery 13" />
      </Item13>
      <Item14>
        <Image src={Gal_14} alt="Gallery 14" />
      </Item14>
    </Gallery>
  );
}
export default Gallery;
