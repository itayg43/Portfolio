import sanityClient from "../sanityClient";
import projectsQueries from "../queries/projectsQueries";

const getProjects = async (): Promise<Project[]> => {
  return await sanityClient.fetch(projectsQueries.projects);
};

const getProjectBySlug = async (slug: string): Promise<Project> => {
  return await sanityClient.fetch(projectsQueries.projectBySlug, { slug });
};

export default {
  getProjects,
  getProjectBySlug,
};
