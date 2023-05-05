import sanityClient from "../sanityClient";
import aboutQueries from "../queries/aboutQueries";

const getAbout = async (): Promise<About> => {
  return await sanityClient.fetch(aboutQueries.about);
};

export default {
  getAbout,
};
