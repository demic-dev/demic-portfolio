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