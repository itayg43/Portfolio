import Image from "next/image";

import projectsService from "@/src/sanity/services/projectsService";

interface Props {
  params: {
    slug: string;
  };
}

const ProjectPage = async ({ params: { slug } }: Props) => {
  const project = await projectsService.getProjectBySlug(slug);

  return <div></div>;
};

export default ProjectPage;
