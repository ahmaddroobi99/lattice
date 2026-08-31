import { useState } from "react";
import { AeroFrame } from "@/components/diagrams/AeroFrame";

export function GradientFog() {
  const [step, setStep] = useState(0);
  const xs = [40, 78, 112, 142, 168, 190, 208, 222];
  const ys = [36, 58, 82, 104, 122, 136, 146, 154];
  const i = Math.min(step, xs.length - 1);

  return (
    <AeroFrame
      drawing="04-A"
      title="Walking downhill in fog"
      caption="You cannot see the whole valley. You can only feel the slope under your feet. That local slope is the gradient."
    >
      <svg viewBox="0 0 280 190" className="w-full text-primary" aria-hidden="true">
        <path
          d="M10,30 C80,20 70,170 270,170"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx={xs[i]} cy={ys[i]} r="6" fill="var(--color-bg)" stroke="currentColor" strokeWidth="2" />
        {i < xs.length - 1 ? (
          <line
            x1={xs[i]}
            y1={ys[i]}
            x2={xs[i + 1]}
            y2={ys[i + 1]}
            stroke="currentColor"
            markerEnd="url(#garrow)"
          />
        ) : null}
        <text x="16" y="24" className="fill-muted font-mono text-[10px]">
          more wrong
        </text>
        <text x="208" y="184" className="fill-muted font-mono text-[10px]">
          less wrong
        </text>
        <defs>
          <marker id="garrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="none" stroke="currentColor" />
          </marker>
        </defs>
      </svg>
      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="h-11 rounded-md border border-border bg-bg px-4 font-mono text-xs hover:bg-bg-elevated"
        >
          Step back
        </button>
        <button
          type="button"
          onClick={() => setStep((s) => Math.min(xs.length - 1, s + 1))}
          className="h-11 rounded-md bg-primary px-4 font-mono text-xs text-primary-fg hover:opacity-90"
        >
          Step downhill
        </button>
        <span className="font-mono text-xs text-muted tabular-nums">step {i}</span>
      </div>
    </AeroFrame>
  );
}
