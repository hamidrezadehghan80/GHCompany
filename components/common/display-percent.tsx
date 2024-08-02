import { ReactNode } from "react";

export default function DisplayPercent({
  number,
  className,
  beforeText,
  nextText,
}: {
  number: string;
  className?: string;
  beforeText?: ReactNode;
  nextText?: ReactNode;
}) {
  let colorClass = "";

  if (+number > 0) {
    colorClass = "text-teal-500";
  } else if (+number < 0) {
    colorClass = "text-red-500";
  } else {
    colorClass = "text-neutral-300";
  }

  return (
    <span
      className={`${colorClass} ${className} rtl:text-right rtl:[direction:ltr]`}
    >
      {beforeText}
      {+number > 0 ? "+" : ""}
      {number}
      {nextText}
    </span>
  );
}
