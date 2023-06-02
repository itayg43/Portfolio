import sanityClient from "../sanityClient";
import experienceQueries from "../queries/experienceQueries";
import { Experience } from "@/src/interfaces";

const getExperience = async (): Promise<Experience[]> => {
  return await sanityClient.fetch(experienceQueries.experience);
};

export default {
  getExperience,
};
