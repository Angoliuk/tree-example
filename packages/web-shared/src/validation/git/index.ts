import { z } from "zod";

export type LoadFilesBodySchema = z.infer<typeof loadFilesBodySchema>;
export const loadFilesBodySchema = z.object({
  projectName: z.string().min(1),
});

export const file = z.object({
  path: z.string().min(1),
  type: z.literal("file"),
});

export const folder: z.ZodType<any> = z.lazy(() =>
  z.object({
    children: z.array(z.union([file, folder])),
    path: z.string().min(1),
    type: z.literal("directory"),
  }),
);

export const fileOrFolder = z.union([file, folder]);

export type TreeSchema = z.infer<typeof tree>;
export const tree = z.array(z.union([file, folder]));

export type LoadFilesResponseSchema = z.infer<typeof loadFilesResponseSchema>;
export const loadFilesResponseSchema = z.object({
  tree,
});
