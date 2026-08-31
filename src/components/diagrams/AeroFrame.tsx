import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AeroFrameProps = {
  drawing: string;
  title: string;
  caption?: string;
  children: ReactNode;
  className?: string;
};

export function AeroFrame({ drawing, title, caption, children, className }: AeroFrameProps) {
  return (
    <figure
      className={cn(
        "my-8 max-w-full min-w-0 overflow-hidden rounded-lg bg-paper hairline",
        className,
      )}
    >
      <figcaption className="flex items-center justify-between gap-3 border-b border-border px-3 py-2 font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase sm:text-[0.6875rem] sm:tracking-[0.18em]">
        <span className="shrink-0 text-primary">DWG {drawing}</span>
        <span className="min-w-0 truncate text-right">{title}</span>
      </figcaption>
      <div className="max-w-full overflow-x-auto p-3 sm:p-5">{children}</div>
      {caption ? (
        <p className="border-t border-border px-4 py-2.5 font-mono text-[0.6875rem] leading-relaxed text-muted">
          {caption}
        </p>
      ) : null}
    </figure>
  );
}
