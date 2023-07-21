import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    type: "data",
    schema: z.object({
      title: z.string(),
      description: z.object({
        en: z.string(),
        fr: z.string()
      }),
      sourceURL: z.string().url()
    })
  }),
  technologies: defineCollection({
    type: "data",
    schema: ({ image }) =>
      z.object({
        name: z.string(),
        icon: image(),
        invert: z.enum(["dark", "light"]).optional()
      })
  })
};
