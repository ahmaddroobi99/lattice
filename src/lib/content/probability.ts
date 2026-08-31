import type { Chapter } from "./types";

export const probability: Chapter = {
  slug: "probability",
  number: "03",
  title: "The world is not a single story",
  subtitle: "Probability as betting, statistics as memory, Bayes as changing your mind in public.",
  question: "If you cannot know, what is the honest way to speak?",
  everyday:
    "A delayed train, a weather app, a medical leaflet, a coin that has been unfair for longer than you have been alive.",
  readMinutes: 10,
  group: "manual",
  blocks: [
    {
      type: "lede",
      text: "A model that always answers with a single number is pretending to be a prophet. A model that answers with a distribution is admitting to being a gambler with a notebook.",
    },
    {
      type: "paragraph",
      text: "Probability is not a branch of mathematics that happens to be useful for machine learning. It is the etiquette of speaking when the world still has more than one next page. Statistics is what happens when you have already seen some of those pages and wish to update your manners.",
    },
    {
      type: "heading",
      level: 2,
      text: "A bet is a sentence with a spine",
    },
    {
      type: "ascii",
      drawing: "03-01",
      title: "From weather to a number you could lose money on",
      code: `
"It might rain"           ←  mood
"It often rains here"     ←  memory
"I'd bet 70 in 100"       ←  probability
"I was wrong 3 times"     ←  statistics
"Given the clouds, 85"    ←  a posterior (Bayes)

Each line is more honest than the one above it,
or at least more willing to be scored.
`,
    },
    {
      type: "callout",
      kind: "daily",
      title: "The bus that is late",
      text: "You do not know the bus. You know a history of buses. The next one is not obliged to obey that history. Probability is how you wait without becoming a liar: you stand as if 70 of the next 100 buses will be late, and you let the 30 surprise you without rewriting the whole city.",
    },
    {
      type: "heading",
      level: 2,
      text: "A distribution is a crowd of futures",
    },
    {
      type: "ascii",
      drawing: "03-02",
      title: "Not a point — a crowd",
      code: `
  count
    |                 *
    |               *   *
    |             *       *
    |         *               *
    |     *                       *
    +-------------------------------- time late
         0     2     4     6     8 min

 The peak is what we lazily call "the answer."
 The width is how much the world still argues.
`,
    },
    {
      type: "paragraph",
      text: "Expected value is not what will happen. It is the long-run rent of a habit. Variance is how wild the nights are. A loss function later in this manual is just a way of charging rent to a model that keeps being surprised.",
    },
    {
      type: "heading",
      level: 2,
      text: "Bayes is changing your mind without burning the archive",
    },
    {
      type: "paragraph",
      text: "You start with a story (a prior). Evidence arrives (a likelihood). You write a new story (a posterior) that keeps both. This is not a formula to memorize. It is the opposite of dogma: you are allowed to have been incomplete, and you are not allowed to pretend the past did not happen.",
    },
    {
      type: "ascii",
      drawing: "03-03",
      title: "One update, drawn as a corridor",
      code: `
PRIOR                 LIKELIHOOD              POSTERIOR
"buses are     ×     "this one is       =    "today, wait
 usually on time"     unusually packed"        as if late"

The × is not multiplication for its own sake.
It is a meeting: old manners encounter new weather.
`,
    },
    {
      type: "sql",
      drawing: "03-04",
      title: "Belief, filed so it can be revised",
      tables: [
        {
          name: "HYPOTHESIS",
          columns: [
            { name: "id", type: "int", pk: true },
            { name: "claim", type: "text" },
            { name: "prior", type: "real" },
          ],
        },
        {
          name: "EVIDENCE",
          columns: [
            { name: "id", type: "int", pk: true },
            { name: "what", type: "text" },
            { name: "at", type: "timestamptz" },
          ],
        },
        {
          name: "UPDATE",
          columns: [
            { name: "hypothesis_id", type: "int", fk: true },
            { name: "evidence_id", type: "int", fk: true },
            { name: "posterior", type: "real" },
          ],
        },
      ],
      edges: [
        { from: "HYPOTHESIS", to: "UPDATE", label: "1 — *  is revised by" },
        { from: "EVIDENCE", to: "UPDATE", label: "1 — *  revises" },
      ],
    },
    {
      type: "callout",
      kind: "philosophy",
      title: "Statistics is memory with an admission of noise",
      text: "A mean is a crowd pretending to be a person. A confidence interval is that person admitting they are a crowd. Machine learning will try to hide the crowd inside a single predicted token. Your job, as a reader, is to keep asking where the crowd went.",
    },
    {
      type: "paragraph",
      text: "When a model says 0.9, it is making a bet. When it is trained, it is being fined for bad bets. That is the whole plot of the next chapter, wearing different clothes.",
    },
  ],
};
