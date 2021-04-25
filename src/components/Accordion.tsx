import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import { AboutItemProps, AccordionProps, Icons } from "./index";

const AccordionItem: React.FC<AboutItemProps> = ({
  item,
  index,
  isExpanded,
  setExpanded,
}) => {
  const isOpen = index === isExpanded;

  return (
    <>
      <AccordionItemHeaderContainer
        initial={false}
        onClick={() => setExpanded(isOpen ? false : index)}
        animate={{
          backgroundColor: isOpen ? "rgba(0,0,0, 0.95)" : "transparent",
        }}
        whileHover={{
          backgroundColor: "rgba(0,0,0,0.25)",
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <AccordionItemHeader>{item.title}</AccordionItemHeader>
        <ArrowIconContainer isSelected={isOpen}>
          <Icons name="arrow" />
        </ArrowIconContainer>
      </AccordionItemHeaderContainer>
      <AnimatePresence initial={false}>
        {isOpen && (
          <AccordionItemBody
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1 },
              collapsed: { opacity: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            dangerouslySetInnerHTML={{
              __html: item.body,
            }}
          ></AccordionItemBody>
        )}
      </AnimatePresence>
    </>
  );
};

const Accordion = ({ items }: AccordionProps) => {
  const [expanded, setExpanded] = useState<false | number>(2);

  return (
    <Wrappper>
      {items.map((item, index) => (
        <AccordionItem
          item={item}
          index={index}
          isExpanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </Wrappper>
  );
};

export default Accordion;

const Wrappper = styled.div`
  display: grid;
  gap: 0.8rem;
`;

const AccordionItemHeaderContainer = styled(motion.div)`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  padding: 0.6rem 1rem;
  border-radius: 8px;
`;

const AccordionItemHeader = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`;

const ArrowIconContainer = styled.div<{ isSelected: boolean }>`
  svg {
    fill: #fff;
    transition: 0.8s ease-in-out;
    transform: ${({ isSelected }) =>
      isSelected ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

const AccordionItemBody = styled(motion.div)`
  padding: 0.6rem 1rem;
`;
