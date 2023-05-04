import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "./schemas";

const sanityConfig = defineConfig({
  projectId: "zpacskvu",
  dataset: "production",
  title: "Portfolio",
  apiVersion: "2023-05-04",
  basePath: "/sanityStudio",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default sanityConfig;
