import type { Chapter } from "./types";

export const research: Chapter = {
  slug: "research",
  number: "11",
  title: "A paper is a claim with a diagram",
  subtitle: "How to read an architecture until the citation becomes a picture you could draw from memory.",
  question: "What would have to be true of the world for this diagram to be worth a decade?",
  everyday:
    "A recipe that changed how kitchens work. A map that made a new road obvious. A correction that let an old path go deeper.",
  readMinutes: 8,
  group: "manual",
  blocks: [
    {
      type: "lede",
      text: "A research paper is not a brand. It is a bet: that a particular way of drawing the arrows will make the world cheaper to predict, or a life cheaper to live.",
    },
    {
      type: "paragraph",
      text: "The public curriculum of modern ML is a short museum: VGG’s stacked seeing, ResNet’s skip, Word2Vec’s city of words, LSTM’s memory with a gate, the Transformer’s dinner table, BERT the reader, GPT the speaker, diffusion’s slow unblurring, LLaMA and Qwen as speakers grown patient. You do not need to clone a coding gym to inherit that museum. You need the claims, drawn until they are ordinary.",
    },
    {
      type: "ascii",
      drawing: "11-01",
      title: "A method for reading any paper in this atlas",
      code: `
1  WHAT WAS AWKWARD BEFORE?
      (the itch)

2  WHAT ARROW DID THEY ADD, REMOVE, OR BEND?
      (the invention is usually one move)

3  WHAT EVERYDAY PICTURE IS THIS?
      (if you cannot name one, you do not have it yet)

4  WHAT DID THEY HAVE TO THROW AWAY?
      (every invention is also a refusal)

5  WHAT WOULD FALSIFY IT TOMORROW?
      (a paper that cannot die cannot teach)
`,
    },
    {
      type: "heading",
      level: 2,
      text: "A lineage, not a leaderboard",
    },
    {
      type: "chain",
      drawing: "11-02",
      title: "How the pictures begat each other",
      caption: "Each node is a chapter in the Papers room. The arrows are intellectual debts, not rankings.",
      items: [
        { id: "vgg", label: "VGG", note: "Depth as a stack of small seeing.", href: "/papers/vgg" },
        { id: "resnet", label: "ResNet", note: "Keep the original; learn the correction.", href: "/papers/resnet" },
        { id: "w2v", label: "Word2Vec", note: "Meaning as geometry of use.", href: "/papers/word2vec" },
        { id: "lstm", label: "LSTM", note: "Memory that may forget on purpose.", href: "/papers/lstm" },
        { id: "tr", label: "Transformer", note: "Listening, parallel, without a chain.", href: "/papers/transformer" },
        { id: "bert", label: "BERT", note: "A reader who fills holes.", href: "/papers/bert" },
        { id: "gpt", label: "GPT-2", note: "A speaker who will not peek.", href: "/papers/gpt2" },
        { id: "llama", label: "LLaMA / Qwen", note: "The speaker, scaled with manners.", href: "/papers/llama" },
        { id: "diff", label: "Diffusion", note: "Creation as careful unblurring.", href: "/papers/diffusion" },
        { id: "go", label: "AlphaGo", note: "Imagination as search plus habit.", href: "/papers/alphago" },
      ],
    },
    {
      type: "callout",
      kind: "note",
      title: "About the source of the map",
      text: "This atlas follows a publicly visible ML curriculum — foundations, PyTorch, NLP, RL, CUDA/Triton, inference, agents, and a short list of landmark papers — but it does not reproduce anyone’s lesson text, solutions, or interface. It is an original companion: philosophy first, diagrams second, drills elsewhere.",
    },
    {
      type: "compare",
      left: {
        title: "A coding gym",
        items: [
          "Implement the layer",
          "Pass the tests",
          "See a loss curve",
          "Move to the next problem",
        ],
      },
      right: {
        title: "This field manual",
        items: [
          "Name the awkwardness",
          "Draw the arrow",
          "Find the daily picture",
          "Only then write a kernel, if you must",
        ],
      },
    },
    {
      type: "quote",
      text: "Reproduce, then understand, then vary. A paper you cannot vary is a paper you have only visited.",
    },
  ],
};
