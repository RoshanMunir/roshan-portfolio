"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { Layout, Server, Wrench, Smartphone } from "lucide-react";

const SKILL_GROUPS = [
  {
    icon: Layout,
    title: "Frontend",
    skills: [
      { name: "User Interface Development", level: 75 },
      { name: "Responsive Web Design", level: 75 },
      { name: "JavaScript Fundamentals", level: 75 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      { name: "Server-Side Development", level: 70 },
      { name: "Application Logic", level: 70 },
      { name: "API Fundamentals", level: 70 },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    skills: [
      { name: "Full-Stack Workflows", level: 75 },
      { name: "Problem Solving", level: 80 },
      { name: "Continuous Learning", level: 90 },
    ],
  },
  {
    icon: Wrench,
    title: "Database & Tools",
    skills: [
      { name: "Version Control", level: 70 },
      { name: "Debugging", level: 75 },
      { name: "Team Collaboration", level: 75 },
    ],
  },
];

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-ink-900 dark:text-slate-200">{name}</span>
        <span className="text-slate-500 dark:text-slate-400">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative section">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[500px] -translate-y-1/2 bg-hero-glow opacity-60" />

      <Reveal>
        <span className="section-tag">Skills</span>
        <h2 className="section-title">
          My <span className="gradient-text">Learning Focus</span>
        </h2>
        <p className="section-subtitle">
          The areas I&apos;m strengthening through focused learning and professional
          software-development experience.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 sm:gap-6 md:grid-cols-2">
        {SKILL_GROUPS.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.1}>
            <div className="card h-full p-5 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 text-white shadow-glow">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{group.title}</h3>
              </div>

              <div className="mt-6 space-y-5">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={si * 0.08}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
