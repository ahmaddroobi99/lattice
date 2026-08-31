import type { Chapter } from "./types";

export const gpu: Chapter = {
  slug: "gpu",
  number: "08",
  title: "A thousand cooks, one recipe",
  subtitle: "GPUs, CUDA, Triton — when the same question must be asked of a million numbers.",
  question: "How is the computation physically performed, once the idea is cheap and the counting is not?",
  everyday:
    "A factory line versus a single craftsman. A choir on one note. A desk of working papers versus a warehouse of archives.",
  readMinutes: 11,
  group: "manual",
  blocks: [
    {
      type: "lede",
      text: "A CPU is a brilliant clerk. A GPU is a hall of clerks who have agreed, for a morning, to do the same kind of sum. Intelligence, at this scale, is an industrial accident of parallelism.",
    },
    {
      type: "paragraph",
      text: "Matrix multiplication is not interesting because it is hard to write. It is interesting because it is the same tiny alignment, repeated until a thought appears. Hardware is what you build when “repeated” becomes the whole cost of the civilization.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why a choir, not a soloist",
    },
    {
      type: "ascii",
      drawing: "08-01",
      title: "SIMT — one instruction, many throats",
      code: `
CPU                          GPU
one excellent cook           a thousand cooks, one recipe
deep bag of tricks           shallow bag, vast repetition
great at branching plots     great at the same plot, chorus-wide

if (rare) { special }        everyone chops onions
                             (if one must dice, the choir waits)
`,
    },
    {
      type: "callout",
      kind: "daily",
      title: "A kitchen at Saturday noon",
      text: "One chef making twelve different plates is a CPU. Twelve cooks making the same soup is a GPU. The soup is matrix multiply. Attention is soup with a slightly fancier garnish, still soup.",
    },
    {
      type: "heading",
      level: 2,
      text: "Memory is a geography of patience",
    },
    {
      type: "paragraph",
      text: "Registers are the papers on the desk. Shared memory is the counter the team can all reach. Global memory is the warehouse across town. Most “slow kernels” are not bad arithmetic. They are too many trips to the warehouse. Tiling — the tiled matmul you see in CUDA tracks — is a moral of locality: bring a block of the city to the counter, work it, then go back.",
    },
    {
      type: "ascii",
      drawing: "08-02",
      title: "The desk, the counter, the warehouse",
      code: `
SPEED  (near)                         (far)  SIZE
  registers   shared/L1    L2    HBM/global    disk
     desk       counter   floor    warehouse    another city

A kernel is a schedule of visits.
Bandwidth is how wide the road is.
Latency is how long a single errand takes.
`,
    },
    {
      type: "heading",
      level: 2,
      text: "CUDA is the floor plan. Triton is the dialect for blocks.",
    },
    {
      type: "paragraph",
      text: "CUDA lets you speak in threads, warps, blocks — the actual seating chart of the hall. Vector add is the hello-world of that seating: each thread takes one chair and one sum. Tiled matmul is the first adult sentence. Fused attention is the moment you stop writing three trips to the warehouse (score, softmax, mix) and keep the working heat in the desk until the thought is finished.",
    },
    {
      type: "ascii",
      drawing: "08-03",
      title: "Three kernels, one idea",
      code: `
vector add        one cook, one onion
tiled matmul      a team brings a crate, multiplies, returns
fused attention   do not put the cake down between icing and slicing

Triton: you describe the crate (the block),
        not every cook's left hand.
        The compiler seats the choir.
`,
    },
    {
      type: "callout",
      kind: "geometry",
      title: "The dot product, employed at industrial scale",
      text: "Chapter 02 asked how aligned two walks are. A GPU is a building whose only religion is answering that question for whole armies of walks, before lunch. When people say “attention is expensive,” they mean: the dinner table grew to a stadium, and everyone is still asking everyone else how aligned they are.",
    },
    {
      type: "paragraph",
      text: "You do not need a GPU in the room to understand this chapter. You need the picture: locality, chorus, fusion. The rest is spelling.",
    },
  ],
};
