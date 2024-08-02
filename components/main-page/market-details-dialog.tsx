import { IMarket } from "@/libs/endpoints/markets-schema";
import { ResponsiveDialog } from "../common/responsive-dialog";

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
      title={`${market.symbol.replace("-", " ")} details`}
    >
      <div>{market.symbol}</div>
    </ResponsiveDialog>
  );
}
