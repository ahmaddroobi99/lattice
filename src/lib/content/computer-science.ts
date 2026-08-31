import type { Chapter } from "./types";

export const computerScience: Chapter = {
  slug: "computer-science",
  number: "01",
  title: "How is information stored?",
  subtitle: "Arrays, records, addresses — the furniture of a mind that cannot forget where it put things.",
  question: "If a thought must live in a box, what kind of neighborhood should the boxes form?",
  everyday:
    "A row of mailboxes, a contact card, a train of carriages. Computers are obsessive interior designers of such rooms.",
  readMinutes: 11,
  group: "manual",
  blocks: [
    {
      type: "lede",
      text: "A computer does not remember the way you remember a face. It remembers the way a post office remembers: by putting a thing in a numbered slot, and trusting the numbering.",
    },
    {
      type: "paragraph",
      text: "Before vectors, before matrices, before “tensors,” there is a humbler object: a sequence of cells. An array is not a math idea that happens to be useful. It is a decision about adjacency. This sits next to that. The neighborhood is the meaning.",
    },
    {
      type: "heading",
      level: 2,
      text: "A row of mailboxes",
    },
    {
      type: "ascii",
      drawing: "01-01",
      title: "Memory as addressed rooms",
      caption: "Index is a nickname. Address is a street number. Value is whoever currently lives there.",
      code: `
 index     0        1        2        3        4
         ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
 value   │ MILK │ │BREAD │ │LEMON │ │      │ │ HOME │
         └──────┘ └──────┘ └──────┘ └──────┘ └──────┘
 address  0x10     0x18     0x20     0x28     0x30

 Neighbors matter. "Next" is a geometric fact, not a metaphor.
`,
    },
    { type: "widget", id: "memory-tape" },
    {
      type: "callout",
      kind: "daily",
      title: "A shopping list is already an array",
      text: "Item 0 is not morally first. It is spatially first. If you lose the order, milk might still be there, but the walk through the shop becomes a different walk. Order is a kind of knowledge.",
    },
    {
      type: "heading",
      level: 2,
      text: "A record is a person-shaped box",
    },
    {
      type: "paragraph",
      text: "An array says: many of the same kind, side by side. A structure (a record, a row, a struct) says: several different kinds, bound into one citizen. Name, age, height. A contact in a phone. A row in a census. The machine is not meeting a person. It is meeting a bundle of fields we agreed would stand for a person.",
    },
    {
      type: "ascii",
      drawing: "01-02",
      title: "Array versus structure",
      code: `
ARRAY — a street of similar houses
  [ 12°C , 11°C , 9°C , 8°C ]

STRUCTURE — one house with labeled rooms
  Person {
    name : "Lina"
    city : "London"
    late : true
  }

TABLE — a city of such houses
  name   | city   | late
  Lina   | London | true
  Omar   | Lisbon | false
`,
    },
    {
      type: "heading",
      level: 2,
      text: "SQL is a philosophy of pointing",
    },
    {
      type: "paragraph",
      text: "A foreign key is a polite way of saying: this fact is not complete without that fact. Relationships are not a later ML topic. They are how clerks have always refused to copy the whole world into every drawer.",
    },
    {
      type: "sql",
      drawing: "01-03",
      title: "A day, filed without lying twice",
      caption: "We do not store “London” inside every raindrop. We store a pointer to the city, and let the city be itself once.",
      tables: [
        {
          name: "PLACE",
          columns: [
            { name: "id", type: "int", pk: true },
            { name: "name", type: "text" },
            { name: "lat", type: "real" },
            { name: "lon", type: "real" },
          ],
        },
        {
          name: "EVENT",
          columns: [
            { name: "id", type: "int", pk: true },
            { name: "place_id", type: "int", fk: true },
            { name: "kind", type: "text" },
            { name: "at", type: "timestamptz" },
          ],
        },
        {
          name: "MEASURE",
          columns: [
            { name: "id", type: "int", pk: true },
            { name: "event_id", type: "int", fk: true },
            { name: "name", type: "text" },
            { name: "value", type: "real" },
          ],
        },
      ],
      edges: [
        { from: "PLACE", to: "EVENT", label: "1 — *  hosts" },
        { from: "EVENT", to: "MEASURE", label: "1 — *  is quantified" },
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Pointers, graphs, and the fear of losing the thread",
    },
    {
      type: "ascii",
      drawing: "01-04",
      title: "When next is not next door",
      code: `
LINKED  (a scavenger hunt)
  [MILK] → [BREAD] → [LEMON] → ●

TREE  (a family)
        MEAL
       /    \\
    SHOP    COOK
    /  \\
 MILK  BREAD

GRAPH  (a city)
  HOME —— BUS —— WORK
    \\           /
     +—— CAFE ——+
`,
    },
    {
      type: "paragraph",
      text: "Why does this matter for intelligence? Because every later object — a vector, a matrix, a token sequence, an attention pattern — is one of these neighborhoods wearing a nicer coat. A tensor is not a mystical higher being. It is an array that learned how to have more than one kind of next.",
    },
    {
      type: "callout",
      kind: "philosophy",
      title: "Identity is an address plus a promise",
      text: "To store something is to promise you can find it again. Learning systems break that promise constantly: they store a blur, a typical, an average. That blur is sometimes wisdom and sometimes amnesia. The rest of the manual is about which.",
    },
  ],
};
