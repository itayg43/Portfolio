import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: "zpacskvu",
  dataset: "production",
  apiVersion: "2023-05-04",
  useCdn: true,
});

export default sanityClient;
