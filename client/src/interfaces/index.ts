import { PortableTextBlock } from "sanity";

export interface About {
  description: PortableTextBlock[];
}

export interface Stack {
  frontend?: string[];
  backend?: string[];
}

export interface Experience {
  _id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  stack: Stack;
}

export interface Project {
  _id: string;
  name: string;
  slug: string;
  description: string;
  frontendDescription?: PortableTextBlock[];
  backendDescription?: PortableTextBlock[];
  imagesURLs: string[];
  stack: Stack;
  githubLink: string;
  liveUrl: string;
}
