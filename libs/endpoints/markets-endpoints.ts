import { makeApi, Zodios } from "@zodios/core";
import { ZodiosHooks } from "@zodios/react";
import { mainApiInstance } from "@/libs/api";
import { API_URL } from "@/config";
import { z } from "zod";
import * as Schemas from "./markets-schema";

const endpoints = makeApi([
  {
    method: "get",
    path: "/market/stats",
    alias: "queryMarketBySymbol",
    requestFormat: "json",
    parameters: [
      {
        name: "symbol",
        type: "Query",
        schema: z.string(),
      },
    ],
    response: z.object({
      code: z.string(),
      data: Schemas.MarketSchema,
    }),
  },
]);

const client = new Zodios(API_URL, endpoints, {
  axiosInstance: mainApiInstance,
});

export const marketsHooks = new ZodiosHooks("markets", client);
