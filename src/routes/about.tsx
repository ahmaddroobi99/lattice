import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { SmartLink } from "@/components/SmartLink";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <AppShell>
      <main id="main" className="px-4 py-10 sm:px-8 lg:px-12 lg:py-14">
        <article className="mx-auto max-w-[42rem]">
          <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-primary uppercase">
            How to read this
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            A companion, not a scrape.
          </h1>
          <p className="mt-5 text-[1.0625rem] leading-[1.7]">
            Hands-on ML platforms — including public curricula that run from linear algebra and
            probability through PyTorch, NLP, RL, CUDA, Triton, inference, agents, and a short museum
            of papers — are excellent gyms. They are also, for some minds, a maze of tabs.
          </p>
          <p className="mt-4 text-[1.0625rem] leading-[1.7]">
            Lattice is an original field manual covering that same public map of topics. It does not
            copy lesson text, solutions, or a product interface. Educational materials on those
            platforms are copyrighted; this book is a different object: philosophy, diagrams, and
            daily pictures, written from first principles.
          </p>
          <h2 className="mt-10 font-display text-2xl">How a chapter is built</h2>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-paper p-4 font-mono text-[0.6875rem] leading-[1.5] text-primary whitespace-pre">{`
QUESTION
   |
   v
EVERYDAY PICTURE     (a bus, a kitchen, a dinner table)
   |
   v
AERO DIAGRAM         (the claim, as a drawing)
   |
   v
GEOMETRY / SQL       (the same claim, as structure)
   |
   v
ONLY THEN  the usual names
           (tokenizer, gradient, kernel, KV cache)
`}</pre>
          <h2 className="mt-10 font-display text-2xl">The map this follows</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[1.0625rem] leading-relaxed">
            <li>Foundations — linear algebra, probability, calculus, optimization, statistics</li>
            <li>Core ML and deep learning, including vision and language</li>
            <li>GPU kernels (CUDA, Triton) as industrial geometry</li>
            <li>Inference engineering — caches, batching, quantization</li>
            <li>Agentic loops — retrieval, tools, traces</li>
            <li>
              Landmark papers — VGG, ResNet, Word2Vec, LSTM, Transformer, BERT, GPT-2, LLaMA / Qwen,
              diffusion, AlphaGo
            </li>
          </ul>
          <p className="mt-6 text-[1.0625rem] leading-[1.7]">
            If you want drills, go to a gym. If you want to know why a gym exists, start at{" "}
            <SmartLink href="/chapters/philosophy" className="text-primary underline-offset-4 hover:underline">
              What is information?
            </SmartLink>
          </p>
        </article>
      </main>
    </AppShell>
  );
}
