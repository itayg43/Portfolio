import Image from "next/image";
import { SocialIcon } from "react-social-icons";

import projectsService from "@/src/sanity/services/projectsService";
import ChipList from "@/src/components/ChipList";

interface Props {
  params: {
    slug: string;
  };
}

const ProjectPage = async ({ params: { slug } }: Props) => {
  const project = await projectsService.getProjectBySlug(slug);

  return (
    <div className="flex flex-col p-4 max-w-2xl">
      {/** name & github link */}
      <div className="flex justify-between">
        <h1 className="text-4xl fond-bold">{project.name}</h1>

        <SocialIcon
          url={project.githubLink}
          target="_blank"
          style={{ width: 35, height: 35 }}
        />
      </div>

      {/** description */}
      <p className="text-lg mt-4">{project.description}</p>

      {/** stack */}
      <div className="flex flex-col mt-4 space-y-2">
        <h2 className="text-2xl font-semibold">Stack</h2>

        {/** frontend */}
        {project.stack.frontend && <ChipList items={project.stack.frontend} />}

        {/** backend */}
        {project.stack.backend && <ChipList items={project.stack.backend} />}
      </div>

      {/** screenshots */}
      <div className="flex flex-col mt-4 space-y-2">
        <h2 className="text-2xl font-semibold">Screenshots</h2>

        {project.imagesURLs && (
          <div className="flex overflow-x-scroll space-x-2">
            {project.imagesURLs.map((url, i) => (
              <Image key={i} src={url} alt="" width={250} height={250} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
