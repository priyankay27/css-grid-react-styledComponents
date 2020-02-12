import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import Realtors from "./components/realtors/realtors";
import Features from "./components/features/features";
import Story from "./components/story/story";
import Homes from "./components/homes/homes";
import Gallery from "./components/gallery/gallery";
import Footer from "./components/footer/footer";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

function App(props) {
  const GlobalStyle = createGlobalStyle`
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
      }
      
      html {
        box-sizing: border-box;
        font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px
      
        @media only screen and (max-width: ${props => props.theme.bpLargest}) {
          font-size: 50%;
        }
      }
      
      body {
        font-family: ${props => props.theme.fontPrimary};
        color: ${props => props.theme.colorGreyDark2};
        font-weight: 300;
        line-height: 1.6;
      }
      
      .container #root {
        display: grid;
        grid-template-rows: 80vh min-content 40vw repeat(3, min-content);
        grid-template-columns:
          [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr)
          [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
          [center-end] minmax(6rem, 1fr)
          [full-end];
      
        @media only screen and (max-width: ${props => props.theme.bpLarge}) {
          grid-template-rows: 6rem 80vh min-content 40vw repeat(3, min-content);
          grid-template-columns:
            [full-start] minmax(6rem, 1fr) [center-start] repeat(
              8,
              [col-start] minmax(min-content, 14rem) [col-end]
            )
            [center-end] minmax(6rem, 1fr) [full-end];
        }
      
        @media only screen and (max-width: ${props => props.theme.bpMedium}) {
          grid-template-rows: 6rem calc(100vh - 6rem);
        }
      }
      .nav {
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
      }
    `;

  return (
    <ThemeProvider theme={props.theme}>
      <GlobalStyle />
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
