import { PortableText } from "@portabletext/react";

import aboutService from "@/src/sanity/services/aboutService";
import projectsService from "@/src/sanity/services/projectsService";
import ProjectList from "@/src/components/ProjectList";

const HomePage = async () => {
  const [about, projects] = await Promise.all([
    aboutService.getAbout(),
    projectsService.getProjects(),
  ]);

  return (
    <div className="p-4">
      {/** description */}
      <div className="max-w-2xl text-lg">
        <PortableText value={about.description} />
      </div>

      {/** projects */}
      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Selected Projects</h2>

        <ProjectList items={projects} />
      </div>
    </div>
  );
};

export default HomePage;
