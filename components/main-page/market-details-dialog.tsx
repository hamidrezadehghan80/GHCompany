import { IMarket } from "@/libs/endpoints/markets-schema";
import { ResponsiveDialog } from "../common/responsive-dialog";
import {
  formatCrypto,
  formatCurrency,
  getBigNumberAbbreviate,
} from "@/libs/utils";
import DisplayPercent from "../common/display-percent";

export default function MarketDetailsDialog({
  open,
  setOpen,
  market,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  market: IMarket;
}) {
  return (
    <ResponsiveDialog
      open={open}
      setOpen={setOpen}
      title={`${market.symbol.replace("-", " ")} market details`}
    >
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center justify-between gap-4">
          <p>Symbol</p>
          <p className="text-neutral-500">{market.symbol.replace("-", " ")}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p>Last Price</p>
          <p>
            {formatCurrency(market.last)}
            <span className="ms-1 text-xs text-neutral-500">USDT</span>
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p>Avg Price</p>
          <p>
            {formatCurrency(market.averagePrice)}
            <span className="ms-1 text-xs text-neutral-500">USDT</span>
          </p>
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
          <p>Change</p>
          <p>
            <DisplayPercent
              number={formatCurrency(market.changePrice) + ""}
              className="inline"
            />
            <span className="ms-1 text-xs text-neutral-500">USDT</span>
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p>Change Rate</p>
          <p>
            <DisplayPercent
              number={formatCurrency(market.changeRate) + ""}
              nextText="%"
            />
          </p>
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
        <div className="flex items-center justify-between gap-4">
          <p>24h Volume</p>
          <p>
            {formatCrypto(market.vol)}
            <span className="ms-1 text-xs text-neutral-500">
              {market.symbol.split("-")?.[0]}
            </span>
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p>24h Volume(USDT)</p>
          <p>
            {getBigNumberAbbreviate(+market.volValue, 2)}
            <span className="ms-1 text-xs text-neutral-500">USDT</span>
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p>Taker Fee Rate</p>
          <p>
            {market.takerFeeRate}
            <span className="ms-1 text-xs text-neutral-500">%</span>
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p>Maker Fee Rate</p>
          <p>
            {market.makerFeeRate}
            <span className="ms-1 text-xs text-neutral-500">%</span>
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p>Taker Coefficient</p>
          <p>{market.takerCoefficient}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p>Maker Coefficient</p>
          <p>{market.makerCoefficient}</p>
        </div>
      </div>
    </ResponsiveDialog>
  );
}

// {
// 	"data": {
// 		"time": 1722607158009,
// 		"symbol": "BTC-USDT",
// 		"buy": "65232.5",
// 		"sell": "65232.6",
// 		"changeRate": "0.0076",
// 		"changePrice": "492.4",
// 		"high": "65652",
// 		"low": "62279.4",
// 		"vol": "3600.89643235",
// 		"volValue": "230519058.646076095",
// 		"last": "65238",
// 		"averagePrice": "64613.99451305",
// 		"takerFeeRate": "0.001",
// 		"makerFeeRate": "0.001",
// 		"takerCoefficient": "1",
// 		"makerCoefficient": "1"
// 	}
// }
