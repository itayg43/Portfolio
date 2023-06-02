const experienceSchema = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "period",
      title: "Period",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
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
          of: [{ type: "string" }],
        },
        {
          name: "backend",
          title: "Backend",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
  ],
};

export default experienceSchema;
