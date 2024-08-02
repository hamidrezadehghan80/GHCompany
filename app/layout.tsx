import { Providers } from "@/components/providers";
import "@/style/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GH Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir={"ltr"} className="h-full">
      <head>
        <link rel="shortcut icon" href="#" />
      </head>
      <body className="h-full bg-neutral-50 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
