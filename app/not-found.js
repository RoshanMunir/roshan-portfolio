import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-ink-900 px-6 text-center">
      <p className="text-sm font-semibold text-brand-500">404</p>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Page not found</h1>
      <p className="mt-3 max-w-md text-slate-600 dark:text-slate-400">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </div>
  );
}
