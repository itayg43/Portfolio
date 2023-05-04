interface Social {
  github: string;
  linkedin: string;
}

interface About {
  _id: string;
  name: string;
  description: string;
  social: Social;
}

interface Stack {
  frontend?: string[];
  backend?: string[];
}

interface Project {
  _id: string;
  name: string;
  slug: string;
  description: string;
  imagesURLs: string[];
  stack: Stack;
  githubLink: string;
}
