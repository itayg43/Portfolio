export const about: About = {
  name: "Itay Gur",
  description:
    "Hi! I am a software practical engineer and recently completed a full-stack development program at monday U. The program was guided by developers from monday.com and included among others: weekly exercises submission for code review, and 2 weeks hackathon during which we worked in groups to develop an E2E project.",
  social: {
    github: "https://github.com/itayg43",
    linkedin: "https://www.linkedin.com/in/itay-gur-5b2342234/",
  },
};

export const projects: Project[] = [
  {
    id: 0,
    name: "Revenues",
    description:
      "An E2E project that allows wolt couriers to manage shifts data and calculate their net monthly salary taking into account the following: employer commission, vat, tax, and various expenses.",
    stack: {
      frontend: ["React Native (TypeScript)", "Redux"],
      backend: ["Node.js", "Express", "Sequelize (MySQL)"],
    },
    githubLink: "https://github.com/itayg43/Revenues",
  },
  {
    id: 1,
    name: "Crypto",
    description:
      "An E2E project that allows users to track the cryptocurrency market using coin gecko API. The users can search for a specific coin, and analyze its performance in the last week with the help of a graph. Also, users can manage their portfolios by buying and selling coins.",
    stack: {
      frontend: ["React Native (TypeScript)", "Redux"],
      backend: ["Node.js", "Express", "Sequelize (MySQL)"],
    },
    githubLink: "https://github.com/itayg43/Crypto",
  },
  {
    id: 2,
    name: "Movies",
    description:
      "A frontend project that allows users to get movie data using tmdb API. The users can scroll through Now Playing/Popular/Top Rated or search for a specific movie to get the information, including a YouTube link, and a list of recommended movies.",
    stack: {
      frontend: ["React Native (TypeScript)", "Redux"],
    },
    githubLink: "https://github.com/itayg43/Movies",
  },
  {
    id: 3,
    name: "Travel",
    description:
      "A frontend project that allows users to get information on recommended tourist locations in Asia. The user can select a country, then a location, and get information including a map with recommended hotels.",
    stack: {
      frontend: ["React Native (TypeScript)"],
    },
    githubLink: "https://github.com/itayg43/Travel",
  },
];
