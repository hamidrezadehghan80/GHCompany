import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const repeat = (times: number) => {
  return Array.from(Array(times).keys());
};

export const isProduction = () => {
  if (process && process.env.NODE_ENV === "development") {
    return false;
  }

  return true;
};

export const formatCurrency = (amount: number | string | undefined) => {
  if (!amount) return 0;
  if (typeof amount === "string") amount = +amount;
  return amount.toLocaleString();
};

export const formatCrypto = (amount: number | string | undefined) => {
  if (!amount) return 0;
  if (typeof amount === "string") amount = +amount;
  return amount.toString();
};

export function getBigNumberAbbreviate(number: number, precision: number = 1) {
  const abbr = ["M", "B", "T"];

  let tier = (Math.log10(number) / 3) | 0;

  if (tier === 2) tier = 2;
  else if (tier < 2) return number;

  const suffix = abbr[tier - 2];
  const scale = Math.pow(10, tier * 3);

  const scaled = number / scale;

  return scaled.toFixed(precision) + suffix;
}
