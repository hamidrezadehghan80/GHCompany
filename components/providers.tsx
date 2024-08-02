"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

import { useTheme } from "next-themes";
import { Lato } from "next/font/google";
import { DirectionProvider } from "@radix-ui/react-direction";
import { queryClient } from "@/libs/query-client";

const font = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <DirectionProvider dir="ltr">
        <div className={`h-full w-full bg-neutral-50 text-neutral-900`}>
          {children}
        </div>
      </DirectionProvider>
      <Toaster
        theme={"light"}
        closeButton
        toastOptions={{
          style: {
            border: "border 1px solid #e3e6e8ff",
          },
        }}
        position={"top-right"}
        dir="rtl"
        richColors
        className="rtl:!justify-end rtl:!text-right"
      />
    </QueryClientProvider>
  );
}
