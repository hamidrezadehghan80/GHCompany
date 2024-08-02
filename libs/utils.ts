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
