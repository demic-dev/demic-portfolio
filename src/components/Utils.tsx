import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 6rem 0rem 2rem 0rem;

  display: grid;
  gap: 1rem;

  @media (min-width: 1000px) {
    width: 55%;
  }
`;

const HeadingValue = styled.h2`
  font-family: monospace;
  font-weight: 600;

  font-size: 2rem;
  color: #fff;
`;

const UnderlineHeading = styled.div`
  padding: 0.2rem;
  width: 100%;

  background: orange;

  border-radius: 2px;
`;

export const Heading: React.FC<{ title: string }> = ({ title }) => (
  <div style={{ display: "grid", justifyContent: "flex-start" }}>
    <HeadingValue>{title}</HeadingValue>
    <UnderlineHeading />
  </div>
);

export const Container = styled.div<{ color?: string }>`
  background: #e76e55;
  position: relative;
  box-shadow: inset 3px 3px 0px 0px #8c2022;

  color: white;

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  }

  ::before {
    top: -4px;
    left: 0;
    border-top: 4px black solid;
    border-bottom: 4px black solid;
  }

  ::after {
    left: -4px;
    top: 0;
    border-left: 4px black solid;
    border-right: 4px black solid;
  }
`;
