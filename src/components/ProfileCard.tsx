import { useState } from "react";
import { Mail, MapPin, Phone, Linkedin, Github, X } from "lucide-react";
import type { ProfileProps } from "../types/profile";

export function ProfileCard({ profile }: ProfileProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <>
      <div className="rounded-[2rem] border border-white/60 bg-slate-950 p-8 text-white shadow-[0_20px_80px_rgba(15,23,42,0.12)]">
        <div className="flex items-center gap-4">
          <img
            src="/profile.jpg"
            alt={`${profile.name} profile`}
            className="h-16 w-16 rounded-2xl object-cover cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setIsImageModalOpen(true)}
          />
          <div>
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            <p className="text-sm text-slate-300">{profile.role}</p>
          </div>
        </div>

        <div className="mt-8 space-y-4 text-sm text-slate-300">
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4" /> {profile.location}
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4" /> {profile.email}
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4" /> {profile.phone}
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-3 transition hover:bg-white/20">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-3 transition hover:bg-white/20">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Image Modal Overlay */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-md max-h-[80vh] p-4">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute -top-2 -right-2 z-10 rounded-full bg-white p-2 text-black shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src="/profile.jpg"
              alt={`${profile.name} profile - enlarged`}
              className="w-full h-full object-contain rounded-lg shadow-2xl animate-zoom-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}