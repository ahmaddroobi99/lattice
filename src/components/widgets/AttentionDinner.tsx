import { useState } from "react";
import { AeroFrame } from "@/components/diagrams/AeroFrame";

const PEOPLE = ["Maya", "Omar", "Lina", "Theo"] as const;
const WEIGHTS: Record<(typeof PEOPLE)[number], number[]> = {
  Maya: [0.15, 0.55, 0.2, 0.1],
  Omar: [0.4, 0.1, 0.35, 0.15],
  Lina: [0.1, 0.15, 0.2, 0.55],
  Theo: [0.25, 0.25, 0.25, 0.25],
};

export function AttentionDinner() {
  const [who, setWho] = useState<(typeof PEOPLE)[number]>("Maya");
  const w = WEIGHTS[who];

  return (
    <AeroFrame
      drawing="06-A"
      title="Attention as a dinner table"
      caption="Each person has a limited budget of listening. Attention is how that budget is spent, right now."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid grid-cols-2 gap-2">
          {PEOPLE.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setWho(p)}
              className={`h-16 rounded-md border font-display text-base transition-colors duration-150 ${
                who === p
                  ? "border-primary bg-primary text-primary-fg"
                  : "border-border bg-bg hover:bg-bg-elevated"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <ul className="space-y-3">
          {PEOPLE.map((p, i) => (
            <li key={p}>
              <div className="mb-1 flex justify-between font-mono text-[0.6875rem] text-muted">
                <span>
                  {who} → {p}
                </span>
                <span className="tabular-nums">{Math.round(w[i] * 100)}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-border">
                <div
                  className="h-full bg-primary transition-[width] duration-200 ease-out"
                  style={{ width: `${w[i] * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AeroFrame>
  );
}
