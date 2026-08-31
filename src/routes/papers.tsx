import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { papers } from "@/lib/content";

export const Route = createFileRoute("/papers")({ component: PapersIndex });

function PapersIndex() {
  return (
    <AppShell>
      <main id="main" className="px-4 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-primary uppercase">
            Visual essays
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            A paper is a claim with a diagram.
          </h1>
          <p className="mt-4 text-lg text-muted">
            Landmark architectures, redrawn as everyday pictures. Not implementations — inheritances.
          </p>
          <ol className="mt-10 divide-y divide-border overflow-hidden rounded-lg border border-border bg-bg-elevated">
            {papers.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/papers/$slug"
                  params={{ slug: p.slug }}
                  className="block px-4 py-4 hover:bg-paper sm:flex sm:items-baseline sm:gap-6"
                >
                  <span className="font-mono text-[0.6875rem] text-subtle">{p.year}</span>
                  <span className="mt-1 flex-1 sm:mt-0">
                    <span className="font-display text-xl tracking-tight">{p.title}</span>
                    <span className="mt-1 block text-sm text-muted">{p.short}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </main>
    </AppShell>
  );
}
