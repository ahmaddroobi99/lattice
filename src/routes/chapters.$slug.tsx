import { createFileRoute, notFound } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Essay } from "@/components/reader/Essay";
import { getChapter, neighbors } from "@/lib/content";

export const Route = createFileRoute("/chapters/$slug")({
  component: ChapterPage,
});

function ChapterPage() {
  const { slug } = Route.useParams();
  const chapter = getChapter(slug);
  if (!chapter) throw notFound();
  const { prev, next } = neighbors(slug);

  return (
    <AppShell>
      <Essay
        kicker={`Chapter ${chapter.number}`}
        title={chapter.title}
        subtitle={chapter.subtitle}
        question={chapter.question}
        everyday={chapter.everyday}
        readMinutes={chapter.readMinutes}
        slug={chapter.slug}
        blocks={chapter.blocks}
        prev={
          prev
            ? { href: `/chapters/${prev.slug}`, label: `${prev.number}  ${prev.title}` }
            : undefined
        }
        next={
          next
            ? { href: `/chapters/${next.slug}`, label: `${next.number}  ${next.title}` }
            : { href: "/papers", label: "Papers room" }
        }
      />
    </AppShell>
  );
}
