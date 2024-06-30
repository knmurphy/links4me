import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    profileImage: z.string(),
    backgroundColor: z.string(),
    textColor: z.string(),
    links: z.array(z.object({
      title: z.string(),
      url: z.string(),
      icon: z.string().optional(),
      backgroundColor: z.string().optional(),
      textColor: z.string().optional(),
    }))
  })
});

export const collections = {
  'pages': pagesCollection,
};