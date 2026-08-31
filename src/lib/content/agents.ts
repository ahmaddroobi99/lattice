import type { Chapter } from "./types";

export const agents: Chapter = {
  slug: "agents",
  number: "10",
  title: "Hands, notebooks, and loops of thought",
  subtitle: "RAG, tools, and ReAct — a mind that is allowed to look things up and then act.",
  question: "What is a thought worth, if it cannot reach for a tool or a page?",
  everyday:
    "A person with a notebook and a calculator. Asking a colleague before answering. Looking at a map, then walking, then looking again.",
  readMinutes: 9,
  group: "manual",
  blocks: [
    {
      type: "lede",
      text: "A language model alone is a gifted talker locked in a room. An agent is that talker given a door: a notebook, a database, a pair of hands, and a reason to check whether the walk worked.",
    },
    {
      type: "paragraph",
      text: "Retrieval-augmented generation is not a product category. It is an old human move: before you speak about a fact that might have changed, you look it up. The vector database is a city of embeddings from chapter 06. The query is a walk toward the relevant streets. The retrieved passages are guests you invite to the dinner table of attention.",
    },
    {
      type: "ascii",
      drawing: "10-01",
      title: "Look, then speak",
      code: `
QUESTION
    |
    v
embed it  →  walk the city of documents  →  bring back a few pages
    |
    v
sit those pages next to the question
    |
    v
speak, now that you are less alone
`,
    },
    {
      type: "heading",
      level: 2,
      text: "Tools are hands",
    },
    {
      type: "paragraph",
      text: "A calculator, a search box, a calendar, a shell. Tools extend a model the way hands extend a mind. The philosophical risk is obvious and old: a hand can break what a thought only imagined. Permissions, sandboxes, and human confirmation are not bureaucracy. They are the ethics of giving language a body.",
    },
    {
      type: "ascii",
      drawing: "10-02",
      title: "Think, act, observe",
      caption: "ReAct is a loop with manners: do not pretend the world agreed until you looked.",
      code: `
THOUGHT  "I should check the timetable"
   |
ACTION   calendar.search("last train")
   |
OBSERVE  "00:32, platform 4"
   |
THOUGHT  "then I can say something true"
   |
SPEAK    "The last train is at 00:32."
`,
    },
    {
      type: "sql",
      drawing: "10-03",
      title: "An agent’s evening, filed",
      tables: [
        {
          name: "GOAL",
          columns: [
            { name: "id", type: "uuid", pk: true },
            { name: "ask", type: "text" },
          ],
        },
        {
          name: "TRACE",
          columns: [
            { name: "id", type: "uuid", pk: true },
            { name: "goal_id", type: "uuid", fk: true },
            { name: "kind", type: "text" },
            { name: "payload", type: "text" },
          ],
        },
        {
          name: "TOOL",
          columns: [
            { name: "name", type: "text", pk: true },
            { name: "can_hurt", type: "bool" },
          ],
        },
      ],
      edges: [
        { from: "GOAL", to: "TRACE", label: "1 — *  is attempted as" },
        { from: "TOOL", to: "TRACE", label: "1 — *  is invoked in" },
      ],
    },
    {
      type: "callout",
      kind: "philosophy",
      title: "Reasoning is not a hidden chain. It is a visible loop.",
      text: "We like to imagine a private inner monologue. Agents make the monologue inspectable: a trace. That is their gift and their danger. You can debug a trace. You can also be fooled by a trace that sounds like thought while only being a costume of thought. Demand the observation step. Demand the world.",
    },
    {
      type: "paragraph",
      text: "Multi-agent pictures — a researcher, a critic, a pair of hands — are just specialized loops sharing a table. The hard part is not the number of hats. The hard part is still chapter 00: what did we permit them to see, and what did we call success?",
    },
  ],
};
