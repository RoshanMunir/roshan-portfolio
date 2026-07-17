"use client";

import Reveal from "@/components/Reveal";
import { Github, Layers } from "lucide-react";

const PROJECTS = [
  {
    title: "Project Portfolio",
    description:
      "I'm actively building my portfolio as I grow through full-stack training and professional software-development experience. Explore my GitHub for current work.",
    tech: ["Full Stack", "Web Development", "Continuous Learning"],
    github: "https://github.com/roshanmunir",
    gradient: "from-brand-500 to-accent-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal>
        <span className="section-tag">Projects</span>
        <h2 className="section-title">
          Selected <span className="gradient-text">Work</span>
        </h2>
        <p className="section-subtitle">
          A selection of work-in-progress and upcoming projects from my full-stack
          development journey.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-16 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.1}>
            <div
              data-cursor="hover"
              className="card group flex h-full flex-col overflow-hidden hover:-translate-y-2 hover:shadow-glow"
            >
              <div
                className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
              >
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                <Layers className="h-14 w-14 text-white/90 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-900 transition-transform hover:scale-110"
                    aria-label={`GitHub repo of ${project.title}`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-ink-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-black/10 dark:border-white/10 pt-4 text-sm font-medium">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 transition-colors hover:text-ink-900 dark:hover:text-white"
                  >
                    View GitHub <Github className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}