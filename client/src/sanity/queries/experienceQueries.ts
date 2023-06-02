import { groq } from "next-sanity";

const experience = groq`*[_type == "experience"] | order(_createdAt desc){
    _id,
    title,
    company,
    period,
    description,
    stack
}`;

export default {
  experience,
};
