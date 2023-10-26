import { z } from "zod";

export const categorySchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Category name is required",
    }),
    images: z
      .string({
        required_error: "There should be at least one image category",
      })
      .array()
      .nonempty({
        message: "Category image collection can't be empty",
      })
      .max(3),
  }),
});
