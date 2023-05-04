import { groq } from "next-sanity";

import sanityClient from "../sanityClient";

const getProjects = async (): Promise<Project[]> => {
  return await sanityClient.fetch(
    groq`*[_type == "project"]{
            _id,
            name,
            "slug": slug.current,
            description,
            "imageURL": image.asset->url,
            stack,
            githubLink
        }`
  );
};

const getProjectBySlug = async (slug: string): Promise<Project> => {
  return await sanityClient.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            name,
            "slug": slug.current,
            description,
            "imageURL": image.asset->url,
            stack,
            githubLink 
    }`,
    {
      slug,
    }
  );
};

export default {
  getProjects,
  getProjectBySlug,
};
