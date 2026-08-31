import { useEffect } from "react";
import { BlockView } from "@/components/reader/BlockView";
import { SmartLink } from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import type { Block } from "@/lib/content/types";
import { useProgress } from "@/lib/progress";

type EssayProps = {
  kicker: string;
  title: string;
  subtitle: string;
  question: string;
  everyday: string;
  readMinutes: number;
  slug: string;
  blocks: Block[];
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
};

export function Essay({
  kicker,
  title,
  subtitle,
  question,
  everyday,
  readMinutes,
  slug,
  blocks,
  prev,
  next,
}: EssayProps) {
  const setLast = useProgress((s) => s.setLast);
  const markComplete = useProgress((s) => s.markComplete);
  const done = useProgress((s) => s.completed.includes(slug));

  useEffect(() => {
    setLast(slug);
  }, [slug, setLast]);

  return (
    <main id="main" className="min-w-0 px-4 py-10 sm:px-8 lg:px-12 lg:py-14">
      <article className="mx-auto grid min-w-0 max-w-6xl gap-10 lg:grid-cols-[minmax(0,42rem)_16rem]">
        <div className="min-w-0">
          <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-primary uppercase">
            {kicker} · {readMinutes} min
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-muted">{subtitle}</p>
          <div className="mt-6 rounded-lg border border-forest/25 bg-bg-elevated p-4 lg:hidden">
            <div className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
              In daily life
            </div>
            <p className="mt-2 text-sm leading-relaxed">{everyday}</p>
          </div>
          {blocks.map((block, i) => (
            <BlockView key={i} block={block} />
          ))}
          <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-border pt-8">
            <Button
              type="button"
              variant={done ? "outline" : "default"}
              onClick={() => markComplete(slug)}
            >
              {done ? "Marked as read" : "Mark as read"}
            </Button>
          </div>
          <nav className="mt-8 grid gap-3 sm:grid-cols-2">
            {prev ? (
              <SmartLink
                href={prev.href}
                className="rounded-lg border border-border bg-bg-elevated px-4 py-4 hover:bg-paper"
              >
                <div className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
                  Previous
                </div>
                <div className="mt-1 font-display text-lg">{prev.label}</div>
              </SmartLink>
            ) : (
              <div />
            )}
            {next ? (
              <SmartLink
                href={next.href}
                className="rounded-lg border border-border bg-bg-elevated px-4 py-4 sm:text-right hover:bg-paper"
              >
                <div className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
                  Next
                </div>
                <div className="mt-1 font-display text-lg">{next.label}</div>
              </SmartLink>
            ) : null}
          </nav>
        </div>
        <aside className="hidden min-w-0 lg:block">
          <div className="sticky top-10 space-y-6">
            <div className="rounded-lg border border-border bg-bg-elevated p-4">
              <div className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
                The question
              </div>
              <p className="mt-2 font-display text-lg leading-snug">{question}</p>
            </div>
            <div className="rounded-lg border border-forest/25 bg-bg-elevated p-4">
              <div className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
                In daily life
              </div>
              <p className="mt-2 text-sm leading-relaxed text-fg">{everyday}</p>
            </div>
          </div>
        </aside>
      </article>
    </main>
  );
}
