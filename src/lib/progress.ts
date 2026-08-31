import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ProgressState = {
  completed: string[];
  lastSlug: string | null;
  markComplete: (slug: string) => void;
  setLast: (slug: string) => void;
  isComplete: (slug: string) => boolean;
};

const memory: { value: string | null } = { value: null };

function storage() {
  if (typeof window === "undefined") {
    return {
      getItem: () => memory.value,
      setItem: (_n: string, v: string) => {
        memory.value = v;
      },
      removeItem: () => {
        memory.value = null;
      },
    };
  }
  return localStorage;
}

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      completed: [],
      lastSlug: null,
      markComplete: (slug) =>
        set((s) => ({
          completed: s.completed.includes(slug) ? s.completed : [...s.completed, slug],
          lastSlug: slug,
        })),
      setLast: (slug) => set({ lastSlug: slug }),
      isComplete: (slug) => get().completed.includes(slug),
    }),
    {
      name: "lattice-progress",
      storage: createJSONStorage(storage),
    },
  ),
);
