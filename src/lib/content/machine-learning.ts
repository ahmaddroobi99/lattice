import type { Chapter } from "./types";

export const machineLearning: Chapter = {
  slug: "machine-learning",
  number: "04",
  title: "A model is a compressed story",
  subtitle: "Learning as embarrassment, rehearsal, and the refusal to memorize one kitchen.",
  question: "How can a machine infer a pattern without meeting the whole world?",
  everyday:
    "Learning to cook, not memorizing one recipe. Rehearsal versus opening night. A map that still works on a street you have never walked.",
  readMinutes: 11,
  group: "manual",
  blocks: [
    {
      type: "lede",
      text: "A model is not a brain. It is a story small enough to carry, scored by how embarrassed it becomes when the world talks back.",
    },
    {
      type: "paragraph",
      text: "Machine learning begins when you stop writing the rule and start writing the shape of a rule, then let examples push that shape around. Linear regression is the smallest adult version of this: a straight-line story about a crooked world, revised until the average embarrassment is tolerable.",
    },
    {
      type: "heading",
      level: 2,
      text: "Loss is a civilized word for embarrassment",
    },
    {
      type: "ascii",
      drawing: "04-01",
      title: "The loop that is the whole field",
      code: `
 guess  →  meet the world  →  measure the sting  →  revise
   ^                                               |
   +-------------------- try again ----------------+

The sting has names: squared error, cross-entropy, hinge.
They are different currencies for the same shame:
"I claimed this, and that happened."
`,
    },
    { type: "widget", id: "gradient-fog" },
    {
      type: "paragraph",
      text: "Gradient descent is walking downhill in fog. You cannot see the valley. You can feel the slope under your shoes. A learning rate is how long a stride you dare when you cannot see the cliff. Momentum is remembering which way you were already walking, so a small stone does not turn you around.",
    },
    {
      type: "heading",
      level: 2,
      text: "Train is rehearsal. Test is opening night.",
    },
    {
      type: "compare",
      left: {
        title: "Rehearsal (train)",
        items: [
          "The model may see the same scene again",
          "We are allowed to correct it",
          "Memorizing the script looks like talent",
        ],
      },
      right: {
        title: "Opening night (test)",
        items: [
          "The audience has not been in the hall before",
          "No whispering from the wings",
          "Memorizing the script is now a scandal",
        ],
      },
    },
    {
      type: "callout",
      kind: "daily",
      title: "The one recipe you can cook",
      text: "If you can only make your mother's soup, you have overfit a kitchen. If you can walk into a stranger's kitchen, see what is in the fridge, and still feed people, you have generalized. Datasets are fridges. Generalization is not a metric. It is a kind of hospitality.",
    },
    {
      type: "ascii",
      drawing: "04-02",
      title: "Underfit, fit, overfit",
      code: `
UNDERFIT                 FIT                    OVERFIT
a shrug                  a usable map           a tracing of noise

  *   *                    *   *                  *---*
     *                       *  *                 | * |
  *     *                 *     *                 *---*

"days are              "cold days come          "on Tuesday at
 whatever"               with clouds"            7:41 it rained"
`,
    },
    {
      type: "heading",
      level: 2,
      text: "Features are opinions about what matters",
    },
    {
      type: "paragraph",
      text: "Before deep learning, people spent their intelligence choosing columns: height, income, last purchase, a word count. A feature is not data. It is an editorial. Deep learning will later pretend to skip this step. It does not skip it. It hides it inside layers, where the editor is a matrix.",
    },
    {
      type: "sql",
      drawing: "04-03",
      title: "A tiny school for a model",
      tables: [
        {
          name: "EXAMPLE",
          columns: [
            { name: "id", type: "int", pk: true },
            { name: "split", type: "text" },
            { name: "x", type: "vector" },
            { name: "y", type: "text" },
          ],
        },
        {
          name: "PREDICTION",
          columns: [
            { name: "example_id", type: "int", fk: true },
            { name: "y_hat", type: "text" },
            { name: "loss", type: "real" },
          ],
        },
        {
          name: "PARAMETER",
          columns: [
            { name: "name", type: "text", pk: true },
            { name: "value", type: "real" },
            { name: "updated_at", type: "int" },
          ],
        },
      ],
      edges: [
        { from: "EXAMPLE", to: "PREDICTION", label: "1 — 1  is judged" },
        { from: "PREDICTION", to: "PARAMETER", label: "* — *  revises" },
      ],
    },
    {
      type: "quote",
      text: "Optimization is not intelligence. It is what intelligence looks like when the only freedom left is to be less wrong than yesterday.",
    },
  ],
};
