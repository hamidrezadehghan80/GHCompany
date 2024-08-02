import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MarketTableRow from "./market-row";
import { useState } from "react";
import { IMarket } from "@/libs/endpoints/markets-schema";
import MarketDetailsDialog from "./market-details-dialog";
import useWindowSize from "@/libs/hooks/use-window-size";
import MarketTableRowMobile from "./market-row-mobile";

const marketsSymbols = [
  "BTC",
  "ETH",
  "XRP",
  "ADA",
  "BNB",
  "TRX",
  "LTC",
  "DOT",
  "AVAX",
  "TON",
];

export default function MarketsTable() {
  const [isMarketDetailsDialogOpen, setMarketDetailsDialogOpen] =
    useState<boolean>(false);

  const [selectedMarket, setSelectedMarket] = useState<IMarket>();

  const { isDesktop } = useWindowSize();

  return (
    <>
      {isDesktop ? (
        <Table>
          <TableHeader>
            <TableRow className="bg-neutral-200/70 dark:bg-neutral-800">
              <TableHead>Market</TableHead>
              <TableHead className="text-end">Buy</TableHead>
              <TableHead className="text-end">Sell</TableHead>
              <TableHead className="text-end">24h Change</TableHead>
              <TableHead className="text-end">24h Low</TableHead>
              <TableHead className="text-end">24h High</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {marketsSymbols.map((symbol) => (
              <MarketTableRow
                key={symbol}
                symbol={symbol}
                onSymbolClick={(market) => {
                  setSelectedMarket(market);
                  setMarketDetailsDialogOpen(true);
                }}
              />
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="flex flex-col gap-4">
          {marketsSymbols.map((symbol) => (
            <MarketTableRowMobile
              key={symbol}
              symbol={symbol}
              onSymbolClick={(market) => {
                setSelectedMarket(market);
                setMarketDetailsDialogOpen(true);
              }}
            />
          ))}
        </div>
      )}

      {isMarketDetailsDialogOpen && selectedMarket && (
        <MarketDetailsDialog
          open={isMarketDetailsDialogOpen}
          setOpen={setMarketDetailsDialogOpen}
          market={selectedMarket}
          // key={`isMarketDetailsDialogOpen ${isMarketDetailsDialogOpen}`}
        />
      )}
    </>
  );
}
