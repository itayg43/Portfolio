import { SocialIcon } from "react-social-icons";

import projectsService from "@/src/sanity/services/projectsService";
import ChipList from "@/src/components/ChipList";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

const ProjectPage = async ({ params: { slug } }: Props) => {
  const project = await projectsService.getProjectBySlug(slug);

  return (
    <div className="flex flex-col p-4 max-w-2xl">
      <SocialIcon
        url={project.githubLink}
        target="_blank"
        bgColor="black"
        fgColor="white"
        style={{
          width: 40,
          height: 40,
          alignSelf: "center",
        }}
      />

      {/** name */}
      <h1 className="mt-4 text-4xl fond-bold">{project.name}</h1>

      {/** description */}
      <p className="mt-4">{project.description}</p>

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

        <div className="grid grid-cols-3 md:grid-cols-4 gap-1">
          {project.imagesURLs.map((url, i) => (
            <Image key={i} src={url} alt="" width={250} height={250} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
