import React from "react";
import styled from "styled-components";

import Layout from "@components/Layout";
import Hero from "@components/Hero";
import About from "@components/About";
import Projects from "@components/Projects";
import ContactMe from "@components/ContactMe";
import Footer from "@components/Footer";
import Blog from "@components/Blog";
import Seo from "@components/Seo";

console.log(
  "%cEhm... Questo non dovresti vederlo",
  "font-size: 1.4rem; font-weight: bold;"
);

const IndexPage = () => {
  return (
    <>
      <Seo
        title="Home"
        lang="it"
        meta={[
          {
            name: "google-site-verification",
            content: process.env.GOOGLE_SITE_VERIFICATION,
          },
        ]}
      />
      <Layout>
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
