import { AeroFrame } from "@/components/diagrams/AeroFrame";
import { SmartLink } from "@/components/SmartLink";
import type { FlowItem } from "@/lib/content/types";

type FlowChainProps = {
  drawing: string;
  title: string;
  items: FlowItem[];
  caption?: string;
};

export function FlowChain({ drawing, title, items, caption }: FlowChainProps) {
  return (
    <AeroFrame drawing={drawing} title={title} caption={caption}>
      <ol className="flex flex-col">
        {items.map((item, i) => {
          const inner = (
            <div className="rounded-md border border-primary/30 bg-bg px-3 py-2.5">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-base font-medium tracking-tight text-fg">
                  {item.label}
                </span>
              </div>
              {item.note ? <p className="mt-1 text-sm text-muted">{item.note}</p> : null}
            </div>
          );

          return (
            <li key={item.id} className="flex flex-col items-stretch">
              {item.href ? (
                <SmartLink href={item.href} className="block rounded-md hover:opacity-80">
                  {inner}
                </SmartLink>
              ) : (
                inner
              )}
              {i < items.length - 1 ? (
                <div className="flex justify-center py-1" aria-hidden="true">
                  <div className="h-5 w-px bg-primary/40" />
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
    </AeroFrame>
  );
}
