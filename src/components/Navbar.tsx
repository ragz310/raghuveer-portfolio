import type { ProfileProps } from "../types/profile";

export function Navbar({ profile }: ProfileProps) {
  return (
    <nav className="sticky top-4 z-20 mb-8 rounded-full border border-white/60 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold tracking-wide text-slate-900">{profile.name}</p>
          <p className="text-xs text-slate-500">Software Engineer</p>
        </div>
        <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a href="#about" className="transition hover:text-slate-950">About</a>
          <a href="#experience" className="transition hover:text-slate-950">Experience</a>
          <a href="#skills" className="transition hover:text-slate-950">Skills</a>
          <a href="#projects" className="transition hover:text-slate-950">Projects</a>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:scale-[1.02]"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}