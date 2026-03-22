import { Mail, Star, ArrowRight } from "lucide-react";
import type { ProfileProps } from "../types/profile";
import { ProfileCard } from "./ProfileCard";
import { CoreStrengths } from "./CoreStrengths";

export function HeroSection({ profile }: ProfileProps) {
  return (
    <section className="grid items-stretch gap-6 lg:grid-cols-[1.4fr_0.9fr]">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-12">
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
            <Star className="h-4 w-4" />
            Open to roles, consulting, and collaborations
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-slate-950 md:text-5xl">
            Lead Software Engineer @ JPMorgan Chase
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {profile.role} — {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:translate-y-[-1px]"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {profile.metrics.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                <p className="text-2xl font-semibold text-slate-950">{item.value}</p>
                <p className="mt-1 text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <ProfileCard profile={profile} />
        <CoreStrengths profile={profile} />
      </div>
    </section>
  );
}