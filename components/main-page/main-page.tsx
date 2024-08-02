"use client";

import MarketsTable from "./markets-table";

export default function MainPage() {
  return (
    <div className="container flex flex-col py-8">
      <h1 className="text-3xl font-bold">
        <span className="me-1 text-primary-500">GH Company</span>
        Test Project
      </h1>

      <h2 className="mt-4 text-2xl font-semibold">kucoin Markets</h2>

      <div className="mt-10">
        <MarketsTable />
      </div>
    </div>
  );
}
