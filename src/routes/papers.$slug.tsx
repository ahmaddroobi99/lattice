import { createFileRoute, notFound } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Essay } from "@/components/reader/Essay";
import { getPaper, paperNeighbors } from "@/lib/content";

export const Route = createFileRoute("/papers/$slug")({
  component: PaperPage,
});

function PaperPage() {
  const { slug } = Route.useParams();
  const paper = getPaper(slug);
  if (!paper) throw notFound();
  const { prev, next } = paperNeighbors(slug);

  return (
    <AppShell>
      <Essay
        kicker={`${paper.year} · Paper`}
        title={paper.title}
        subtitle={paper.short}
        question={paper.question}
        everyday={paper.everyday}
        readMinutes={paper.readMinutes}
        slug={`paper:${paper.slug}`}
        blocks={paper.blocks}
        prev={
          prev
            ? { href: `/papers/${prev.slug}`, label: prev.title }
            : { href: "/papers", label: "All essays" }
        }
        next={
          next
            ? { href: `/papers/${next.slug}`, label: next.title }
            : { href: "/chapters/research", label: "How to read a paper" }
        }
      />
    </AppShell>
  );
}
