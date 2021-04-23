import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import { Wrapper, Heading, Icons, ProjectItem } from "./index";
import { graphql, useStaticQuery } from "gatsby";

const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

const variant = {
  initialExit: {
    x: windowWidth,
  },
  animate: { x: 0 },
};

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

const parseProjects = (data: any): ProjectItem[] => {
  return data.nodes.map((singleProject) => ({
    id: singleProject.id,
    title: singleProject.title,
    description: singleProject.description.childMarkdownRemark.html,
    body: singleProject.body.raw,
    image: singleProject.coverImage.fluid.src,
  }));
};

const Projects: React.FC = () => {
  const [items, setItems] = useState<ProjectItem[]>([]);
  const [dataModal, setDataModal] = useState<{
    isVisible: boolean;
    data?: ProjectItem;
  }>({
    isVisible: false,
  });

  const openModal = (data: ProjectItem) => {
    setDataModal({
      isVisible: true,
      data,
    });
  };

  const closeModal = () => {
    setDataModal({
      isVisible: false,
    });
  };

  const data = useStaticQuery(graphql`
    {
      allContentfulProjects(limit: 5) {
        nodes {
          id
          title
          body {
            raw
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          coverImage {
            fluid {
              src
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    setItems(parseProjects(data.allContentfulProjects));
  }, [data]);

  console.log(items);

  return (
    <>
      <Wrapper id="projects">
        <Heading title={"Progetti"} />
        <ProjectsContainer>
          {items.map((val) => (
            <ProjectContainer /* name={val.title} */ key={val.id}>
              <ProjectImage src={val.image} alt="Image" />
              <ProjectContentContainer>
                <div>
                  <ProjectHeading>{val.title}</ProjectHeading>
                  <ProjectDescription
                    dangerouslySetInnerHTML={{ __html: val.description }}
                  />
                </div>
                <ProjectFooterContainer>
                  <a>
                    <Icons name="github" />
                  </a>
                  <a>
                    <Icons name="open" onClick={() => openModal(val)} />
                  </a>
                </ProjectFooterContainer>
              </ProjectContentContainer>
            </ProjectContainer>
          ))}
        </ProjectsContainer>
      </Wrapper>
      <AnimatePresence>
        {dataModal.isVisible && (
          <ModalContainer
            variants={variant}
            initial={"initialExit"}
            animate={"animate"}
            exit={"initialExit"}
          >
            <ModalHeadingContainer>
              <ModalHeading>{dataModal.data?.title!}</ModalHeading>
              <Icons name="close" onClick={closeModal} />
            </ModalHeadingContainer>
            <ModalBody>
              <ModalBodyImage src={dataModal.data?.image!} alt="Img" />
              <div dangerouslySetInnerHTML={{__html: dataModal.data?.body!}} />
            </ModalBody>
          </ModalContainer>
        )}
      </AnimatePresence>
    </>
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

const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;

  padding: 2rem 3rem;
  margin: 0 auto;

  height: 100%;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.95);

  overflow: scroll;
  z-index: 3;

  color: #fff;

  svg {
    fill: #fff;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ModalHeadingContainer = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  align-items: center;
`;

const ModalHeading = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ModalBody = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
`;

const ModalBodyImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 11rem;
`;
