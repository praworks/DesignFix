"use server";

import { enhanceWebsiteContent } from "@/ai/flows/enhance-website-content";
import { z } from "zod";

const enhanceSchema = z.object({
  content: z.string().min(10, "Content must be at least 10 characters long."),
});

export type EnhanceState = {
  message?: string | null;
  enhancedContent?: string | null;
  errors?: {
    content?: string[];
  } | null;
};

export async function enhanceContentAction(
  prevState: EnhanceState,
  formData: FormData
): Promise<EnhanceState> {
  const validatedFields = enhanceSchema.safeParse({
    content: formData.get("content"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your input.",
    };
  }

  try {
    const { enhancedContent } = await enhanceWebsiteContent({
      content: validatedFields.data.content,
    });
    return {
      message: "Content enhanced successfully!",
      enhancedContent,
    };
  } catch (error) {
    console.error("AI flow error:", error);
    return {
      message: "An error occurred while enhancing the content. Please try again.",
    };
  }
}
