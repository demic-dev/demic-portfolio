import React from "react";
import styled from "styled-components";

import { Wrapper, Heading } from "./index";

const TECHNOLOGIES = [
  {
    id: "react",
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    href: "https://reactjs.org/",
  },
  {
    id: "typescript",
    name: "Typescript",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    href: "https://www.typescriptlang.org/",
  },
  {
    id: "react-native",
    name: "React Native",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    href: "https://reactnative.dev/",
  },
  {
    id: "gatsby",
    name: "GatsbyJS",
    logo:
      "https://www.gatsbytutorials.com/static/4a9773549091c227cd2eb82ccd9c5e3a/1f686/favicon.png",
    href: "https://www.gatsbyjs.com/",
  },
];

//Michele De Cillis, CTA cliccabile che rimanda a Linkedin
const ABOUT_TEXT_ONE = `Ciao! Sono Michele De Cillis, ho 19 anni e vengo da Trani, in Puglia.`;
const ABOUT_TEXT_TWO = ` Ho iniziato a programmare a scuola, quando avevo quindici anni e da allora ho cercato di migliorarmi sempre di più.`;
const ABOUT_TEXT_THREE = ` Ho trovato il mio posto nello sviluppo web e mobile... ecc.`;

// Mi chiamo Michele De Cillis, ho diciannove anni e ho iniziato a programmare da quando ne avevo quindici.
//  Sviluppo siti web e applicazioni.
// Conosco(trovare sinonimi) svariati linguaggi, ma conosco bene ed utilizzo quotidianamente Javascript, HTML e CSS.
//  Grazie ad essi mi sono spostato su altri linguaggi e framework simili, fondamentali per lo sviluppo web e mobile: React, React Native, NodeJS, TypeScript, GatsbyJS, GraphQL.
//  Sono sempre alla ricerca di qualcosa di nuovo, che mi permetta di aumentare sempre di più la qualità di ciò che faccio, per ottenere i migliori risultati.

const About: React.FC = () => {
  return (
    <Wrapper id="about">
      <Heading title={"About"} />
      <Content>
        <ContentContainer>
          {ABOUT_TEXT_ONE}
          {ABOUT_TEXT_TWO}
          {ABOUT_TEXT_THREE}
        </ContentContainer>
        <TechnologiesWrapper>
          <TechnologiesText>
            Alcune tecnlogie che utilizzo ogni giorno:
          </TechnologiesText>
          <TechnologiesContainer>
            {TECHNOLOGIES.map(({ id, name, logo, href }) => (
              <TechnologyContainer key={id}>
                <TechnologyImage src={logo} alt={name} />
                <TechnologyName href={href} target="_blank">
                  {name}
                </TechnologyName>
              </TechnologyContainer>
            ))}
          </TechnologiesContainer>
        </TechnologiesWrapper>
      </Content>
    </Wrapper>
  );
};

export default About;

const Content = styled.div`
  display: grid;
  gap: 1rem;
`;

const ContentContainer = styled.div.attrs({
  "aria-label": "Descrizione di demic",
})`
  padding: 2rem 0;
  font-size: 1.2rem;

  color: #fff;

  line-height: 1.2rem;
  letter-spacing: 1px;
`;

const TechnologiesWrapper = styled.div.attrs({
  "aria-label": "Linguaggi e framework",
})`
  display: grid;
  gap: 1rem;
  color: #fff;
`;

const TechnologiesText = styled.div`
  font-size: 1rem;

  letter-spacing: 1px;
`;

const TechnologiesContainer = styled.ul`
  display: grid;
  /* grid-template-columns: repeat(2, auto); */
  gap: 1rem;
`;

const TechnologyContainer = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 0.4rem;
  justify-content: flex-start;
  align-items: center;
`;

const TechnologyImage = styled.img`
  padding: 0.1rem;
  border-radius: 50%;
  background: #fff;

  height: 1.6rem;
  width: 1.6rem;
`;

const TechnologyName = styled.a`
  font-size: 1.2rem;
`;
