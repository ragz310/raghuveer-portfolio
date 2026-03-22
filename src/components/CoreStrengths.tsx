import { Briefcase } from "lucide-react";
import type { ProfileProps } from "../types/profile";

export function CoreStrengths({ profile }: ProfileProps) {
  return (
    <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-sm">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Core Strengths</p>
      <div className="mt-5 space-y-4">
        {profile.highlights.map((item) => (
          <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 p-4">
            <Briefcase className="mt-0.5 h-4 w-4 text-slate-500" />
            <p className="text-sm leading-6 text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}