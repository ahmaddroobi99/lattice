import { useState } from "react";
import { AeroFrame } from "@/components/diagrams/AeroFrame";

const CELLS = [
  { addr: "0x10", value: "LONDON" },
  { addr: "0x18", value: "RAIN" },
  { addr: "0x20", value: "12°C" },
  { addr: "0x28", value: "BUS" },
  { addr: "0x30", value: "07:42" },
  { addr: "0x38", value: "LATE" },
  { addr: "0x40", value: "—" },
  { addr: "0x48", value: "HOME" },
];

export function MemoryTape() {
  const [i, setI] = useState(1);
  const cell = CELLS[i];

  return (
    <AeroFrame
      drawing="01-A"
      title="An array is a row of addressed boxes"
      caption="Index is a name we invent. Address is a place in the machine. Value is what we stored there."
    >
      <div className="flex gap-1 overflow-x-auto pb-2">
        {CELLS.map((c, idx) => (
          <button
            key={c.addr}
            type="button"
            onClick={() => setI(idx)}
            className={`min-w-[4.6rem] rounded-md border px-2 py-3 text-left transition-colors duration-150 ${
              idx === i
                ? "border-primary bg-primary text-primary-fg"
                : "border-border bg-bg text-fg hover:bg-bg-elevated"
            }`}
          >
            <div className="font-mono text-[0.625rem] tracking-wider opacity-70">[{idx}]</div>
            <div className="mt-1 font-mono text-[0.6875rem]">{c.value}</div>
          </button>
        ))}
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-[0.75rem] sm:grid-cols-4">
        <div>
          <dt className="text-muted">Index</dt>
          <dd className="text-fg">{i}</dd>
        </div>
        <div>
          <dt className="text-muted">Address</dt>
          <dd className="text-fg">{cell.addr}</dd>
        </div>
        <div>
          <dt className="text-muted">Value</dt>
          <dd className="text-fg">{cell.value}</dd>
        </div>
        <div>
          <dt className="text-muted">Neighbors</dt>
          <dd className="text-fg">
            {i > 0 ? CELLS[i - 1].value : "—"} / {i < CELLS.length - 1 ? CELLS[i + 1].value : "—"}
          </dd>
        </div>
      </dl>
    </AeroFrame>
  );
}
