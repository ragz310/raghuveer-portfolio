import type { ProfileProps } from "../types/profile";
import { SectionTitle } from "./SectionTitle";

export function AboutSection({ profile }: ProfileProps) {
  return (
    <section id="about" className="mt-20">
      <SectionTitle
              eyebrow="About" title={""}      />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-lg leading-8 text-slate-700">{profile.summary}</p>
        </div>
      </div>
    </section>
  );
}