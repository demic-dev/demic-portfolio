import Layout from "./Layout";
import Navbar from "./Navbar";
import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import StartAnimation from "./StartAnimation";
import Blog from "./Blog";
import ScrollAnimation from "./ScrollAnimation";
import Icons from "./Icons";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

import { Wrapper, Heading } from "./Utils";

export {
  Layout,
  Navbar,
  Hero,
  About,
  Wrapper,
  Projects,
  Heading,
  StartAnimation,
  Blog,
  ScrollAnimation,
  Icons,
  ContactMe,
  Footer,
};

export type IIcons = {
  name: "github" | "open" | "linkedin" | "twitter" | "instagram" | "menu" | "close";
};

export type ClickType = {
  onClick?: React.MouseEventHandler;
};

export interface ISidebarItems {
  name: string;
  icon: string;
  slug: string;
}

export interface IStar {
  id?: string;
  top: number;
  left: number;
  animDuration?: number;
}

export const STAR_NUMBER = 30;
