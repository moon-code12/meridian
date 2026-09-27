export function NotFound() {
  return (
    <div className="min-h-screen bg-night text-white">
      <header className="border-b border-gray-800 bg-night/95">
        <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo-mark.svg" alt="" className="h-9 w-9" />
            <span className="text-lg font-extrabold tracking-tight">
              Meridian
            </span>
          </a>
          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-5"
          >
            <a
              href="/"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Home
            </a>
            <a
              href="/app"
              className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-semibold text-gray-200 transition-colors hover:border-gray-500 hover:text-white"
            >
              Open app
            </a>
          </nav>
        </div>
      </header>

      <main
        aria-labelledby="not-found-title"
        className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl items-center justify-center px-6 py-16"
      >
        <section className="w-full max-w-lg rounded-2xl border border-gray-800 bg-deep px-8 py-12 text-center shadow-xl shadow-black/30 sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Error 404
          </p>
          <h1 id="not-found-title" className="mt-4 text-3xl font-bold">
            Page not found
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-400">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved.
          </p>
          <a
            href="/app"
            className="mt-8 inline-flex rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-400"
          >
            Go to app
          </a>
        </section>
      </main>
    </div>
  );
}
