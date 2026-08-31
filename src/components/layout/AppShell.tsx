import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Map as MapIcon, Menu, ScrollText } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { chapters, papers } from "@/lib/content";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="paper-grid min-h-dvh overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-bg focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-border bg-bg/90 px-3 backdrop-blur-sm sm:px-5 lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open contents">
              <Menu className="size-5" strokeWidth={1.75} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <Link to="/" className="font-display tracking-tight">
                  Lattice
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="flex-1 overflow-y-auto px-2 py-3">
              <Nav pathname={pathname} />
            </div>
          </SheetContent>
        </Sheet>
        <Link to="/" className="font-display text-lg font-medium tracking-tight">
          Lattice
        </Link>
      </header>

      <div className="mx-auto flex min-h-dvh min-w-0 max-w-[92rem]">
        <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 overflow-y-auto border-r border-border bg-bg/80 px-3 py-6 lg:block">
          <Link to="/" className="block px-2">
            <div className="font-display text-2xl font-medium tracking-tight">Lattice</div>
            <div className="mt-1 font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase">
              Field manual
            </div>
          </Link>
          <div className="mt-8">
            <Nav pathname={pathname} />
          </div>
        </aside>
        <div className="min-w-0 flex-1 overflow-x-hidden">{children}</div>
      </div>
    </div>
  );
}

function Nav({ pathname }: { pathname: string }) {
  const completed = useProgress((s) => s.completed);
  return (
    <nav className="space-y-6 pb-10">
      <NavGroup title="Atlas" icon={<MapIcon className="size-3.5" strokeWidth={1.75} />}>
        <li>
          <Link to="/" className={navClass(pathname === "/")}>
            <Dot on={false} />
            The spine
          </Link>
        </li>
        <li>
          <Link to="/map" className={navClass(pathname === "/map")}>
            <Dot on={false} />
            Full map
          </Link>
        </li>
        <li>
          <Link to="/about" className={navClass(pathname === "/about")}>
            <Dot on={false} />
            How to read this
          </Link>
        </li>
      </NavGroup>
      <NavGroup title="Manual" icon={<BookOpen className="size-3.5" strokeWidth={1.75} />}>
        {chapters.map((ch) => (
          <li key={ch.slug}>
            <Link
              to="/chapters/$slug"
              params={{ slug: ch.slug }}
              className={navClass(pathname === `/chapters/${ch.slug}`)}
            >
              <Dot on={completed.includes(ch.slug)} />
              <span>
                <span className="font-mono text-[0.625rem] text-subtle">{ch.number}</span> {ch.title}
              </span>
            </Link>
          </li>
        ))}
      </NavGroup>
      <NavGroup title="Papers" icon={<ScrollText className="size-3.5" strokeWidth={1.75} />}>
        <li>
          <Link to="/papers" className={navClass(pathname === "/papers")}>
            <Dot on={false} />
            All essays
          </Link>
        </li>
        {papers.map((p) => (
          <li key={p.slug}>
            <Link
              to="/papers/$slug"
              params={{ slug: p.slug }}
              className={navClass(pathname === `/papers/${p.slug}`)}
            >
              <Dot on={completed.includes(`paper:${p.slug}`)} />
              {p.title}
            </Link>
          </li>
        ))}
      </NavGroup>
    </nav>
  );
}

function navClass(active: boolean) {
  return cn(
    "flex items-center gap-2 rounded-md px-2 py-2 text-sm leading-snug transition-colors duration-150",
    active ? "bg-paper text-fg" : "text-muted hover:bg-paper/70 hover:text-fg",
  );
}

function Dot({ on }: { on: boolean }) {
  return (
    <span
      className={cn("mt-0.5 size-1.5 shrink-0 rounded-full", on ? "bg-forest" : "bg-border")}
      aria-hidden="true"
    />
  );
}

function NavGroup({
  title,
  icon,
  children,
}: {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2 px-2 font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase">
        {icon}
        {title}
      </div>
      <ul className="space-y-0.5">{children}</ul>
    </div>
  );
}
