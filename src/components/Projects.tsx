import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import { Wrapper, Heading, Icons, ProjectItem } from "./index";
import { graphql, useStaticQuery } from "gatsby";

import more from "../images/plus.svg";

const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

const variant = {
  initialExit: {
    x: windowWidth,
  },
  animate: { x: 0 },
};

const parseProjects = (data: any): ProjectItem[] => {
  return data.nodes.map((singleProject) => ({
    id: singleProject.id,
    title: singleProject.title,
    description: singleProject.description.childMarkdownRemark.html,
    body: singleProject.body.childMarkdownRemark.html,
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
            childMarkdownRemark {
              html
            }
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

  return (
    <>
      <Wrapper id="projects">
        <Heading title={"Progetti"} />
        <ProjectsContainer>
          {items.map((val) => (
            <ProjectContainer
              onClick={() => openModal(val)}
              /* name={val.title} */ key={val.id}
            >
              <ProjectImage src={val.image} alt="Image" />
              <ProjectContentContainer>
                <div>
                  <ProjectHeading>{val.title}</ProjectHeading>
                  <ProjectDescription
                    dangerouslySetInnerHTML={{ __html: val.description }}
                  />
                </div>
                <ProjectFooterContainer></ProjectFooterContainer>
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
              <ModalHeading>{dataModal.data.title}</ModalHeading>
              <Icons name="close" onClick={closeModal} />
            </ModalHeadingContainer>
            <ModalBody>
              <ModalBodyImage src={dataModal.data.image} alt="Img" />
              <div dangerouslySetInnerHTML={{ __html: dataModal.data.body }} />
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

  transition: 0.3s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`;

const ProjectContentContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  cursor: pointer;
  overflow: hidden;

  display: grid;
  align-content: space-between;

  gap: 0.8rem;

  background-color: rgba(0, 0, 0, 0.6);
  background-image: url(${more});
  background-repeat: no-repeat;
  background-size: 15%;
  background-position: 250% center;

  top: 0;
  left: 0;

  border-radius: 6px;

  color: #fff;

  padding: 2rem 1.4rem;

  transition: 0.7s ease, 0.5s ease-in-out;
  transition-property: background-color color fill, background-position;
  will-change: transform;

  svg {
    fill: #fff;
    transition: 0.7s ease;
  }

  :hover {
    background-color: rgba(204, 214, 246, 0.9);
    background-position: center center;
    color: #020202;
  }
  :hover svg {
    fill: #020202;
  }
  :hover a {
    color: #020202;
  }
  :active,
  :focus {
    background-position: -200% center;
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

  overflow-y: auto;
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
