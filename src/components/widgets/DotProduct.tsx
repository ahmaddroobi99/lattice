import { useMemo, useState } from "react";
import { AeroFrame } from "@/components/diagrams/AeroFrame";

export function DotProduct() {
  const [deg, setDeg] = useState(32);
  const rad = (deg * Math.PI) / 180;
  const cos = Math.cos(rad);
  const { ax, ay, bx, by } = useMemo(() => {
    const len = 92;
    return {
      ax: 140 + len,
      ay: 110,
      bx: 140 + Math.cos(rad) * len,
      by: 110 - Math.sin(rad) * len,
    };
  }, [rad]);

  const story =
    deg < 18
      ? "Two walks on the same street. Almost the same direction."
      : deg < 70
        ? "Two walks that share a neighborhood. Partly aligned."
        : deg < 110
          ? "Two walks that cross. Little in common, not opposed."
          : deg < 160
            ? "Two walks pulling apart. Shared motion is shrinking."
            : "Two walks in opposite directions. Alignment has gone negative.";

  return (
    <AeroFrame
      drawing="02-A"
      title="Dot product as alignment"
      caption="A number that answers: how much do these two arrows agree?"
    >
      <div className="grid gap-5 sm:grid-cols-[1fr_11rem]">
        <svg viewBox="0 0 280 200" className="w-full text-primary" aria-hidden="true">
          <line x1="20" y1="110" x2="260" y2="110" stroke="currentColor" strokeOpacity="0.2" />
          <line x1="140" y1="20" x2="140" y2="190" stroke="currentColor" strokeOpacity="0.2" />
          <line x1="140" y1="110" x2={ax} y2={ay} stroke="currentColor" strokeWidth="2.2" markerEnd="url(#arrow)" />
          <line x1="140" y1="110" x2={bx} y2={by} stroke="currentColor" strokeWidth="2.2" markerEnd="url(#arrow)" />
          <circle cx="140" cy="110" r="3.5" fill="currentColor" />
          <text x={ax + 6} y={ay + 4} className="fill-fg font-mono text-[11px]">
            a
          </text>
          <text x={bx + 6} y={by - 4} className="fill-fg font-mono text-[11px]">
            b
          </text>
          <text x="148" y="104" className="fill-muted font-mono text-[10px]">
            θ {deg}°
          </text>
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6" fill="none" stroke="currentColor" />
            </marker>
          </defs>
        </svg>
        <div className="flex flex-col justify-center gap-3">
          <label className="font-mono text-[0.6875rem] tracking-[0.14em] text-muted uppercase">
            Angle
            <input
              type="range"
              min={0}
              max={180}
              value={deg}
              onChange={(e) => setDeg(Number(e.target.value))}
              className="mt-2 h-11 w-full accent-primary"
            />
          </label>
          <p className="font-mono text-sm tabular-nums text-fg">cos θ = {cos.toFixed(2)}</p>
          <p className="text-sm text-muted">{story}</p>
        </div>
      </div>
    </AeroFrame>
  );
}
