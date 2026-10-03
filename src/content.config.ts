import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

export const PROJECTS_PATH = "src/content/projects";

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${PROJECTS_PATH}` }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      releaseDate: z.date(),
      websiteLink: z.string().optional(),
      githubLink: z.string().optional(),
      featured: z.boolean().optional(),
      ogImage: image().or(z.string()).optional(),
      canonicalURL: z.string().optional(),
    }),
});

export const collections = {
  projects: projects,
};
