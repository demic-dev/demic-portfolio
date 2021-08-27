import React from "react";
import styled from "styled-components";
// @ts-ignore:disable-next-line
import Icons from "@components/Icons";

const THENOUNPROJECT_LINK = "https://thenounproject.com/";
const ICONMONSTR = "https://iconmonstr.com/";

const SOCIALS_LINK = [
  {
    name: "github",
    link: "https://github.com/demic-dev",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/michele-de-cillis/",
  },
  {
    name: "npm",
    link: "https://www.npmjs.com/~demic.dev",
  },
];

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Description style={{ gridArea: "top-desc" }}>
        Sviluppato da{" "}
        <Link href="#" target="_blank">
          demic.dev
        </Link>
      </Description>
      <IconsContainer>
        {SOCIALS_LINK.map(({ name, link }) => (
          <Link href={link} key={name}>
            <Icons name={name} fill={"orange"} background={"#000"} />
          </Link>
        ))}
      </IconsContainer>
      <Description style={{ gridArea: "bottom-desc" }}>
        Icone:{" "}
        <Link href={THENOUNPROJECT_LINK} target="_blank">
          The Noun Project
        </Link>{" "}
        |{" "}
        <Link href={ICONMONSTR} target="_blank">
          iconmonstr
        </Link>
      </Description>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  width: 100%;

  margin: 8rem auto 0rem auto;
  padding: 1.4rem 0.8rem;

  background-color: orange;
  color: #000;

  display: grid;
  gap: 0.8rem;
  justify-items: center;

  grid-template-areas: "top-desc" "icons" "bottom-desc";

  @media (min-width: 1000px) {
    grid-template-areas: "top-desc icons" "bottom-desc -";
    justify-content: space-around;
    justify-items: flex-start;
    gap: 1.2rem;

    padding: 3rem 0.8rem;
  }
`;

const Description = styled.div`
  line-height: 24px;
`;

const IconsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  grid-area: icons;

  svg {
    fill: #000;
    box-sizing: border-box;
  }

  *:not(:first-child) {
    margin-left: 8px;
  }
`;

const Link = styled.a.attrs({
  "aria-label": "Apri",
})`
  color: #000;
  font-weight: bold;
`;
