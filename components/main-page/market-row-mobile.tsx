import { marketsHooks } from "@/libs/endpoints/markets-endpoints";
import { formatCurrency } from "@/libs/utils";
import DisplayPercent from "../common/display-percent";
import { IMarket } from "@/libs/endpoints/markets-schema";
import MarketRowSkeletonMobile from "./market-row-mobile-skeleton";

export default function MarketTableRowMobile({
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
    {
      refetchInterval: 5000,
    },
  );

  const market = data?.data;

  const baseSymbol = symbol;
  const quoteSymbol = "USDT";

  if (isLoading) {
    return <MarketRowSkeletonMobile />;
  }

  if (error || !market) {
    return <div>{error?.message || "Something went wrong!"}</div>;
  }

  return (
    <div className="flex w-full flex-col gap-2 rounded-md bg-neutral-100 p-4 text-sm dark:bg-neutral-800">
      <div className="flex items-center justify-between gap-4">
        <p>Market</p>
        <button onClick={() => onSymbolClick(market)}>
          {baseSymbol}
          <span className="text-neutral-500">/{quoteSymbol}</span>
        </button>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p>Buy Price</p>
        <p>
          {formatCurrency(market.buy)}
          <span className="ms-1 text-xs text-neutral-500">USDT</span>
        </p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <p>Sell Price</p>
        <p>
          {formatCurrency(market.sell)}
          <span className="ms-1 text-xs text-neutral-500">USDT</span>
        </p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p>Change Rate</p>
        <div>
          <DisplayPercent
            number={formatCurrency(market.changeRate) + ""}
            nextText="%"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p>24h High Price</p>
        <p>
          {formatCurrency(market.high)}
          <span className="ms-1 text-xs text-neutral-500">USDT</span>
        </p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <p>24h Low Price</p>
        <p>
          {formatCurrency(market.low)}
          <span className="ms-1 text-xs text-neutral-500">USDT</span>
        </p>
      </div>
    </div>
  );
}
