interface Social {
  github: string;
  linkedin: string;
}

interface About {
  name: string;
  description: string;
  social: Social;
}

interface Stack {
  frontend?: string[];
  backend?: string[];
}

interface Project {
  id: number;
  name: string;
  description: string;
  stack: Stack;
  githubLink: string;
}
