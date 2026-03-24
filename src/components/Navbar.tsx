import { useState } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import type { ProfileProps } from "../types/profile";

export function Navbar({ profile }: ProfileProps) {
  const [showContactForm, setShowContactForm] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`profile` + " " + profile)

    const templateParams = {
      name: senderName,
      time: new Date().toLocaleString(),
      email: senderEmail,
      phone: senderPhone,
      message: message,
      to_email: profile.email,
    };
    console.log(templateParams)

    emailjs
      .send(
        "service_keh8lbe",
        "template_oi70zrg",
        templateParams,
        "xb86e8epywUXODgKH"
      )
      .then(
        () => {
          window.alert("Message sent successfully!");
          setShowContactForm(false);
          setSenderName("");
          setSenderEmail("");
          setSenderPhone("");
          setMessage("");
        },
        (error) => {
          console.error("EmailJS error:", error);
          window.alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <>
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
          <button
            type="button"
            onClick={() => setShowContactForm((prev) => !prev)}
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:scale-[1.02] hover:cursor-pointer"
          >
            Contact
          </button>
        </div>
      </nav>

      {showContactForm &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-black/95 via-black/85 to-black/95 p-4" role="dialog" aria-modal="true">
            <div className="absolute inset-0" onClick={() => setShowContactForm(false)} />
            <form onSubmit={handleSubmit} className="relative w-full max-w-md rounded-xl border border-slate-200 bg-white p-5 shadow-xl">
              <h3 className="mb-4 text-lg font-semibold text-slate-900">Contact Me</h3>
              <div className="mb-2">
                <label className="block text-xs font-semibold text-slate-600">Your name</label>
                <input
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="mt-1 w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-xs font-semibold text-slate-600">Your phone</label>
                <input
                  value={senderPhone}
                  onChange={(e) => setSenderPhone(e.target.value)}
                  type="tel"
                  className="mt-1 w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                  placeholder="Optional"
                />
              </div>
              <div className="mb-2">
                <label className="block text-xs font-semibold text-slate-600">Your email</label>
                <input
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  type="email"
                  className="mt-1 w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-xs font-semibold text-slate-600">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="mt-1 w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700 hover:cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white transition hover:bg-slate-800 hover:cursor-pointer"
                >
                  Send
                </button>
              </div>
            </form>
          </div>,
          document.body
        )}
    </>
  );
}