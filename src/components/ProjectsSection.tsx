import { ArrowRight } from "lucide-react";
import type { ProfileProps } from "../types/profile";
import { SectionTitle } from "./SectionTitle";

export function ProjectsSection({ profile }: ProfileProps) {
  return (
    <section id="projects" className="mt-20 pb-12">
      <SectionTitle
        eyebrow="Projects"
        title=""
      />
      <div className="grid gap-6 md:grid-cols-2">
        {profile.featured.map((item) => (
          <div
            key={item.title}
            className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{item.tag}</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-950 hover:text-slate-700 transition-colors"
            >
              Explore
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}