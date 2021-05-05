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
import Seo from "./SEO";
import Accordion from "./Accordion";

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
  Seo,
  Accordion,
};

export type IIcons = {
  name: "github" | "open" | "linkedin" | "menu" | "npm" | "close" | "arrow";
};

export type ClickType = {
  onClick?: React.MouseEventHandler;
};

export type IconColors = { fill?: string; background?: string };

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

export interface AccordionItem {
  title: string;
  body: string;
}

export interface AccordionProps {
  items: AccordionItem[];
}

export interface AboutItemProps {
  index: number;
  item: AccordionItem;
  isExpanded: false | number;
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>;
}

export interface TechnologiesItem {
  id: string;
  name: string;
  logo: string;
  href: string;
}

export interface PostItem {
  id: string;
  title: string;
  description: string;
  readMore: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  body: string;
}

export const STAR_NUMBER = 40;
