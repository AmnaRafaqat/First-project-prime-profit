import { z } from "zod";

export const previewSchema = z.object({
  amount: z.number().positive(),
  hours: z.number().int().min(1),
  planId: z.string().optional(),
});

export const investSchema = z.object({
  user: z.string().min(1),
  amount: z.number().positive(),
  planId: z.string().optional(),
});

export const withdrawSchema = z.object({
  user: z.string().min(1),
  amount: z.number().positive(),
  planId: z.string().optional(),
});

export type PreviewInput = z.infer<typeof previewSchema>;
export type InvestInput = z.infer<typeof investSchema>;
export type WithdrawInput = z.infer<typeof withdrawSchema>;


