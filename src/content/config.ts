import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      releaseDate: z.date(),
      websiteLink: z.string().optional(),
      gitlabLink: z.string().optional(),
      githubLink: z.string().optional(),
      featured: z.boolean().optional(),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 x 630 pixels",
        })
        .or(z.string())
        .optional(),
      canonicalURL: z.string().optional(),
    }),
});

export const collections = { projects };
