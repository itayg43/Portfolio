"use client";

import { NextStudio } from "next-sanity/studio";

import sanityConfig from "@/sanity/sanityConfig";

const SanityStudioPage = () => {
  return <NextStudio config={sanityConfig} />;
};

export default SanityStudioPage;
