const aboutSchema = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default aboutSchema;
