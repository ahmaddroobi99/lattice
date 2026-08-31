import type { Chapter } from "./types";

export const geometry: Chapter = {
  slug: "geometry",
  number: "02",
  title: "Math as geometry",
  subtitle: "Numbers are not ornaments. They are positions, directions, and honest distances.",
  question: "How aligned are two things — and what would “closest” even mean?",
  everyday:
    "Walking the same street, crossing at a corner, or heading home in opposite directions. Alignment is a feeling before it is a formula.",
  readMinutes: 12,
  group: "manual",
  blocks: [
    {
      type: "lede",
      text: "Linear algebra is usually introduced as a pile of symbols that happen to multiply. Forget the symbols for a page. Think of a walk.",
    },
    {
      type: "paragraph",
      text: "A number on its own is a mark on a ruler. Two numbers together are a point on a map. A list of numbers is a position in a room with many walls. That list is a vector. Not because a textbook said so — because a list of coordinates is how you would tell a stranger where you are standing.",
    },
    {
      type: "heading",
      level: 2,
      text: "A vector is a walk",
    },
    {
      type: "ascii",
      drawing: "02-01",
      title: "Magnitude and heading",
      code: `
            b
           /
          /     two walks from the same door
         /
        *------------> a
       home

 a = "three blocks east"
 b = "two blocks east and two north"

 The question is not "what are they?"
 The question is "how much do they agree?"
`,
    },
    {
      type: "heading",
      level: 2,
      text: "The dot product is a verdict about alignment",
    },
    {
      type: "paragraph",
      text: "Multiply matching parts, add them up. That recipe is famous. The meaning is older: if two walks point the same way, the number is large and positive. If they are at right angles, the number is silent. If they oppose, the number goes negative. Similarity, search, matrix multiplication, neural nets, attention — they are all this verdict, repeated until a pattern appears.",
    },
    { type: "widget", id: "dot-product" },
    {
      type: "ascii",
      drawing: "02-02",
      title: "One idea, many coats",
      code: `
DOT PRODUCT
     |
     +---- geometry     (angle between walks)
     |
     +---- similarity   (do these two songs feel related?)
     |
     +---- search       (which page is closest to this question?)
     |
     +---- matrix mul   (many alignments at once)
     |
     +---- neural nets  (does this pattern fire?)
     |
     +---- attention    (who should I listen to?)
     |
     +---- GPUs         (do this for a million pairs)
`,
    },
    {
      type: "callout",
      kind: "geometry",
      title: "Why GPUs care about this",
      text: "A GPU is not intelligent. It is a factory for doing the same small alignment test millions of times. The philosophy of the dot product becomes, later, the economics of silicon.",
    },
    {
      type: "heading",
      level: 2,
      text: "A matrix is a machine that moves rooms",
    },
    {
      type: "paragraph",
      text: "If a vector is a walk, a matrix is a rule for rewriting walks: stretch this street, rotate that square, flatten a city onto a line. You do not need the word “linear map” to feel this. You have seen it whenever a map projection makes Greenland look like a continent, or a photograph is cropped until a crowd becomes a face.",
    },
    {
      type: "ascii",
      drawing: "02-03",
      title: "Matrices as verbs",
      code: `
v  --stretch-->   v'
v  --rotate--->   v'
v  --flatten-->   v'     (some directions are thrown away)
v  --mix------>   v'     (new axes, old content)

A neural layer is a matrix plus a small lie called a nonlinearity.
The matrix moves. The lie lets movement become choice.
`,
    },
    {
      type: "heading",
      level: 2,
      text: "Least squares is a moral idea",
    },
    {
      type: "paragraph",
      text: "Reality will not sit on the line you can afford to draw. You then have a choice: pretend it did, or admit the gap and take the closest point you are allowed to claim. That closest point is a projection. Regression is projection with a story attached.",
    },
    { type: "widget", id: "projection" },
    {
      type: "ascii",
      drawing: "02-04",
      title: "The ethics of “close enough”",
      code: `
REALITY
   |
   |  does not fit the story
   v
MODEL SPACE          (the only claims we can compute)
   |
   v
closest possible representation
   |
   v
PROJECTION           (least squares, if distance is ordinary)
   |
   v
the remainder        (what we still cannot say)
`,
    },
    {
      type: "callout",
      kind: "daily",
      title: "Telling a day as a straight line",
      text: "You come home and summarize: “It was a long day.” The day was not a line. The sentence is a projection. Friends hear the projection, not the remainder. Models do the same, at industrial scale.",
    },
    {
      type: "paragraph",
      text: "Calculus, in this picture, is not a bag of derivatives. It is the art of asking a curved thing: which way is more wrong, locally, from here? Optimization is walking that answer. We will meet that walk when we talk about learning. Geometry first; motion second.",
    },
  ],
};
