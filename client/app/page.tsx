import SocialList from "@/components/SocialList";
import ProjectList from "@/components/ProjectList";

import aboutService from "@/sanity/services/aboutService";
import projectsService from "@/sanity/services/projectsService";

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
      <h1 className="mt-4 text-4xl font-bold">{about.name}</h1>

      {/** description */}
      <p className="max-w-2xl mt-4">{about.description}</p>

      {/** projects */}
      <h2 className="mt-4 text-2xl font-semibold">Selected Projects</h2>

      <div className="mt-4 space-y-2">
        <ProjectList items={projects} />
      </div>
    </div>
  );
};

export default HomePage;
