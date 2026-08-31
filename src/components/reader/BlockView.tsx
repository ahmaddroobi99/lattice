import { Ascii } from "@/components/diagrams/Ascii";
import { FlowChain } from "@/components/diagrams/FlowChain";
import { SqlSchema } from "@/components/diagrams/SqlSchema";
import { AttentionDinner } from "@/components/widgets/AttentionDinner";
import { DotProduct } from "@/components/widgets/DotProduct";
import { GradientFog } from "@/components/widgets/GradientFog";
import { MemoryTape } from "@/components/widgets/MemoryTape";
import { Projection } from "@/components/widgets/Projection";
import { TokenPipeline } from "@/components/widgets/TokenPipeline";
import type { Block } from "@/lib/content/types";
import { cn } from "@/lib/utils";

const CALLOUT: Record<string, string> = {
  daily: "In daily life",
  philosophy: "A way of seeing",
  geometry: "As geometry",
  note: "Note",
};

export function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "lede":
      return (
        <p className="mt-6 font-display text-xl leading-snug text-fg sm:text-2xl">{block.text}</p>
      );
    case "heading":
      return block.level === 2 ? (
        <h2 className="mt-12 font-display text-2xl font-medium tracking-tight text-fg">
          {block.text}
        </h2>
      ) : (
        <h3 className="mt-8 font-display text-xl font-medium tracking-tight text-fg">{block.text}</h3>
      );
    case "paragraph":
      return <p className="mt-4 text-[1.0625rem] leading-[1.7] text-fg">{block.text}</p>;
    case "ascii":
      return (
        <Ascii
          drawing={block.drawing}
          title={block.title}
          code={block.code}
          caption={block.caption}
        />
      );
    case "sql":
      return (
        <SqlSchema
          drawing={block.drawing}
          title={block.title}
          tables={block.tables}
          edges={block.edges}
          caption={block.caption}
        />
      );
    case "chain":
      return (
        <FlowChain
          drawing={block.drawing}
          title={block.title}
          items={block.items}
          caption={block.caption}
        />
      );
    case "callout":
      return (
        <aside
          className={cn(
            "mt-8 rounded-lg border border-border bg-bg-elevated px-4 py-4",
            block.kind === "philosophy" && "border-primary/30",
            block.kind === "daily" && "border-forest/30",
          )}
        >
          <div className="font-mono text-[0.6875rem] tracking-[0.16em] text-muted uppercase">
            {CALLOUT[block.kind]}
          </div>
          <h3 className="mt-1 font-display text-lg font-medium">{block.title}</h3>
          <p className="mt-2 text-[0.975rem] leading-relaxed text-fg">{block.text}</p>
        </aside>
      );
    case "quote":
      return (
        <blockquote className="mt-8 border-l-2 border-primary pl-4">
          <p className="font-display text-lg italic leading-snug text-fg">{block.text}</p>
          {block.attribution ? (
            <footer className="mt-2 font-mono text-xs tracking-wide text-muted">
              {block.attribution}
            </footer>
          ) : null}
        </blockquote>
      );
    case "list":
      return block.ordered ? (
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-[1.0625rem] leading-relaxed">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      ) : (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[1.0625rem] leading-relaxed">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "compare":
      return (
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[block.left, block.right].map((col) => (
            <div key={col.title} className="rounded-lg border border-border bg-paper p-4">
              <div className="font-mono text-[0.6875rem] tracking-[0.16em] text-muted uppercase">
                {col.title}
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                {col.items.map((item) => (
                  <li key={item} className="border-t border-border pt-2 first:border-t-0 first:pt-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case "widget":
      return <Widget id={block.id} />;
    default:
      return null;
  }
}

function Widget({ id }: { id: string }) {
  switch (id) {
    case "dot-product":
      return <DotProduct />;
    case "projection":
      return <Projection />;
    case "memory-tape":
      return <MemoryTape />;
    case "attention-dinner":
      return <AttentionDinner />;
    case "token-pipeline":
      return <TokenPipeline />;
    case "gradient-fog":
      return <GradientFog />;
    default:
      return null;
  }
}
