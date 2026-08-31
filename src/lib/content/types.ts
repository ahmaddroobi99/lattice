export type CalloutKind = "daily" | "philosophy" | "geometry" | "note";

export type SqlColumn = {
  name: string;
  type: string;
  pk?: boolean;
  fk?: boolean;
};

export type SqlTable = {
  name: string;
  columns: SqlColumn[];
};

export type SqlEdge = {
  from: string;
  to: string;
  label: string;
};

export type FlowItem = {
  id: string;
  label: string;
  href?: string;
  note?: string;
};

export type Block =
  | { type: "lede"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "ascii"; drawing: string; title: string; code: string; caption?: string }
  | {
      type: "sql";
      drawing: string;
      title: string;
      tables: SqlTable[];
      edges: SqlEdge[];
      caption?: string;
    }
  | { type: "callout"; kind: CalloutKind; title: string; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | {
      type: "compare";
      left: { title: string; items: string[] };
      right: { title: string; items: string[] };
    }
  | { type: "widget"; id: WidgetId }
  | { type: "chain"; drawing: string; title: string; items: FlowItem[]; caption?: string };

export type WidgetId =
  | "dot-product"
  | "projection"
  | "memory-tape"
  | "attention-dinner"
  | "token-pipeline"
  | "gradient-fog";

export type Chapter = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  question: string;
  everyday: string;
  readMinutes: number;
  group: "manual" | "papers";
  blocks: Block[];
};

export type Paper = {
  slug: string;
  year: string;
  title: string;
  short: string;
  question: string;
  everyday: string;
  readMinutes: number;
  blocks: Block[];
};
