import type { Chapter } from "./types";

export const language: Chapter = {
  slug: "language",
  number: "06",
  title: "Language as shared compression",
  subtitle: "Tokens, cities of meaning, and the dinner table called attention.",
  question: "How does a continuation become a kind of understanding?",
  everyday:
    "Finishing someone’s sentence. Looking up from a conversation when your name is spoken. A city where similar shops open on the same street.",
  readMinutes: 12,
  group: "manual",
  blocks: [
    {
      type: "lede",
      text: "Humans communicate with symbols. Machines cannot sip a symbol. They can only move numbers. Tokenization is the customs office between those two countries.",
    },
    {
      type: "paragraph",
      text: "Do not begin with “NLP preprocessing.” Begin with speech in a kitchen. A sentence is already a compression of a scene. A tokenizer compresses further: it breaks the compression into bite-sized passports, each with an ID, each about to be seated in a geometric city.",
    },
    { type: "widget", id: "token-pipeline" },
    {
      type: "heading",
      level: 2,
      text: "An embedding is a street address in a city of meaning",
    },
    {
      type: "paragraph",
      text: "Once a token has an ID, it still has no neighbors. An embedding places it on a map: “late” near “delayed,” “bus” near “train,” “lemon” surprisingly near “yellow” and “sour.” Word2Vec discovered that walking in this city obeys analogies: king minus man plus woman lands near queen — not because the machine knows monarchy, but because the geometry of use left a footprint that looks like monarchy.",
    },
    {
      type: "ascii",
      drawing: "06-01",
      title: "A tiny neighborhood of use",
      code: `
            late
             |
          delayed
             |
  bus ---- train ---- platform
             |
           ticket

Distance here is not miles.
It is "how similarly are these used in the lives of sentences?"
`,
    },
    {
      type: "heading",
      level: 2,
      text: "Attention is a budget of listening",
    },
    {
      type: "paragraph",
      text: "At a dinner table you cannot listen to everyone equally, not if you want to answer. You spend a budget. Sometimes you spend it on the person who just said your name. Sometimes you spend it on the joke that is still landing. Attention, in a transformer, is that budget written as numbers: for this token, how much of my listening belongs to each of the others?",
    },
    { type: "widget", id: "attention-dinner" },
    {
      type: "ascii",
      drawing: "06-02",
      title: "Query, key, value — without the costume",
      code: `
QUERY   what I am looking for     ("who can help me finish this?")
KEY     how I advertise myself    ("I am a time, I am a place")
VALUE   what I would actually say if chosen

score   =  alignment(query, key)     ←  our old friend, the dot product
mix     =  spend the listening budget on those values

Self-attention: everyone at the table both asks and answers.
`,
    },
    {
      type: "callout",
      kind: "philosophy",
      title: "Next token is not a parlour trick",
      text: "Predicting the next word sounds small, like a game. It is not small. A being that can continue a story honestly has to carry a world: objects that persist, people who want things, a past that constrains a future. Continuation is a compressed exam in being situated.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why BERT looks both ways, and GPT looks ahead",
    },
    {
      type: "compare",
      left: {
        title: "BERT — a reader",
        items: [
          "Sees the whole sentence at once",
          "Fills holes (masked words)",
          "Good at “what is this passage about?”",
          "A librarian of context",
        ],
      },
      right: {
        title: "GPT — a speaker",
        items: [
          "Sees only what has been said so far",
          "Extends the line",
          "Good at “what happens next?”",
          "A companion who refuses to peek at the last page",
        ],
      },
    },
    {
      type: "paragraph",
      text: "LLaMA, Qwen, and their cousins are still this speaker, grown up: more careful tokenizers, more patient attention, more honest ways of using depth (the residual idea, again). The research chapter will draw them as claims, not as brands.",
    },
  ],
};
