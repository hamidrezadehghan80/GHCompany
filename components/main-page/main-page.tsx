"use client";

import { useTheme } from "next-themes";
import MarketsTable from "./markets-table";
import { Moon, Sun } from "lucide-react";

export default function MainPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="container flex flex-col py-8">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-3xl font-bold">
          <span className="me-1 text-primary-500">GH Company</span>
          Test Project
        </h1>

        {theme === "light" ? (
          <button onClick={() => setTheme("dark")}>
            <Moon />
          </button>
        ) : (
          <button onClick={() => setTheme("light")}>
            <Sun />
          </button>
        )}
      </div>

      <h2 className="mt-4 text-2xl font-semibold">kucoin Markets</h2>

      <div className="mt-10">
        <MarketsTable />
      </div>
    </div>
  );
}
