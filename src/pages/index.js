import React, { useState } from "react";
import styled from "styled-components";

import {
  Layout,
  Hero,
  About,
  Projects,
  ContactMe,
  // StartAnimation,
  Footer,
  Blog,
  Seo,
} from "../components";

console.log(
  "%cEhm... Questo non dovresti vederlo",
  "font-size: 1.4rem; font-weight: bold;"
);

const IndexPage = () => {
  const [isVisible /* setIsVisible */] = useState(false);

  // const handleAnimationEnd = (e) => {
  //   e.animationName === "fillLetters" && setIsVisible(false);
  // };

  return (
    <>
      <Seo
        title="Home"
        lang="it"
        meta={[
          {
            name: "google-site-verification",
            content: "r4D84aKED3g2-coyMmr7B3HW6Ml-BBSwGYRSRlVT1pY",
          },
        ]}
      />
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

/* <StartAnimation handleAnimationEnd={handleAnimationEnd} /> */

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
