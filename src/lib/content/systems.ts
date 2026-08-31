import type { Chapter } from "./types";

export const systems: Chapter = {
  slug: "systems",
  number: "09",
  title: "From a mind to a machine that serves",
  subtitle: "Inference, caches, elevators, and speaking with fewer words.",
  question: "How does a trained claim become a useful colleague at two in the morning?",
  everyday:
    "A library versus a librarian. Waiting for a full elevator. Remembering a conversation so you do not re-introduce yourself every sentence.",
  readMinutes: 10,
  group: "manual",
  blocks: [
    {
      type: "lede",
      text: "Training is the long education. Inference is the evening shift: the model must now answer, cheaply, repeatedly, without forgetting the person in front of it.",
    },
    {
      type: "paragraph",
      text: "A weights file is a fossil of learning. An inference system is a building around that fossil: a door, a queue, a memory of the conversation so far, a way to speak in a smaller voice when the room is crowded.",
    },
    {
      type: "heading",
      level: 2,
      text: "The KV cache is remembering the conversation",
    },
    {
      type: "ascii",
      drawing: "09-01",
      title: "Do not re-read the whole book to write the next line",
      code: `
without cache
  each new word: re-attend to the entire past   (rude, and expensive)

with KV cache
  the past has already advertised itself (keys, values)
  the new word only asks a question      (query)
  and listens

This is why long chats get heavy: the remembered past is a growing city.
`,
    },
    {
      type: "callout",
      kind: "daily",
      title: "A librarian, not a library",
      text: "A library stores every book. A librarian remembers which books you already mentioned, and does not start from the title page each time you ask a follow-up. The KV cache is that professional courtesy, implemented as tensors.",
    },
    {
      type: "heading",
      level: 2,
      text: "Batching is waiting for a fuller elevator",
    },
    {
      type: "paragraph",
      text: "GPUs hate running with one passenger. Batching is the social skill of waiting a few milliseconds so several questions can ride together. Too little waiting and the hall is empty. Too much and a human feels ignored. Inference engineering is etiquette under silicon constraints.",
    },
    {
      type: "ascii",
      drawing: "09-02",
      title: "Throughput versus latency",
      code: `
fill the elevator          empty elevator, instantly
(many tokens / second)     (this person is served now)

continuous batching:
  let people step in as floors open
  do not wait for the original group to finish the whole building
`,
    },
    {
      type: "heading",
      level: 2,
      text: "Quantization: speaking with fewer words, keeping the meaning",
    },
    {
      type: "paragraph",
      text: "A 16-bit weight is a careful sentence. An 8-bit or 4-bit weight is a postcard. The art is choosing which decimal places were vanity. Done well, the postcard still arrives. Done badly, the city of meaning collapses into a few loud neighborhoods and the model starts to slur.",
    },
    {
      type: "compare",
      left: {
        title: "Training afternoon",
        items: [
          "Accuracy is the god",
          "We can afford large types",
          "We may see the answer key",
          "Time is measured in epochs",
        ],
      },
      right: {
        title: "Inference night",
        items: [
          "Latency and cost are the gods",
          "We shrink what we can",
          "There is only the next token",
          "Time is measured in milliseconds and dollars",
        ],
      },
    },
    {
      type: "sql",
      drawing: "09-03",
      title: "A request, as an operations room would file it",
      tables: [
        {
          name: "REQUEST",
          columns: [
            { name: "id", type: "uuid", pk: true },
            { name: "user_note", type: "text" },
            { name: "arrived", type: "timestamptz" },
          ],
        },
        {
          name: "BATCH",
          columns: [
            { name: "id", type: "uuid", pk: true },
            { name: "gpu_id", type: "int" },
            { name: "started", type: "timestamptz" },
          ],
        },
        {
          name: "TOKEN_OUT",
          columns: [
            { name: "request_id", type: "uuid", fk: true },
            { name: "batch_id", type: "uuid", fk: true },
            { name: "index", type: "int" },
            { name: "text", type: "text" },
          ],
        },
      ],
      edges: [
        { from: "REQUEST", to: "TOKEN_OUT", label: "1 — *  is spoken as" },
        { from: "BATCH", to: "TOKEN_OUT", label: "1 — *  carries" },
      ],
    },
    {
      type: "paragraph",
      text: "Speculative decoding, paged attention, prefix caches — they are all variations on two courtesies: do not redo work the past already paid for, and do not make the choir sing for one passenger if a crowd is at the door.",
    },
  ],
};
