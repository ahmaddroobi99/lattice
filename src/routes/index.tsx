import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { buttonVariants } from "@/components/ui/button";
import { chapters, SPINE } from "@/lib/content";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const lastSlug = useProgress((s) => s.lastSlug);
  const isPaper = lastSlug?.startsWith("paper:") ?? false;
  const paperSlug = isPaper && lastSlug ? lastSlug.slice(6) : "transformer";
  const chapterSlug = !isPaper && lastSlug ? lastSlug : "philosophy";

  return (
    <AppShell>
      <main id="main" className="min-w-0 px-4 py-10 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto min-w-0 max-w-5xl">
          <p className="font-mono text-[0.6875rem] tracking-[0.22em] text-primary uppercase">
            A visual field manual
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium tracking-tight text-fg sm:text-6xl">
            From observation to intelligence.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Not a coding gym. A way of seeing. Arrays as mailboxes, vectors as walks, attention as a
            dinner table, GPUs as a kitchen of a thousand cooks. Machine intelligence drawn as
            geometry, SQL, and everyday life.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {isPaper ? (
              <Link
                to="/papers/$slug"
                params={{ slug: paperSlug }}
                className={cn(buttonVariants())}
              >
                Continue reading
              </Link>
            ) : (
              <Link
                to="/chapters/$slug"
                params={{ slug: chapterSlug }}
                className={cn(buttonVariants())}
              >
                {lastSlug ? "Continue reading" : "Open the manual"}
              </Link>
            )}
            <Link to="/map" className={cn(buttonVariants({ variant: "outline" }))}>
              See the full map
            </Link>
          </div>

          <section className="mt-16">
            <h2 className="font-mono text-[0.6875rem] tracking-[0.2em] text-muted uppercase">
              DWG 00 · The spine
            </h2>
            <ol className="mt-4 divide-y divide-border overflow-hidden rounded-lg border border-border bg-bg-elevated">
              {SPINE.map((item, i) => {
                const slug = item.href.replace("/chapters/", "");
                return (
                  <li key={item.id}>
                    <Link
                      to="/chapters/$slug"
                      params={{ slug }}
                      className="flex items-baseline justify-between gap-4 px-4 py-3 hover:bg-paper"
                    >
                      <span className="font-mono text-[0.6875rem] text-subtle tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-display text-lg tracking-tight">{item.label}</span>
                      <span className="hidden font-mono text-[0.625rem] tracking-wider text-muted uppercase sm:inline">
                        open
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>

          <section className="mt-16">
            <h2 className="font-mono text-[0.6875rem] tracking-[0.2em] text-muted uppercase">
              Twelve chapters
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {chapters.map((ch) => (
                <Link
                  key={ch.slug}
                  to="/chapters/$slug"
                  params={{ slug: ch.slug }}
                  className="rounded-lg border border-border bg-bg-elevated p-4 hover:bg-paper"
                >
                  <div className="font-mono text-[0.625rem] tracking-[0.16em] text-primary uppercase">
                    {ch.number}
                  </div>
                  <h3 className="mt-1 font-display text-xl tracking-tight">{ch.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{ch.subtitle}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </AppShell>
  );
}
