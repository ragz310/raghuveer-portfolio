import type { SectionTitleProps } from "../types/profile";

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}