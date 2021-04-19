import React from "react";
import styled from "styled-components";

import { Wrapper, Heading, Icons } from "./index";

const PROJ = [
  {
    id: "project-1",
    title: "Progetto #1",
    image: "https://placeimg.com/640/480/tech",
    description: `In questo progetto, in pratica...`,
  },
  {
    id: "project-2",
    title: "Progetto #2",
    image: "https://placeimg.com/640/480/tech",
    description: `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!`,
  },
  {
    id: "project-3",
    title: "Progetto #3",
    image: "https://placeimg.com/640/480/tech",
    description: `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!`,
  },
];

const Projects: React.FC = () => {
  return (
    <Wrapper id="projects">
      <Heading title={"Progetti"} />
      <ProjectsContainer>
        {PROJ.map((val) => (
          <ProjectContainer name={val.title} key={val.id}>
            <ProjectImage src={val.image} alt="Image" />
            <ProjectContentContainer>
              <div>
                <ProjectHeading>{val.title}</ProjectHeading>
                <ProjectDescription>{val.description}</ProjectDescription>
              </div>
              <ProjectFooterContainer>
                <a>
                  <Icons name="github" />
                </a>
                <a>
                  <Icons name="open" />
                </a>
              </ProjectFooterContainer>
            </ProjectContentContainer>
          </ProjectContainer>
        ))}
      </ProjectsContainer>
    </Wrapper>
  );
};

export default Projects;

const ProjectsContainer = styled.div`
  padding-top: 2rem;
  display: grid;

  row-gap: 4rem;

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
`;

const ProjectContainer = styled.div.attrs<{ name: string }>(({ name }) => {
  return {
    "aria-label": `Scopri di più su ${name}`,
  };
})`
  position: relative;
`;

const ProjectContentContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  overflow: hidden;

  display: grid;
  align-content: space-between;

  gap: 0.8rem;

  background: rgba(0, 0, 0, 0.6);

  top: 0;
  left: 0;

  border-radius: 6px;

  color: #fff;

  padding: 2rem 1.4rem;

  transition: 0.7s ease;

  svg {
    fill: #fff;
    transition: 0.7s ease;
  }

  :hover {
    background: rgba(204, 214, 246, 0.9);
    color: #020202;
  }
  :hover svg {
    fill: #020202;
  }
  :hover a {
    color: #020202;
  }
`;

const ProjectHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 6px;
`;

const ProjectDescription = styled.div`
  margin-top: 0.6rem;
  font-size: 1rem;
`;

const ProjectFooterContainer = styled.div`
  display: flex;

  margin: 3px;

  font-size: 0.9rem;
  font-weight: 600;

  justify-self: flex-end;
  align-items: center;

  color: white;
  cursor: pointer;

  svg,
  a {
    padding: 3px;
  }

  a {
    color: #fff;
  }
`;
