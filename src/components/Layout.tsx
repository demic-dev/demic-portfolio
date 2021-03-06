import "../normalize.css";
import React from "react";
import styled from "styled-components";

// @ts-ignore:disable-next-line
import Navbar from "@components/Navbar";

const Layout: React.FC<{ children: React.FC }> = ({ children, ...props }) => {
  return (
    <LayoutWrapper {...props}>
      <Navbar />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
