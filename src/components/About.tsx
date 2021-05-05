import { graphql, useStaticQuery } from "gatsby";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import {
  Wrapper,
  Heading,
  Accordion,
  AccordionItem,
  TechnologiesItem,
} from "./index";

const parseAbout = (data: any): AccordionItem[] => {
  return data.nodes.map((singleAbout: any) => ({
    title: singleAbout.title,
    body: singleAbout.body.childMarkdownRemark.html,
  }));
};

const parseTechnologies = (data: any): TechnologiesItem[] => {
  return data.nodes.map((singleTech: any) => {
    return {
      name: singleTech.title,
      id: singleTech.id,
      href: singleTech.link,
      logo: singleTech.logo.fixed.src,
    };
  });
};

const About: React.FC = () => {
  const [itemsAbout, setItemsAbout] = useState<AccordionItem[]>([]);
  const [itemsTechnologies, setItemsTechnologies] = useState<
    TechnologiesItem[]
  >([]);

  const data = useStaticQuery(graphql`
    {
      allContentfulAbout(limit: 3, sort: { fields: createdAt }) {
        nodes {
          title
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      allContentfulTechnologies(sort: { fields: title }) {
        nodes {
          title
          id
          logo {
            fixed {
              src
            }
          }
          link
        }
      }
    }
  `);

  useEffect(() => {
    setItemsAbout(parseAbout(data.allContentfulAbout));
    setItemsTechnologies(parseTechnologies(data.allContentfulTechnologies));
  }, [data]);

  return (
    <Wrapper id="about">
      <Heading title={"About"} />
      <Content>
        <ContentContainer>
          <SubAccordionContainer>
            Sono Michele De Cillis, ho 19 anni e sono un programmatore web e
            mobile.
          </SubAccordionContainer>
          <Accordion items={itemsAbout} />
        </ContentContainer>
        <TechnologiesWrapper>
          <TechnologiesText>
            Alcune tecnlogie che utilizzo ogni giorno:
          </TechnologiesText>
          <TechnologiesContainer>
            {itemsTechnologies.map(({ id, name, logo, href }) => (
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

const SubAccordionContainer = styled.div`
  padding: 0.6rem 1rem;
  margin-bottom: 1rem;
`;

const ContentContainer = styled.div.attrs({
  "aria-label": "Descrizione",
})`
  padding: 2rem 0;
  font-size: 1.2rem;

  color: #fff;

  line-height: 1.2rem;
  letter-spacing: 1px;

  a {
    letter-spacing: 2px;
    color: #fff;
  }
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
  gap: 1rem;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, auto);
  }
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

  object-fit: contain;
`;

const TechnologyName = styled.a`
  font-size: 1.2rem;
`;
