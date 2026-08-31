import { agents } from "./agents";
import { computerScience } from "./computer-science";
import { deepLearning } from "./deep-learning";
import { geometry } from "./geometry";
import { gpu } from "./gpu";
import { language } from "./language";
import { machineLearning } from "./machine-learning";
import { papers } from "./papers";
import { philosophy } from "./philosophy";
import { probability } from "./probability";
import { reinforcement } from "./reinforcement";
import { research } from "./research";
import { systems } from "./systems";
import type { Chapter, Paper } from "./types";

export const chapters: Chapter[] = [
  philosophy,
  computerScience,
  geometry,
  probability,
  machineLearning,
  deepLearning,
  language,
  reinforcement,
  gpu,
  systems,
  agents,
  research,
];

export { papers };
export type { Chapter, Paper };

export const SPINE = [
  { id: "world", label: "Real world", href: "/chapters/philosophy" },
  { id: "observe", label: "Observation", href: "/chapters/philosophy" },
  { id: "measure", label: "Measurement", href: "/chapters/philosophy" },
  { id: "data", label: "Data", href: "/chapters/computer-science" },
  { id: "arrays", label: "Arrays / structures", href: "/chapters/computer-science" },
  { id: "vectors", label: "Vectors", href: "/chapters/geometry" },
  { id: "matrices", label: "Matrices", href: "/chapters/geometry" },
  { id: "prob", label: "Probability", href: "/chapters/probability" },
  { id: "models", label: "Models", href: "/chapters/machine-learning" },
  { id: "learn", label: "Learning", href: "/chapters/machine-learning" },
  { id: "deep", label: "Deep composition", href: "/chapters/deep-learning" },
  { id: "lang", label: "Language", href: "/chapters/language" },
  { id: "rl", label: "Action", href: "/chapters/reinforcement" },
  { id: "hw", label: "Hardware", href: "/chapters/gpu" },
  { id: "sys", label: "Systems", href: "/chapters/systems" },
  { id: "agent", label: "Agents", href: "/chapters/agents" },
] as const;

export function getChapter(slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}

export function getPaper(slug: string): Paper | undefined {
  return papers.find((p) => p.slug === slug);
}

export function neighbors(slug: string): { prev?: Chapter; next?: Chapter } {
  const i = chapters.findIndex((c) => c.slug === slug);
  if (i < 0) return {};
  return { prev: chapters[i - 1], next: chapters[i + 1] };
}

export function paperNeighbors(slug: string): { prev?: Paper; next?: Paper } {
  const i = papers.findIndex((p) => p.slug === slug);
  if (i < 0) return {};
  return { prev: papers[i - 1], next: papers[i + 1] };
}
