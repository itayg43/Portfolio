import { groq } from "next-sanity";

const about = groq`*[_type == "about"][0]{
    description,
}`;

export default {
  about,
};
