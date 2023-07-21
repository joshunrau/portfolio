import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    type: "data",
    schema: z.object({
      title: z.string()
    })
  })
};
