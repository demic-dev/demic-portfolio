import React, { useState } from "react";
import {
  Layout,
  Hero,
  About,
  Projects,
  ContactMe,
  StartAnimation,
  Footer,
  Blog,
} from "../components";

import styled from "styled-components";

const IndexPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleAnimationEnd = (e) => {
    e.animationName === "fillLetters" && setIsVisible(false);
  };

  return (
    <>
      {/* <title>Home Page</title> */}
      {/* <StartAnimation handleAnimationEnd={handleAnimationEnd} /> */}
      <Layout style={{ display: isVisible ? "none" : "block" }}>
        <Main>
          <Hero />
          <About />
          <Projects />
          <Blog />
          <ContactMe />
          <Footer />
        </Main>
      </Layout>
    </>
  );
};

export default IndexPage;

const Main = styled.main`
  width: 100%;
  height: 100%;

  background: radial-gradient(
    circle,
    #1d2951,
    #1e244c,
    #1e2047,
    #1e1b41,
    #1e173c,
    #1c1436,
    #191230,
    #170f2a,
    #140c22,
    #0f091a,
    #080611,
    #020202
  );
`;
