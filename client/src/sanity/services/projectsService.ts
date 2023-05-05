import { groq } from "next-sanity";

import sanityClient from "../sanityClient";

const getProjects = async (): Promise<Project[]> => {
  return await sanityClient.fetch(
    groq`*[_type == "project"] | order(_createdAt asc){
            _id,
            name,
            "slug": slug.current,
            description,
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
            "imagesURLs": images[].asset->url,
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
