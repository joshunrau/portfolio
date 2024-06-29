import { defineCollection, z } from 'astro:content';

export const collections = {
  technologies: defineCollection({
    schema: ({ image }) =>
      z.object({
        icon: image(),
        invert: z.enum(['dark', 'light']).optional(),
        name: z.string()
      }),
    type: 'data'
  })
};
