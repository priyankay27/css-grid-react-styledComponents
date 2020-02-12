import React from "react";
import House_1 from "../../img/house-1.jpeg";
import House_2 from "../../img/house-2.jpeg";
import House_3 from "../../img/house-3.jpeg";
import House_4 from "../../img/house-4.jpeg";
import House_5 from "../../img/house-5.jpeg";
import House_6 from "../../img/house-6.jpeg";
import HomeCard from "./homeCard";
import styled from "styled-components";

function Homes() {
  const Homes = styled.section`
    grid-column: center-start / center-end;
    margin: 15rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-gap: 7rem;
  `;
  return (
    <Homes>
      <HomeCard
        homeNum={House_1}
        homeDesc="Beautiful Familiy House"
        city="DELHI"
        rooms="5"
        area="325"
        cost="1,200,000"
      />
      <HomeCard
        homeNum={House_2}
        homeDesc="Modern Glass Villa"
        city="MUMBAI"
        rooms="6"
        area="450"
        cost="2,750,000"
      />
      <HomeCard
        homeNum={House_3}
        homeDesc="Cozy Country House"
        city="DELHI"
        rooms="4"
        area="250"
        cost="850,000"
      />
      <HomeCard
        homeNum={House_4}
        homeDesc="Large Rustical Villa"
        city="DELHI"
        rooms="6"
        area="480"
        cost="1,950,000"
      />
      <HomeCard
        homeNum={House_5}
        homeDesc="Majestic Palace House"
        city="CHANDIGARH"
        rooms="18"
        area="4230"
        cost="9,500,000"
      />
      <HomeCard
        homeNum={House_6}
        homeDesc="Modern Familiy Apartment"
        city="KERALA"
        rooms="3"
        area="180"
        cost="600,000"
      />
    </Homes>
  );
}
export default Homes;
