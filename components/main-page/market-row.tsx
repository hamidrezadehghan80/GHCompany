import { TableCell, TableRow } from "@/components/ui/table";
import { marketsHooks } from "@/libs/endpoints/markets-endpoints";
import { formatCurrency } from "@/libs/utils";
import DisplayPercent from "../common/display-percent";
import { Skeleton } from "../ui/skeleton";
import MarketRowSkeleton from "./market-row-skeleton";
import { useState } from "react";
import { IMarket } from "@/libs/endpoints/markets-schema";

export default function MarketTableRow({
  symbol,
  onSymbolClick,
}: {
  symbol: string;
  onSymbolClick: (market: IMarket) => void;
}) {
  const { data, isLoading, error } = marketsHooks.useQueryMarketBySymbol(
    {
      queries: {
        symbol: `${symbol}-USDT`,
      },
    },
    // {
    //   refetchInterval: 5000,
    // },
  );

  const market = data?.data;

  const baseSymbol = symbol;
  const quoteSymbol = "USDT";

  if (isLoading) {
    return <MarketRowSkeleton />;
  }

  if (error || !market) {
    return <div>{error?.message || "Some thing went wrong!"}</div>;
  }

  return (
    <TableRow className="!h-12 font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800">
      <TableCell className="font-semibold">
        <button onClick={() => onSymbolClick(market)}>
          {baseSymbol}
          <span className="text-neutral-500">/{quoteSymbol}</span>
        </button>
      </TableCell>
      <TableCell className="text-end">{formatCurrency(market.buy)}</TableCell>
      <TableCell className="text-end">{formatCurrency(market.sell)}</TableCell>
      <TableCell className="text-end font-semibold">
        <DisplayPercent number={market.changeRate} nextText={"%"} />
      </TableCell>
      <TableCell className="text-end">{formatCurrency(market.low)}</TableCell>
      <TableCell className="text-end">{formatCurrency(market.high)}</TableCell>
    </TableRow>
  );
}
