import { Skeleton } from "../ui/skeleton";
import { TableCell, TableRow } from "../ui/table";

export default function MarketRowSkeleton() {
  return (
    <TableRow>
      <TableCell>
        <Skeleton className="h-7 w-full max-w-52" />
      </TableCell>
      <TableCell>
        <Skeleton className="ms-auto h-7 w-full max-w-52" />
      </TableCell>
      <TableCell>
        <Skeleton className="ms-auto h-7 w-full max-w-52" />
      </TableCell>
      <TableCell>
        <Skeleton className="ms-auto h-7 w-full max-w-52" />
      </TableCell>
      <TableCell>
        <Skeleton className="ms-auto h-7 w-full max-w-52" />
      </TableCell>
      <TableCell>
        <Skeleton className="ms-auto h-7 w-full max-w-52" />
      </TableCell>
    </TableRow>
  );
}
