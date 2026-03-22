export default function ResumeWebsiteStarter() {
  const profile = {
    name: "Your Name",
    title: "Software Engineering Manager | REALTOR® | Entrepreneur",
    location: "Frisco, TX",
    email: "your.email@example.com",
    linkedin: "https://www.linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    summary:
      "Experienced technology leader and entrepreneur with a background in software engineering, product delivery, real estate, and business development. Passionate about solving real problems, building modern digital experiences, and creating value through technology and execution.",
    highlights: [
      "14+ years in software engineering and web technologies",
      "Led teams across enterprise application delivery",
      "Experience in React, TypeScript, AWS, CI/CD, and modern frontend architecture",
      "Active in real estate, investment, and business development"
    ],
    experience: [
      {
        company: "Company Name",
        role: "Software Engineering Manager",
        period: "2022 – Present",
        bullets: [
          "Led cross-functional engineering teams to deliver scalable web platforms and customer-facing digital solutions.",
          "Improved engineering velocity by streamlining development workflows, release processes, and collaboration across product, QA, and design.",
          "Drove architecture and modernization efforts using React, TypeScript, cloud infrastructure, and automation practices."
        ]
      },
      {
        company: "Previous Company",
        role: "Senior Software Engineer",
        period: "2018 – 2022",
        bullets: [
          "Built and enhanced enterprise web applications with a focus on performance, maintainability, and user experience.",
          "Collaborated with stakeholders to translate business requirements into production-ready features.",
          "Supported deployments, troubleshooting, and continuous improvement across SDLC phases."
        ]
      }
    ],
    skills: {
      Frontend: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
      Backend: ["Node.js", "GraphQL APIs", "REST APIs"],
      Cloud: ["AWS", "ECS", "ALB", "DNS", "Route53"],
      DevOps: ["Jenkins", "Spinnaker", "CI/CD Pipelines", "Terraform"],
      Tools: ["GitHub", "Playwright", "NGINX", "AEM"]
    },
    projects: [
      {
        name: "Resume Website",
        description:
          "Personal website showcasing background, experience, projects, and contact information with a professional modern layout.",
        stack: ["React", "Tailwind CSS", "Vite"]
      },
      {
        name: "Professional Portfolio",
        description:
          "Central profile for leadership experience, technical expertise, and business ventures.",
        stack: ["Responsive Design", "SEO", "GitHub Pages"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <header className="bg-white rounded-3xl shadow-sm border p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{profile.name}</h1>
              <p className="text-lg md:text-xl text-slate-600 mt-2">{profile.title}</p>
              <p className="text-sm text-slate-500 mt-3">{profile.location}</p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <a className="px-4 py-2 rounded-2xl bg-slate-900 text-white text-center" href={`mailto:${profile.email}`}>
                Contact Me
              </a>
              <a className="px-4 py-2 rounded-2xl border text-center" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="px-4 py-2 rounded-2xl border text-center" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
          <p className="mt-6 text-base leading-7 text-slate-700">{profile.summary}</p>
          <div className="grid md:grid-cols-2 gap-3 mt-6">
            {profile.highlights.map((item) => (
              <div key={item} className="bg-slate-100 rounded-2xl px-4 py-3 text-sm">
                {item}
              </div>
            ))}
          </div>
        </header>

        <section className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl shadow-sm border p-8">
              <h2 className="text-2xl font-semibold">Experience</h2>
              <div className="mt-6 space-y-8">
                {profile.experience.map((job) => (
                  <div key={`${job.company}-${job.role}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold">{job.role}</h3>
                        <p className="text-slate-600">{job.company}</p>
                      </div>
                      <p className="text-sm text-slate-500">{job.period}</p>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border p-8">
              <h2 className="text-2xl font-semibold">Projects</h2>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {profile.projects.map((project) => (
                  <div key={project.name} className="border rounded-2xl p-5">
                    <h3 className="font-semibold text-lg">{project.name}</h3>
                    <p className="text-sm text-slate-600 mt-2 leading-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.stack.map((item) => (
                        <span key={item} className="text-xs px-3 py-1 bg-slate-100 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-3xl shadow-sm border p-8">
              <h2 className="text-2xl font-semibold">Skills</h2>
              <div className="mt-6 space-y-5">
                {Object.entries(profile.skills).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-sm font-semibold text-slate-900">{category}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {items.map((item) => (
                        <span key={item} className="text-xs px-3 py-1 rounded-full border">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border p-8">
              <h2 className="text-2xl font-semibold">Next Steps</h2>
              <ol className="mt-4 space-y-3 text-sm text-slate-700 list-decimal pl-5">
                <li>Replace placeholder profile data with your real resume details.</li>
                <li>Add your headshot, certifications, and project links.</li>
                <li>Push the code to GitHub and deploy using GitHub Pages or Vercel.</li>
                <li>Connect your custom domain later if you want a branded site.</li>
              </ol>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
