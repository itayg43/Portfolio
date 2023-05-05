import { groq } from "next-sanity";

import sanityClient from "../sanityClient";

const getAbout = async (): Promise<About> => {
  return await sanityClient.fetch(
    groq`*[_type == "about"][0]{
            description,
        }`
  );
};

export default {
  getAbout,
};
