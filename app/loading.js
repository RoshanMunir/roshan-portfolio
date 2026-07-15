export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-ink-900">
      <div className="w-full max-w-7xl container-px py-24">
        <div className="mx-auto h-4 w-40 animate-pulse rounded-full bg-black/10 dark:bg-white/10" />
        <div className="mx-auto mt-6 h-10 w-2/3 animate-pulse rounded-xl bg-black/10 dark:bg-white/10" />
        <div className="mx-auto mt-4 h-4 w-1/2 animate-pulse rounded-full bg-black/10 dark:bg-white/10" />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-64 animate-pulse rounded-2xl bg-black/5 dark:bg-white/5"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
