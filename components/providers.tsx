"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { Poppins } from "next/font/google";
import { DirectionProvider } from "@radix-ui/react-direction";
import { queryClient } from "@/libs/query-client";
import { ThemeProvider } from "./theme-provider";

const font = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  variable: "--poppins",
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <DirectionProvider dir="ltr">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <div
            className={`h-full w-full bg-neutral-50 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 ${font.className}`}
          >
            {children}
          </div>
        </ThemeProvider>
      </DirectionProvider>
    </QueryClientProvider>
  );
}
