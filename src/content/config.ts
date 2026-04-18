import { defineCollection, z } from 'astro:content';

// Define the schema for the legal collection
const legalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.date(),
  }),
});

// Export the collections
export const collections = {
  'legal': legalCollection,
};
