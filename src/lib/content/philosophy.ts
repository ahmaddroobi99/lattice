import type { Chapter } from "./types";

export const philosophy: Chapter = {
  slug: "philosophy",
  number: "00",
  title: "What is information?",
  subtitle: "Before algorithms, there is a world, and a way of noticing it.",
  question: "What remains when you throw away the thing itself and keep only what changed you?",
  everyday:
    "A grocery list is not a kitchen. It is a compressed claim about hunger, time, and a shop that still exists.",
  readMinutes: 9,
  group: "manual",
  blocks: [
    {
      type: "lede",
      text: "A machine does not meet the world. It meets a residue of the world — a measurement, a symbol, a number standing in for something that was once wet, loud, or late.",
    },
    {
      type: "paragraph",
      text: "Most lessons begin in the middle: tokenize, clean, train. That order is honest about engineering and dishonest about understanding. Tokenization is a late move. Before it, someone decided that a stretch of reality was worth keeping, and that a particular kind of keeping was enough.",
    },
    {
      type: "heading",
      level: 2,
      text: "The spine of the whole manual",
    },
    {
      type: "ascii",
      drawing: "00-01",
      title: "From the world to a machine that seems to know",
      caption: "Each arrow is a lossy translation. Intelligence is built on those losses.",
      code: `
REAL WORLD
     |
     |  something happens
     v
OBSERVATION
     |
     |  a mind (or a sensor) notices
     v
MEASUREMENT
     |
     |  noticing becomes a number, a word, a tick
     v
DATA
     |
     |  measurements are stored as neighbors
     v
ARRAYS / STRUCTURES
     |
     |  neighbors become directions
     v
VECTORS  →  MATRICES  →  RELATIONSHIPS
     |
     v
PROBABILITY
     |
     |  the world is not a single story
     v
MODELS
     |
     |  a compressed claim about what tends to happen
     v
LEARNING
     |
     |  the claim is embarrassed, then revised
     v
COMPUTATION  →  HARDWARE  →  AI SYSTEM
`,
    },
    {
      type: "paragraph",
      text: "Read that spine slowly. Every later chapter is one of those arrows, drawn larger. If you skip the early arrows, later ones feel like magic. Magic is just an unnamed translation.",
    },
    {
      type: "heading",
      level: 2,
      text: "Information is a difference that survived",
    },
    {
      type: "paragraph",
      text: "A photograph of rain is not rain. A weather app saying 12°C is not cold. A sentence about a late bus is not the bus. Information is what remains after a translation: the difference that still matters to someone who was not there.",
    },
    {
      type: "compare",
      left: {
        title: "The usual lesson",
        items: [
          "Collect a dataset",
          "Clean the data",
          "Tokenize the text",
          "Train a model",
          "Report a score",
        ],
      },
      right: {
        title: "The field-manual lesson",
        items: [
          "What was the world doing?",
          "What did we choose to notice?",
          "What did we throw away?",
          "What geometry did we force the remainder into?",
          "What would count as being less wrong?",
        ],
      },
    },
    {
      type: "callout",
      kind: "daily",
      title: "A grocery list",
      text: "Milk, bread, lemons. The list does not smell. It does not know the shop is closed. It is a tiny model of tomorrow's kitchen. When the model meets the shop, it is tested. That test is the ancestor of loss functions.",
    },
    {
      type: "heading",
      level: 2,
      text: "Maps, territories, and honest compression",
    },
    {
      type: "paragraph",
      text: "A map that was as large as the city would be useless. Compression is not a bug. The bug is forgetting you compressed. Machine learning is the craft of making small maps of large territories, then walking them as if they were streets.",
    },
    {
      type: "ascii",
      drawing: "00-02",
      title: "Three dishonest maps",
      code: `
TERRITORY                 MAP                    VICE
---------                 ---                    ----
the whole city            a blank page           underfit
the whole city            the city itself        no compression
one street                "I know the city"      overfit
`,
    },
    {
      type: "sql",
      drawing: "00-03",
      title: "The world, as a clerk would file it",
      caption: "SQL is philosophy with keys. It asks: which things exist, and which things point at which.",
      tables: [
        {
          name: "WORLD",
          columns: [
            { name: "id", type: "uuid", pk: true },
            { name: "what_happened", type: "text" },
            { name: "when_ts", type: "timestamptz" },
          ],
        },
        {
          name: "OBSERVER",
          columns: [
            { name: "id", type: "uuid", pk: true },
            { name: "kind", type: "text" },
            { name: "bias", type: "text" },
          ],
        },
        {
          name: "MEASUREMENT",
          columns: [
            { name: "id", type: "uuid", pk: true },
            { name: "world_id", type: "uuid", fk: true },
            { name: "observer_id", type: "uuid", fk: true },
            { name: "value", type: "text" },
            { name: "unit", type: "text" },
          ],
        },
      ],
      edges: [
        { from: "WORLD", to: "MEASUREMENT", label: "1 — *  leaves traces" },
        { from: "OBSERVER", to: "MEASUREMENT", label: "1 — *  notices" },
      ],
    },
    {
      type: "quote",
      text: "The question is never “did the machine learn?” The question is “what did we permit it to see, and what did we call success?”",
    },
    {
      type: "paragraph",
      text: "The rest of this manual starts where a computer starts: not with intelligence, but with boxes that can hold a value, sit next to other boxes, and be pointed at. Arrays are not a beginner topic. They are the first honest geometry of memory.",
    },
  ],
};
