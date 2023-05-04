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
  slug: string;
  name: string;
  description: string;
  imageURL: string;
  stack: Stack;
  githubLink: string;
}
