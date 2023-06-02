import { PortableText } from "@portabletext/react";

import aboutService from "@/src/sanity/services/aboutService";
import experienceService from "../sanity/services/experienceService";
import projectsService from "@/src/sanity/services/projectsService";
import ProjectList from "@/src/components/ProjectList";
import ExperienceList from "../components/ExperienceList";

const HomePage = async () => {
  const [about, experience, projects] = await Promise.all([
    aboutService.getAbout(),
    experienceService.getExperience(),
    projectsService.getProjects(),
  ]);

  return (
    <div className="p-4">
      {/** description */}
      <div className="max-w-2xl text-lg">
        <PortableText value={about.description} />
      </div>

      {/** experience */}
      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Experience</h2>

        <ExperienceList items={experience} />
      </div>

      {/** projects */}
      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <ProjectList items={projects} />
      </div>
    </div>
  );
};

export default HomePage;
