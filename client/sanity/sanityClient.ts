import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: "zpacskvu",
  dataset: "production",
  apiVersion: "2023-05-04",
  useCdn: process.env.NODE_ENV === "production",
});

export default sanityClient;
