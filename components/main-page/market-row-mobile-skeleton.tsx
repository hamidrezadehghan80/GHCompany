import { Skeleton } from "../ui/skeleton";

export default function MarketRowSkeletonMobile() {
  return (
    <div className="flex w-full flex-col gap-2 rounded-md bg-neutral-100 p-4 text-sm dark:bg-neutral-800">
      <div className="flex items-center justify-between gap-4">
        <p>Market</p>
        <Skeleton className="h-7 w-full max-w-44" />
      </div>

      <div className="flex items-center justify-between gap-4">
        <p>Buy Price</p>
        <Skeleton className="h-7 w-full max-w-44" />
      </div>
      <div className="flex items-center justify-between gap-4">
        <p>Sell Price</p>
        <Skeleton className="h-7 w-full max-w-44" />
      </div>

      <div className="flex items-center justify-between gap-4">
        <p>Change Rate</p>
        <Skeleton className="h-7 w-full max-w-44" />
      </div>

      <div className="flex items-center justify-between gap-4">
        <p>24h High Price</p>
        <Skeleton className="h-7 w-full max-w-44" />
      </div>
      <div className="flex items-center justify-between gap-4">
        <p>24h Low Price</p>
        <Skeleton className="h-7 w-full max-w-44" />
      </div>
    </div>
  );
}
