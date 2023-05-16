import { groq } from "next-sanity";

const projects = groq`*[_type == "project"] | order(_createdAt asc){
    _id,
    name,
    "slug": slug.current,
    description,
}`;

const projectBySlug = groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    name,
    "slug": slug.current,
    description,
    frontendDescription,
    backendDescription,
    "imagesURLs": images[].asset->url,
    stack,
    githubLink,
    liveUrl
}`;

export default {
  projects,
  projectBySlug,
};
