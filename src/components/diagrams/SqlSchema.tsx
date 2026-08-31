import { AeroFrame } from "@/components/diagrams/AeroFrame";
import type { SqlEdge, SqlTable } from "@/lib/content/types";

type SqlSchemaProps = {
  drawing: string;
  title: string;
  tables: SqlTable[];
  edges: SqlEdge[];
  caption?: string;
};

export function SqlSchema({ drawing, title, tables, edges, caption }: SqlSchemaProps) {
  return (
    <AeroFrame drawing={drawing} title={title} caption={caption}>
      <div className="flex flex-wrap gap-4">
        {tables.map((table) => (
          <div
            key={table.name}
            className="min-w-[11.5rem] flex-1 overflow-hidden rounded-md border border-primary/25 bg-bg"
          >
            <div className="bg-primary px-3 py-1.5 font-mono text-[0.6875rem] tracking-[0.14em] text-primary-fg uppercase">
              {table.name}
            </div>
            <ul>
              {table.columns.map((col) => (
                <li
                  key={col.name}
                  className="flex items-baseline justify-between gap-3 border-t border-border px-3 py-1.5 font-mono text-[0.6875rem]"
                >
                  <span className="text-fg">
                    {col.pk ? (
                      <span className="mr-1.5 text-primary">PK</span>
                    ) : col.fk ? (
                      <span className="mr-1.5 text-forest">FK</span>
                    ) : null}
                    {col.name}
                  </span>
                  <span className="text-subtle">{col.type}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {edges.length > 0 ? (
        <ul className="mt-4 space-y-1 font-mono text-[0.6875rem] text-primary">
          {edges.map((edge) => (
            <li key={`${edge.from}-${edge.to}-${edge.label}`}>
              {edge.from}
              <span className="mx-2 text-muted">—— {edge.label} ——</span>
              {edge.to}
            </li>
          ))}
        </ul>
      ) : null}
    </AeroFrame>
  );
}
