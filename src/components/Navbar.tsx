import React from "react";
import styled from "styled-components";
import { Icons } from ".";

import { Link } from "gatsby";

const LINKS = [
  {
    id: "about",
    name: "About",
    to: "#about",
  },
  {
    id: "projects",
    name: "Progetti",
    to: "#projects",
  },
  {
    id: "articles",
    name: "Articoli",
    to: "#articles",
  },
  {
    id: "contact-me",
    name: "Contattami",
    to: "#contact-me",
  },
];

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <Heading>demic</Heading>
      <ActionsContainer>
        {LINKS.map(({ id, name, to }) => (
          <a href={to} key={id} title={name}>
            <Text>{name}</Text>
          </a>
        ))}
        <Icons name="menu" />
      </ActionsContainer>
    </Wrapper>
  );
};

export default Navbar;

const Text = styled.ul`
  color: white;

  cursor: pointer;
  user-select: none;
`;

const Wrapper = styled.nav`
  width: 90%;
  margin: 0 auto;

  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;

  padding: 0 2rem;

  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    fill: #fff;
    cursor: pointer;
  }

  ${Text} {
    display: none;
  }

  @media (min-width: 1000px) {
    svg {
      display: none;
    }
    ${Text} {
      display: block;
    }
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  *:not(:first-child) {
    margin-left: 3rem;
  }
`;

const Heading = styled.h1`
  font-size: 900;
  color: white;

  cursor: pointer;
  user-select: none;
`;
