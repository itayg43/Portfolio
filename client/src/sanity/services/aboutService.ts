import { groq } from "next-sanity";

import sanityClient from "../sanityClient";

const getAbout = async (): Promise<About> => {
  return await sanityClient.fetch(
    groq`*[_type == "about"][0]{
            _id,
            name,
            description,
            socialLinks
        }`
  );
};

export default {
  getAbout,
};
