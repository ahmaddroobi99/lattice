import type { Chapter } from "./types";

export const deepLearning: Chapter = {
  slug: "deep-learning",
  number: "05",
  title: "Representations that compose",
  subtitle: "Layers as successive translations. A neuron as a vote. Depth as the right to have second thoughts.",
  question: "How can a representation be made of other representations without becoming mush?",
  everyday:
    "Looking at a photograph: first the edges of a window, then a building, then a city you could walk. Meaning arrives in coats.",
  readMinutes: 11,
  group: "manual",
  blocks: [
    {
      type: "lede",
      text: "A single linear story can only tilt the world. Depth is permission to tilt, then bend, then tilt again — to have a second thought about the first thought.",
    },
    {
      type: "paragraph",
      text: "A neuron is a small jury: it takes a weighted poll of its inputs, then decides whether the poll is interesting enough to pass on. The weights are tastes. The bias is a mood. The nonlinearity is the moment the jury stops being a polite average and becomes a claim.",
    },
    {
      type: "ascii",
      drawing: "05-01",
      title: "One vote, then a parliament",
      code: `
  x1 --w1--\\
  x2 --w2---+-->  sum  -->  bend  -->  y
  x3 --w3--/                 |
                           "not merely more;
                            different"

Stack these. The first parliament talks about edges.
The next talks about parts. The next talks about things
that could have names. Composition is the whole trick.
`,
    },
    {
      type: "heading",
      level: 2,
      text: "A photograph, read as a city of layers",
    },
    {
      type: "ascii",
      drawing: "05-02",
      title: "Vision as successive honesty",
      caption: "Convolution is a local habit: look at the neighborhood, not the whole empire, at least not yet.",
      code: `
PIXELS        EDGES         PARTS          OBJECTS         SCENE
. . # .      a window      a facade       a bus stop      a late afternoon
. # . #      a lip of      a wheel        a person        in a city that
# . . .      shadow        a letter       waiting         still has weather
`,
    },
    {
      type: "callout",
      kind: "daily",
      title: "How you read a face",
      text: "You do not store a million pixels of your friend. You store a way of reconstructing them: the slope of a joke, the weather of the eyes. A deep network is trying to learn a similar courtesy — not the photograph, the person-shaped remainder.",
    },
    {
      type: "heading",
      level: 2,
      text: "Backpropagation is blame with receipts",
    },
    {
      type: "paragraph",
      text: "If the last layer is wrong, someone upstream contributed. Backprop is a clerk walking backward through the building, leaving on each desk a note: “your vote, in this case, made us more wrong by this much.” Gradient is that note. Training is answering it, a million mornings in a row.",
    },
    {
      type: "ascii",
      drawing: "05-03",
      title: "Blame flowing home",
      code: `
forward:   data  →  layer → layer → layer → guess
                                          |
                                         sting
                                          |
backward:  data  ←  layer ← layer ← layer ← note
`,
    },
    {
      type: "heading",
      level: 2,
      text: "ResNet: keep the original while adding a correction",
    },
    {
      type: "paragraph",
      text: "Very deep stacks used to forget the beginning. A residual connection is a philosophical invention disguised as an arrow: “you may revise this representation, but you may not throw away the thing you were revising.” The new layer learns a difference, not a replacement. That is how a deep thing stays in conversation with its earlier self.",
    },
    {
      type: "ascii",
      drawing: "05-04",
      title: "The skip that kept depth honest",
      code: `
x ----+---- F(x) ----+---- x + F(x)
      |               ^
      +---------------+

F is the commentary.
x is the text.
The sum is a book that still contains the earlier chapter.
`,
    },
    {
      type: "callout",
      kind: "geometry",
      title: "PyTorch is a ledger of these arrows",
      text: "Autograd is not magic. It is bookkeeping: every addition, multiply, and bend records how a sting should split if it ever arrives. Micrograd, in miniature, is the same ledger written by hand. If you can keep that picture, frameworks become dialects, not religions.",
    },
  ],
};
