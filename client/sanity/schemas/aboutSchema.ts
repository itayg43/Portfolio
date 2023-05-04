const aboutSchema = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "social",
      title: "Social",
      type: "object",
      fields: [
        {
          name: "github",
          title: "Github",
          type: "url",
        },
        {
          name: "linkedin",
          title: "Linkedin",
          type: "url",
        },
      ],
    },
  ],
};

export default aboutSchema;
