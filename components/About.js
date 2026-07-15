"use client";

import Reveal from "@/components/Reveal";
import { Code2, Server, Database, Smartphone } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    desc: "Building responsive, accessible interfaces with React.js, Next.js and Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Backend Systems",
    desc: "Designing secure, scalable REST APIs with Node.js and Express.js.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Modeling relational data and optimizing queries with MySQL.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Shipping cross-platform apps to iOS & Android with React Native + Expo.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <span className="section-tag">About Me</span>
        <h2 className="section-title">
          Turning ideas into <span className="gradient-text">reliable software</span>
        </h2>
        <p className="section-subtitle">
          I&apos;m Roshan Munir, a full-stack developer focused on creating dependable,
          user-friendly digital experiences and growing through every project.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-16 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal delay={0.1}>
          <div className="space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              My journey in technology began with a{" "}
              <span className="font-semibold text-ink-900 dark:text-white">
                Bachelor of Science in Computer Science
              </span>{" "}
              from the University of South Asia in 2023. In 2024, I continued building
              practical skills through full-stack development training with{" "}
              <span className="font-semibold text-ink-900 dark:text-white">
                Arfa Kareem
              </span>.
            </p>
            <p>
              In 2025, I joined <span className="font-semibold text-ink-900 dark:text-white">Leo
              Tech Solutions</span>, where I began applying my knowledge in a professional
              software-development environment. I approach each task with curiosity,
              attention to detail, and a commitment to writing clear, maintainable code.
            </p>
            <p>
              I&apos;m continually strengthening my full-stack skills, learning from real
              projects, and working toward software that is useful, polished, and built
              to last.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Problem Solver", "Detail-Oriented", "Fast Learner", "Team Player", "Continuous Learner"].map(
              (tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              )
            )}
          </div>
        </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal key={item.title} delay={0.15 + i * 0.08}>
                <div className="card group h-full p-5 sm:p-6 hover:-translate-y-1.5 hover:shadow-glow">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-ink-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
