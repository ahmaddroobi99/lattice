import { AeroFrame } from "@/components/diagrams/AeroFrame";

type AsciiProps = {
  drawing: string;
  title: string;
  code: string;
  caption?: string;
};

export function Ascii({ drawing, title, code, caption }: AsciiProps) {
  return (
    <AeroFrame drawing={drawing} title={title} caption={caption}>
      <pre className="w-max max-w-none font-mono text-[0.625rem] leading-[1.45] text-primary sm:text-xs whitespace-pre">
        {code.replace(/^\n/, "").replace(/\n$/, "")}
      </pre>
    </AeroFrame>
  );
}
