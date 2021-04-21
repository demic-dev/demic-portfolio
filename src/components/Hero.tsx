import React, { useState, useEffect, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { IStar, ScrollAnimation, STAR_NUMBER } from "./";

import { motion } from "framer-motion";

import uuid from "uuid";

import star_two from "../images/Star2.png";

const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

const generateSingleStar = (x?: number, y?: number): IStar => {
  const id = uuid.v4();
  const top = y || Math.floor(Math.random() * windowHeight);
  const left = x || Math.floor(Math.random() * windowWidth);
  const animDuration = Math.random() * (7 - 2) + 2;
  return { top, left, id, animDuration };
};

const generateStars = (n: number): IStar[] => {
  let stars: IStar[] = [];
  for (let i = 0; i < n; i++) stars.push(generateSingleStar());
  return stars;
};

const handleSetStar = (stars: IStar[], star: IStar): IStar[] => {
  if (stars.length >= STAR_NUMBER) {
    stars.splice(Math.floor(Math.random() * stars.length), 1);
  }
  return [...stars, star];
};

const Hero: React.FC = () => {
  const [stars, setStars] = useState<IStar[]>([]);
  const [fallingStars, setFallingStars] = useState<IStar[]>([
    generateSingleStar(),
  ]);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) =>
    setStars((stars) =>
      handleSetStar(stars, generateSingleStar(e.pageX, e.pageY))
    );

  const handleGenerateStars = useCallback(
    () => setStars(generateStars(STAR_NUMBER)),
    []
  );

  useEffect(() => {
    setStars(generateStars(STAR_NUMBER));
    handleFallingStars();
    window.addEventListener("resize", handleGenerateStars);
  }, []);

  const handleFallingStars = () =>
    setInterval(() => {
      setFallingStars(generateStars(1));
    }, 2600 * 2);

  return (
    <HeroWrapper onClick={handleClick}>
      <HeroContainer>
        <HeadHeadingContainer>
          <HeroPhraseContainer>
            Ciao sono <HeroKeyWordContainer>demic</HeroKeyWordContainer>,
          </HeroPhraseContainer>
          <HeroPhraseContainer>
            un <HeroChangeText /> developer
          </HeroPhraseContainer>
          <CTAHero>Hire me</CTAHero>
        </HeadHeadingContainer>
      </HeroContainer>
      <ScrollAnimation />
      {stars.map(({ id, top, left, animDuration }) => (
        <StarImg top={top} left={left} key={id} animDuration={animDuration} />
      ))}
      {fallingStars.map(({ id, left, top }) => (
        <FallingStar
          key={id}
          left={left}
          top={top}
          initial={{ opacity: 0.8, rotate: 35 }}
          animate={{ opacity: 0, x: 300, y: 150, rotate: 35 }}
          transition={{ duration: 2.6 }}
        />
      ))}
    </HeroWrapper>
  );
};

export default Hero;

const starBlink = keyframes`
  0% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.1;
  }
`;

const starMotion = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const changingText = keyframes`
    0% {
        content: "web";
    }
    8% {
         content: "we.";
    }
    16% {
         content: "w..";
    }
    24% {
         content: "...";
    }
    32% {
         content: "a..";
    }
    40% {
        content: "ap.";
    }
    48% {
        content: "app";
    }
    56% {
        content: "ap.";
    }
    64% {
        content: "a..";
    }
    72% {
        content: "...";
    }
    80% {
     content: "w..";
    }
    88% {
        content: "we.";
    }
    96% {
        content: "web";
    }
`;

const HeroWrapper = styled.section`
  width: 100%;

  margin: 0 auto;
  padding-top: 2rem;

  overflow: hidden;

  position: relative;
`;

const HeroContainer = styled.div`
  margin: 0 auto;

  position: relative;

  display: grid;

  height: 80vh;

  align-content: space-around;
  justify-items: center;

  z-index: 1;
`;

const HeadHeadingContainer = styled.div`
  color: #fff;
  font-size: 1.6rem;

  font-weight: 700;

  display: grid;
  gap: 0.5rem;

  justify-items: flex-start;
  align-content: center;
`;

const HeroPhraseContainer = styled.div`
  user-select: none;
  width: 100%;
  font-family: monospace;
`;

const HeroKeyWordContainer = styled.span`
  font-size: 115%;
  display: inline-block;
  transition: 0.2s ease-in;

  :hover {
    transform: translateY(-3px);
    color: orange;
  }
`;

const HeroChangeText = styled(HeroKeyWordContainer)`
  ::after {
    content: "web";
    animation: ${changingText} 6s ease infinite;
    animation-delay: 0.7s;
  }
`;

const CTAHero = styled.button`
  background: rgba(255, 165, 0, 0.4);
  border: 2px solid orange;
  border-radius: 1px;
  margin-top: 1rem;

  padding: 0.4rem 2rem;

  font-size: 1rem;
  color: white;

  justify-self: center;

  transition: 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;

  font-weight: 800;

  &:hover {
    background: orange;
    transform: translateY(3px);
    color: #140c22;
  }
`;

const StarImg = styled.div<{ top: number; left: number; animDuration: number }>`
  background-image: url(${star_two});
  background-size: contain;

  opacity: 0.8;

  width: 9px;
  height: 9px;

  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  transform: translateX(100%);

  animation: ${starBlink} ${({ animDuration }) =>
  animDuration}s linear infinite;

  /* animation: ${starMotion} 1s infinite linear; */

  z-index: 0;
`;

const FallingStar = styled(motion.div)<{ top: number; left: number }>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  transform: rotate(35deg);

  display: inline-block;

  width: 5rem;
  height: 0.16rem;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.2), #fafafa);

  clip-path: polygon(0 50%, 0% 50%, 100% 100%, 100% 0);
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
`;
