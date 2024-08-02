"use client";
import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-center gap-4 text-lg text-neutral-600 dark:text-neutral-200">
      <div className="flex items-center gap-4">
        <div className="text-3xl">404</div>
        <div className="h-8 w-[2px] rounded-full bg-neutral-800 dark:bg-neutral-200" />
        <p>This Page could not be found</p>
      </div>
      <Link href="/" className="text-primary-400">
        Main Page
      </Link>
    </div>
  );
}

export default NotFoundPage;
