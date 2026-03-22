import type { ProfileProps } from "../types/profile";
import { SectionTitle } from "./SectionTitle";

export function ExperienceSection({ profile }: ProfileProps) {
  return (
    <section id="experience" className="mt-20">
      <SectionTitle
        eyebrow="Experience"
        title="Work history"
      />
      <div className="space-y-5">
        {profile.experience.map((job) => (
          <div key={`${job.company}-${job.title}`} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-slate-950">{job.title}</h3>
                <p className="mt-1 text-slate-600">{job.company}</p>
              </div>
              <div className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">{job.period}</div>
            </div>
            <ul className="mt-6 grid gap-3 md:grid-cols-3">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}