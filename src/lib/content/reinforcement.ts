import type { Chapter } from "./types";

export const reinforcement: Chapter = {
  slug: "reinforcement",
  number: "07",
  title: "Action, consequence, desire",
  subtitle: "A score for living, a habit called a policy, and the restaurant problem.",
  question: "How does a creature get better at a life it has to actually live?",
  everyday:
    "Learning to ride a bike. Choosing a restaurant. Playing a game whose last page is not in the book yet.",
  readMinutes: 10,
  group: "manual",
  blocks: [
    {
      type: "lede",
      text: "Supervised learning is a school with an answer key. Reinforcement learning is a life: you act, the world answers with a weather, and you try to want better weathers.",
    },
    {
      type: "paragraph",
      text: "An agent is not a model with a cape. It is a loop: I am here, I do something, I am elsewhere, something scores the elsewhere. State, action, next state, reward. The plot of every game, every commute, every conversation that could have gone otherwise.",
    },
    {
      type: "ascii",
      drawing: "07-01",
      title: "The loop that is a life",
      code: `
   STATE  ----act---->  WORLD
     ^                    |
     |                    v
     +----- reward ---- NEXT

A POLICY is a habit: given this state, I tend to do that.
A VALUE is a rumor about the future: how good is it to be here?
`,
    },
    {
      type: "heading",
      level: 2,
      text: "The restaurant problem",
    },
    {
      type: "paragraph",
      text: "There is a street of restaurants. One of them you love. The others you have not tried. Exploitation is going back to the one you love. Exploration is risking a night for a possibly better love. Every learning creature lives on that street. Too much exploitation and you ossify. Too much exploration and you never eat well.",
    },
    {
      type: "ascii",
      drawing: "07-02",
      title: "A street of possible dinners",
      code: `
 [ known good ] [ ??? ] [ ??? ] [ once bad ] [ ??? ]

ε-greedy: usually the known good, sometimes a door at random.
softmax: visit in proportion to rumor.
curiosity: visit what would teach you, not just what would feed you.
`,
    },
    {
      type: "callout",
      kind: "daily",
      title: "A bicycle",
      text: "Nobody hands you a dataset of correct leans. The reward is remaining upright plus arriving. The policy is in your hips. You explore (wobble) until exploitation (a line) is possible. That is policy gradient, lived.",
    },
    {
      type: "heading",
      level: 2,
      text: "Imagination of future games",
    },
    {
      type: "paragraph",
      text: "AlphaGo did not merely play. It imagined. A policy network proposed moves the way a hand proposes a path. A value network rumored about who was winning. Monte Carlo Tree Search sat in the middle like a careful friend: let us try a few futures in the head before we spend a stone in the world. Self-play was the strange gift: the agent became its own rival, so the school never ran out of harder exams.",
    },
    {
      type: "ascii",
      drawing: "07-03",
      title: "Self-play as a hall of mirrors that gets wiser",
      code: `
me  vs  me-from-yesterday
 |         |
 v         v
game      game
 |         |
 +--> data for both ----> a slightly less foolish me

The opponent is a fossil of yourself.
Progress is beating a family of your own ghosts.
`,
    },
    {
      type: "sql",
      drawing: "07-04",
      title: "An episode, as a clerk would store a life",
      tables: [
        {
          name: "EPISODE",
          columns: [
            { name: "id", type: "int", pk: true },
            { name: "started_at", type: "int" },
          ],
        },
        {
          name: "STEP",
          columns: [
            { name: "id", type: "int", pk: true },
            { name: "episode_id", type: "int", fk: true },
            { name: "state", type: "text" },
            { name: "action", type: "text" },
            { name: "reward", type: "real" },
          ],
        },
      ],
      edges: [{ from: "EPISODE", to: "STEP", label: "1 — *  is lived as" }],
    },
    {
      type: "quote",
      text: "Reward is a narrow god. It will give you exactly what you scored, including the cheating you forgot to forbid. Desire, in machines, is a specification problem wearing a smile.",
    },
  ],
};
