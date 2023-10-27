import { z } from "zod";

export const categorySchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Category name is required",
    }),
    images: z
      .string({
        required_error: "Should be at least one category image",
      })
      .array()
      .nonempty({
        message: "Category image collection can't be empty",
      })
      .max(3)
  }),
});
