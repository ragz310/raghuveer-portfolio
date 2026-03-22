import type { ProfileProps } from "../types/profile";
import { SectionTitle } from "./SectionTitle";

export function SkillsSection({ profile }: ProfileProps) {
  return (
    <section id="skills" className="mt-20">
      <SectionTitle
        eyebrow="Skills"
        title="Technology stack"
      />
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-wrap gap-3">
          {profile.skills.map((skill) => (
            <span key={skill} className="rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm text-slate-700">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}