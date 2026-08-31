import { AeroFrame } from "@/components/diagrams/AeroFrame";

const STAGES = [
  { id: "01", label: "Speech", value: "the red bus is late" },
  { id: "02", label: "Symbols", value: "the · red · bus · is · late" },
  { id: "03", label: "IDs", value: "14  881  203  9  4412" },
  { id: "04", label: "Geometry", value: "five points in a city of meaning" },
];

export function TokenPipeline() {
  return (
    <AeroFrame
      drawing="06-B"
      title="From a spoken world to a geometric one"
      caption="Tokenization is not an NLP trick. It is the tollbooth between human symbols and machine geometry."
    >
      <ol className="space-y-0">
        {STAGES.map((s, i) => (
          <li key={s.id}>
            <div className="rounded-md border border-primary/30 bg-bg px-3 py-3">
              <div className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
                {s.id} · {s.label}
              </div>
              <div className="mt-1 font-mono text-sm text-fg">{s.value}</div>
            </div>
            {i < STAGES.length - 1 ? (
              <div className="flex justify-center py-1" aria-hidden="true">
                <div className="h-4 w-px bg-primary/40" />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </AeroFrame>
  );
}
