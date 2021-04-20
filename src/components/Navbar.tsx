import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "gatsby";

import { Icons } from ".";

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
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const handleOpenPanel = () => setIsNavOpen((val) => !val);

  return (
    <>
      <AnimatePresence>
        {isNavOpen && (
          <NavbarPanel
            initial={{ x: window.innerWidth }}
            animate={{ x: 0 }}
            exit={{ x: window.innerWidth }}
          >
            <NavbarPanelHeadingContainer>
              <Heading>demic.dev</Heading>
              <Icons name="close" onClick={handleOpenPanel} />
            </NavbarPanelHeadingContainer>
            <NavbarContainer>
              {LINKS.map(({ id, name, to }) => (
                <NavbarItemContainer>
                  <Link to={to} onClick={handleOpenPanel} key={id} title={name}>
                    <NavbarItem>{name}</NavbarItem>
                  </Link>
                  <NavbarItemLine />
                </NavbarItemContainer>
              ))}
            </NavbarContainer>
            <NavbarPanelSocialContainer>
              <Link to="https://github.com/demic-dev">
                <Icons name="github" />
              </Link>
              <Link to="https://www.linkedin.com/in/michele-de-cillis/">
                <Icons name="linkedin" />
              </Link>
              <Link to="https://twitter.com/demic_dev">
                <Icons name="twitter" />
              </Link>
              <Link to="https://www.instagram.com/demic.dev/">
                <Icons name="instagram" />
              </Link>
            </NavbarPanelSocialContainer>
          </NavbarPanel>
        )}
      </AnimatePresence>
      <Wrapper>
        <Heading>demic.dev</Heading>
        <ActionsContainer>
          {LINKS.map(({ id, name, to }) => (
            <Link to={to} key={id} title={name}>
              <Text>{name}</Text>
            </Link>
          ))}
          <Icons name="menu" onClick={handleOpenPanel} />
        </ActionsContainer>
      </Wrapper>
    </>
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
  top: 2rem;
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

const NavbarPanel = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;

  padding: 2rem 4rem;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.95);

  z-index: 3;

  display: grid;

  align-content: space-between;

  svg {
    fill: #fff;
    cursor: pointer;
  }
`;

const NavbarContainer = styled.div`
  display: grid;
  gap: 1.4rem;
`;

const NavbarPanelHeadingContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavbarItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const NavbarItem = styled.li`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;

  list-style: none;
`;

const NavbarItemLine = styled.div`
  color: #ccd6f6;
  width: 100%;
  height: 1px;

  margin-left: 1rem;

  background-color: rgba(204, 214, 246, 0.6);
`;

const NavbarPanelSocialContainer = styled(NavbarItemContainer)`
  justify-content: space-evenly;
`;
