import type { Paper } from "./types";

export const papers: Paper[] = [
  {
    slug: "vgg",
    year: "2014",
    title: "VGG",
    short: "Depth as a stack of small seeing.",
    question: "What if seeing better is mostly a matter of looking again, with smaller eyes?",
    everyday: "A brick wall: one small brick, repeated, becomes a cathedral of edges.",
    readMinutes: 5,
    blocks: [
      {
        type: "lede",
        text: "VGG’s claim is almost austere: do not invent a clever eye. Invent a small eye, and stack it until the stack is a way of reading a photograph as a sentence of parts.",
      },
      {
        type: "ascii",
        drawing: "P-VGG",
        title: "Small filters, long hallway",
        code: `
photo → [3×3] → [3×3] → pool → [3×3] → [3×3] → pool → … → names

The 3×3 is a modest window.
Depth is how many times you are allowed to change your mind
about what the window meant.
`,
      },
      {
        type: "callout",
        kind: "philosophy",
        title: "Refusal",
        text: "VGG refused the fashion of one huge filter that tries to be a concept on first contact. Concepts, it says, are composed. That refusal made later residual and transformer stacks thinkable: depth as a moral, not a stunt.",
      },
    ],
  },
  {
    slug: "resnet",
    year: "2015",
    title: "ResNet",
    short: "Keep the original; learn the correction.",
    question: "How do you go deeper without forgetting who you were at the door?",
    everyday: "Editing an essay by adding a note in the margin, rather than rewriting the page until the first sentence vanishes.",
    readMinutes: 5,
    blocks: [
      {
        type: "lede",
        text: "Very deep networks were drowning in their own revisions. ResNet’s arrow is a skip: the new layer must justify itself as a difference, not as a replacement.",
      },
      {
        type: "ascii",
        drawing: "P-RES",
        title: "Identity, plus a commentary",
        code: `
x ----+---- F(x) ---- Σ ---- x + F(x)
      |                ^
      +----------------+

If F learns "nothing needed," the page survives.
That is a rare kindness in a stack of editors.
`,
      },
      {
        type: "paragraph",
        text: "The everyday picture is a conservator in a museum: clean the painting, do not paint a new one on top and call it care. Residual learning is conservation as architecture. Once you see it, you see it in transformers, in U-Nets, in every modern stack that wants depth without amnesia.",
      },
    ],
  },
  {
    slug: "word2vec",
    year: "2013",
    title: "Word2Vec",
    short: "Meaning as geometry of use.",
    question: "If you only watched which words keep which company, what map would you owe the language?",
    everyday: "Shops that thrive on the same street: baker beside café, not beside a shipyard — unless the city is stranger than you thought.",
    readMinutes: 5,
    blocks: [
      {
        type: "lede",
        text: "Word2Vec does not know what a queen is. It knows that “queen” is used the way “king” is used, after you subtract a man and add a woman — because use leaves geometry.",
      },
      {
        type: "ascii",
        drawing: "P-W2V",
        title: "You shall know a word by the company it keeps",
        code: `
window of speech:     … the  late  red  bus  is …
                         |    |     |    |    |
                      neighbors vote on where "bus" should live

king — man + woman  ≈  queen
Paris — France + Italy  ≈  Rome

Analogy is a walk. Not a definition.
`,
      },
      {
        type: "callout",
        kind: "daily",
        title: "A city’s zoning laws",
        text: "Embeddings are zoning. Similar lives cluster. Later models keep this city and merely learn better transit (attention) through it.",
      },
    ],
  },
  {
    slug: "lstm",
    year: "1997",
    title: "LSTM",
    short: "Memory that may forget on purpose.",
    question: "How do you carry a sentence across time without drowning in it?",
    everyday: "A notebook with permission to skip a page, and permission to hold a name until the end of the story.",
    readMinutes: 5,
    blocks: [
      {
        type: "lede",
        text: "A plain recurrent net tries to remember everything and so remembers nothing well. LSTM adds gates: valves on a pipe of time. Forget, input, output — three permissions.",
      },
      {
        type: "ascii",
        drawing: "P-LSTM",
        title: "A cell with manners",
        code: `
forget gate   "this old fact may leave"
input gate    "this new fact may enter"
cell state    a conveyor belt of what is still true
output gate   "this is what the present is allowed to say"

RNNs read time as a chain.
The chain was the bottleneck the Transformer would later refuse.
`,
      },
      {
        type: "paragraph",
        text: "LSTM still matters as a picture of memory: not a warehouse, a discipline. Transformers moved the discipline into attention. The problem did not vanish. It changed buildings.",
      },
    ],
  },
  {
    slug: "transformer",
    year: "2017",
    title: "Attention Is All You Need",
    short: "Listening, parallel, without a chain.",
    question: "What if every word could ask every other word, in the same breath?",
    everyday: "A round table instead of a telephone game. No whispered chain. Everyone hears the question at once.",
    readMinutes: 6,
    blocks: [
      {
        type: "lede",
        text: "The Transformer’s itch: recurrence makes time a queue. The invention: let every position query every other position, in parallel, with a budget of listening called attention.",
      },
      {
        type: "ascii",
        drawing: "P-TR",
        title: "The dinner table, formalized",
        code: `
Q  what I seek
K  how I can be found
V  what I would contribute if found

Attention(Q,K,V) = spend( softmax(QKᵀ / √d) )  on  V

Multi-head: several dinners at once.
One table talks syntax. One talks reference. One talks mood.
`,
      },
      {
        type: "paragraph",
        text: "They threw away the obligatory chain of time, and had to add position back in as a guest (positional encodings). Every later LLM is this table, lengthened, stacked, cached, quantized — still this table.",
      },
      {
        type: "callout",
        kind: "geometry",
        title: "The oldest arrow returns",
        text: "QKᵀ is the dot product from chapter 02, asked of every pair. GPUs exist, commercially, to survive that sentence.",
      },
    ],
  },
  {
    slug: "bert",
    year: "2018",
    title: "BERT",
    short: "A reader who fills holes.",
    question: "What does a sentence mean if you are allowed to see both shores of a missing word?",
    everyday: "A crossword, not a prophecy. The blank is in the middle. Both neighbors get a vote.",
    readMinutes: 5,
    blocks: [
      {
        type: "lede",
        text: "BERT takes the Transformer’s table and seats a reader: bidirectional, trained to restore masked words and to judge whether two sentences belong to the same walk.",
      },
      {
        type: "ascii",
        drawing: "P-BERT",
        title: "Cloze as a theory of understanding",
        code: `
the red [MASK] is late      →      bus

If you can restore the hole, you had to carry a world:
vehicles, colors, the manners of lateness.

NSP / next-sentence cousins: do these two paragraphs share a life?
`,
      },
      {
        type: "paragraph",
        text: "BERT is not a chatterer. It is a librarian. Fine-tuning it is handing the librarian a new desk: sentiment, retrieval, classification. The later generative era did not make this picture false. It made a different picture famous.",
      },
    ],
  },
  {
    slug: "gpt2",
    year: "2019",
    title: "GPT-2",
    short: "A speaker who will not peek.",
    question: "If the only exam is “what word comes next,” how much of a world must you be carrying?",
    everyday: "Finishing a friend’s sentence without looking at their notes. Courtesy, and a kind of dare.",
    readMinutes: 5,
    blocks: [
      {
        type: "lede",
        text: "GPT-2’s bet is almost arrogant: a decoder-only Transformer, trained to continue, at scale, will pick up the furniture of the world because continuation is a merciless exam.",
      },
      {
        type: "ascii",
        drawing: "P-GPT",
        title: "Causal mask — no peeking",
        code: `
past tokens:  The  red  bus  is
                                         ↘
prediction:                         late

Each position may attend left, never right.
The future is earned, not stolen.
`,
      },
      {
        type: "callout",
        kind: "philosophy",
        title: "Scale as a philosophical instrument",
        text: "GPT-2 made scale feel like a method. That is both true and dangerous. Scale is a megaphone. It amplifies a picture; it does not certify that the picture is the only one worth having.",
      },
    ],
  },
  {
    slug: "llama",
    year: "2023",
    title: "LLaMA and Qwen",
    short: "The speaker, scaled with manners.",
    question: "Once everyone has the same dinner table, what remains to invent besides care?",
    everyday: "A well-run kitchen: better knives, better mise en place, same soup. The manners start to matter more than the myth.",
    readMinutes: 5,
    blocks: [
      {
        type: "lede",
        text: "LLaMA (2023) and Qwen (2024) are not new religions. They are evidence that the speaker-architecture became infrastructure: tokenizer care, stable depth, efficient attention, data as a first-class claim.",
      },
      {
        type: "ascii",
        drawing: "P-LLAMA",
        title: "Infrastructure, not a plot twist",
        code: `
same table (transformer decoder)
  +  a tokenizer that wastes fewer bites
  +  norms and residuals that keep depth sane
  +  data mixtures treated as architecture
  +  later: instruction, preference, tools

The plot twist is social: the speaker left the lab
and became a colleague that might be wrong in your house.
`,
      },
      {
        type: "paragraph",
        text: "Read these papers as systems essays. The math is chapter 06. The serving is chapter 09. The agency is chapter 10. The remaining invention is often a refusal: fewer wasted tokens, less unstable depth, less dishonest evaluation.",
      },
    ],
  },
  {
    slug: "diffusion",
    year: "2020",
    title: "Diffusion models",
    short: "Creation as careful unblurring.",
    question: "What if making an image is the art of walking backward out of fog?",
    everyday: "A window steaming up, then a hand slowly wiping it until a street returns. Generation as un-erasing.",
    readMinutes: 5,
    blocks: [
      {
        type: "lede",
        text: "Diffusion trains a model to reverse a vandalism it understands: noise added step by step until a photograph is fog. Learning to unfog is learning to generate.",
      },
      {
        type: "ascii",
        drawing: "P-DIFF",
        title: "Forward vandalism, reverse craft",
        code: `
photo → +noise → +noise → +noise → fog

fog   → -noise → -noise → -noise → photo'

The model never paints a bus from nowhere.
It removes a little wrongness, many times,
until a bus is what remaining structure most honestly is.
`,
      },
      {
        type: "callout",
        kind: "geometry",
        title: "Another walk downhill",
        text: "Each denoising step is a local correction — cousin to gradient descent, cousin to residual learning. Creation, here, is iterative honesty about noise.",
      },
    ],
  },
  {
    slug: "alphago",
    year: "2016",
    title: "AlphaGo",
    short: "Imagination as search plus habit.",
    question: "Can a creature invent a move that no teacher played, if it is allowed to play itself?",
    everyday: "Rehearsing an argument in the shower, then walking into the room and saying the one line that survived rehearsal.",
    readMinutes: 5,
    blocks: [
      {
        type: "lede",
        text: "AlphaGo combined a habit (a policy network), a rumor about the future (a value network), and a careful imagination (Monte Carlo Tree Search). Self-play supplied an infinite rival: yesterday’s self.",
      },
      {
        type: "ascii",
        drawing: "P-GO",
        title: "Think, search, live",
        code: `
board
  → policy  "moves that feel like us"
  → search  "a few futures, expanded where feeling is hot"
  → value   "are we, in rumor, winning?"
  → a stone in the world

Self-play: the dataset is a fossil record of your own bettering.
`,
      },
      {
        type: "paragraph",
        text: "The gift to the rest of AI is not Go. It is the permission to mix intuition with look-ahead, and to let a system generate the curriculum it needs by opposing itself. Chapter 07 is this paper, slowed down until it is a bicycle.",
      },
    ],
  },
];
