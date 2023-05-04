const projectSchema = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "stack",
      title: "Stack",
      type: "object",
      fields: [
        {
          name: "frontend",
          title: "Frontend",
          type: "array",
          of: [
            {
              type: "string",
            },
          ],
        },
        {
          name: "backend",
          title: "Backend",
          type: "array",
          of: [
            {
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "githubLink",
      title: "GithubLink",
      type: "url",
    },
  ],
};

export default projectSchema;
