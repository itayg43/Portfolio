import SocialList from "@/src/components/SocialList";
import ProjectList from "@/src/components/ProjectList";

import aboutService from "@/src/sanity/services/aboutService";
import projectsService from "@/src/sanity/services/projectsService";

const HomePage = async () => {
  const [about, projects] = await Promise.all([
    aboutService.getAbout(),
    projectsService.getProjects(),
  ]);

  return (
    <div className="p-4">
      {/** social */}
      <div className="flex justify-center space-x-2">
        <SocialList items={about.social} />
      </div>

      {/** name */}
      <h1 className="mt-8 text-4xl font-bold">{about.name}</h1>

      {/** description */}
      <p className="max-w-2xl mt-8">{about.description}</p>

      {/** projects */}
      <h2 className="mt-8 text-2xl font-semibold">Selected Projects</h2>

      <div className="mt-4">
        <ProjectList items={projects} />
      </div>
    </div>
  );
};

export default HomePage;
