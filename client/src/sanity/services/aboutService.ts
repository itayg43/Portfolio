import sanityClient from "../sanityClient";
import aboutQueries from "../queries/aboutQueries";
import { About } from "@/src/interfaces";

const getAbout = async (): Promise<About> => {
  return await sanityClient.fetch(aboutQueries.about);
};

export default {
  getAbout,
};
