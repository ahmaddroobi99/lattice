import { useState } from "react";
import { AeroFrame } from "@/components/diagrams/AeroFrame";

export function Projection() {
  const [x, setX] = useState(188);
  const [y, setY] = useState(48);
  const x1 = 40;
  const y1 = 150;
  const x2 = 260;
  const y2 = 90;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const t = Math.max(0, Math.min(1, ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy)));
  const px = x1 + t * dx;
  const py = y1 + t * dy;

  return (
    <AeroFrame
      drawing="02-B"
      title="Projection — the closest honest summary"
      caption="Reality rarely sits on the line we can draw. Projection is the nearest point we are allowed to claim."
    >
      <div className="grid gap-4">
        <svg viewBox="0 0 300 190" className="w-full text-primary" aria-hidden="true">
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" />
          <line
            x1={x}
            y1={y}
            x2={px}
            y2={py}
            stroke="currentColor"
            strokeDasharray="4 4"
            strokeOpacity="0.7"
          />
          <circle cx={px} cy={py} r="4" fill="currentColor" />
          <circle
            cx={x}
            cy={y}
            r="7"
            fill="var(--color-bg)"
            stroke="currentColor"
            strokeWidth="2"
          />
          <text x="46" y="172" className="fill-muted font-mono text-[10px]">
            MODEL SPACE
          </text>
          <text x={x + 10} y={y - 8} className="fill-fg font-mono text-[10px]">
            reality
          </text>
          <text x={px + 8} y={py + 16} className="fill-fg font-mono text-[10px]">
            closest claim
          </text>
        </svg>
        <div className="grid grid-cols-2 gap-3">
          <label className="font-mono text-[0.6875rem] tracking-[0.14em] text-muted uppercase">
            Across
            <input
              type="range"
              min={50}
              max={250}
              value={x}
              onChange={(e) => setX(Number(e.target.value))}
              className="mt-2 h-11 w-full accent-primary"
            />
          </label>
          <label className="font-mono text-[0.6875rem] tracking-[0.14em] text-muted uppercase">
            Height
            <input
              type="range"
              min={24}
              max={160}
              value={y}
              onChange={(e) => setY(Number(e.target.value))}
              className="mt-2 h-11 w-full accent-primary"
            />
          </label>
        </div>
      </div>
    </AeroFrame>
  );
}
