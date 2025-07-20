'use server';

/**
 * @fileOverview Enhances website content for clarity, engagement, and marketing effectiveness.
 *
 * - enhanceWebsiteContent - A function that enhances website content.
 * - EnhanceWebsiteContentInput - The input type for the enhanceWebsiteContent function.
 * - EnhanceWebsiteContentOutput - The return type for the enhanceWebsiteContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceWebsiteContentInputSchema = z.object({
  content: z
    .string()
    .describe('The website content to be enhanced.'),
});
export type EnhanceWebsiteContentInput = z.infer<typeof EnhanceWebsiteContentInputSchema>;

const EnhanceWebsiteContentOutputSchema = z.object({
  enhancedContent: z
    .string()
    .describe('The enhanced website content with improved clarity, engagement, and marketing effectiveness.'),
});
export type EnhanceWebsiteContentOutput = z.infer<typeof EnhanceWebsiteContentOutputSchema>;

export async function enhanceWebsiteContent(input: EnhanceWebsiteContentInput): Promise<EnhanceWebsiteContentOutput> {
  return enhanceWebsiteContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceWebsiteContentPrompt',
  input: {schema: EnhanceWebsiteContentInputSchema},
  output: {schema: EnhanceWebsiteContentOutputSchema},
  prompt: `You are an expert marketing copywriter. You will be provided with website content, and you will rewrite it to improve its clarity, engagement, and marketing effectiveness. Apply modern marketing principles to encourage appropriate marketing outcomes.

Original Content: {{{content}}}`,
});

const enhanceWebsiteContentFlow = ai.defineFlow(
  {
    name: 'enhanceWebsiteContentFlow',
    inputSchema: EnhanceWebsiteContentInputSchema,
    outputSchema: EnhanceWebsiteContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
