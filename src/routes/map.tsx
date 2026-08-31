import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { SmartLink } from "@/components/SmartLink";
import { chapters, papers } from "@/lib/content";

export const Route = createFileRoute("/map")({ component: MapPage });

const TREE = `PHILOSOPHY                 "What is information?"
     |
     v
COMPUTER SCIENCE           "How is information stored?"
     |
     v
MATHEMATICS AS GEOMETRY    "How can it be represented?"
     |
     v
PROBABILITY                "How do we speak under uncertainty?"
     |
     v
MACHINE LEARNING           "How can a machine infer a pattern?"
     |
     v
DEEP LEARNING              "How can representations compose?"
     |
     +-- LANGUAGE MODELS   "How does continuation become understanding?"
     |
     +-- REINFORCEMENT     "How does a creature get better at a life?"
     |
     v
GPU / CUDA / TRITON        "How is the counting physically done?"
     |
     v
INFERENCE SYSTEMS          "How does this become a useful machine?"
     |
     v
AGENTS                     "What if the machine may look things up and act?"
`;

function MapPage() {
  return (
    <AppShell>
      <main id="main" className="min-w-0 px-4 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto min-w-0 max-w-4xl">
          <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-primary uppercase">
            DWG ATLAS
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            The whole field, as one drawing.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Start wherever you are curious. The arrows are debts, not a test. If a later chapter
            feels like magic, walk one arrow backward.
          </p>

          <figure className="mt-10 max-w-full min-w-0 overflow-hidden rounded-lg bg-paper hairline">
            <figcaption className="border-b border-border px-3 py-2 font-mono text-[0.6875rem] tracking-[0.18em] text-muted uppercase">
              DWG ATLAS-01 · lineage of questions
            </figcaption>
            <div className="overflow-x-auto">
              <pre className="w-max p-4 font-mono text-[0.625rem] leading-[1.55] text-primary sm:text-xs whitespace-pre">
                {TREE}
              </pre>
            </div>
          </figure>

          <section className="mt-12">
            <h2 className="font-display text-2xl">Manual</h2>
            <ul className="mt-4 space-y-2">
              {chapters.map((ch) => (
                <li key={ch.slug}>
                  <SmartLink
                    href={`/chapters/${ch.slug}`}
                    className="flex min-w-0 flex-col rounded-lg border border-border bg-bg-elevated px-4 py-3 hover:bg-paper sm:flex-row sm:items-baseline sm:gap-4"
                  >
                    <span className="font-mono text-[0.6875rem] text-subtle">{ch.number}</span>
                    <span className="font-display text-lg">{ch.title}</span>
                    <span className="text-sm text-muted sm:ml-auto">{ch.question}</span>
                  </SmartLink>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl">Papers</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {papers.map((p) => (
                <li key={p.slug}>
                  <SmartLink
                    href={`/papers/${p.slug}`}
                    className="block rounded-lg border border-border bg-bg-elevated px-4 py-3 hover:bg-paper"
                  >
                    <span className="font-mono text-[0.625rem] text-subtle">{p.year}</span>
                    <div className="font-display text-lg">{p.title}</div>
                    <div className="text-sm text-muted">{p.short}</div>
                  </SmartLink>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </AppShell>
  );
}
