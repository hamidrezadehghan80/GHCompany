"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

import { Poppins } from "next/font/google";
import { DirectionProvider } from "@radix-ui/react-direction";
import { queryClient } from "@/libs/query-client";

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
        <div
          className={`h-full w-full bg-neutral-50 text-neutral-900 ${font.className}`}
        >
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
