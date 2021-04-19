import "../normalize.css";

import React from "react";

import Navbar from "./Navbar";

import styled from "styled-components";

const Layout: React.FC<{ children: React.FC }> = ({ children, ...props }) => {
  return (
    <LayoutWrappper {...props}>
      <Navbar />
      {children}
    </LayoutWrappper>
  );
};

export default Layout;

const LayoutWrappper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
