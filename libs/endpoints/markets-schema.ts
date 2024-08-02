import { z } from "zod";

export const MarketSchema = z.object({
  time: z.number(),
  symbol: z.string(),
  buy: z.string(),
  sell: z.string(),
  changeRate: z.string(),
  changePrice: z.string(),
  high: z.string(),
  low: z.string(),
  vol: z.string(),
  volValue: z.string(),
  last: z.string(),
  averagePrice: z.string(),
  takerFeeRate: z.string(),
  makerFeeRate: z.string(),
  takerCoefficient: z.string(),
  makerCoefficient: z.string(),
});

export type IMarket = z.infer<typeof MarketSchema>;
