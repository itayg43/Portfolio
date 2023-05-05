interface About {
  _id: string;
  name: string;
  description: string;
  socialLinks: string[];
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
