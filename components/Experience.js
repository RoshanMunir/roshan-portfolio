"use client";

import Reveal from "@/components/Reveal";
import { Globe, Smartphone, Plug, Briefcase } from "lucide-react";

const TIMELINE = [
  {
    role: "Bachelor of Science in Computer Science",
    org: "University of South Asia",
    period: "2023",
    desc: "Completed my degree in Computer Science with a strong foundation in programming, software fundamentals, and problem-solving.",
  },
  {
    role: "Full Stack Development Learner",
    org: "Arfa Kareem",
    period: "2024",
    desc: "Began focused full-stack development training, building practical skills across modern web development and end-to-end application workflows.",
  },
  {
    role: "Software Developer",
    org: "Leo Tech Solutions",
    period: "2025 — Present",
    desc: "Joined Leo Tech Solutions and began applying my technical foundation in a professional environment, contributing to real-world software-development work.",
  },
];

const SERVICES = [
  {
    icon: Globe,
    title: "Full-Stack Development",
    desc: "Building practical web applications by connecting intuitive user interfaces with reliable server-side functionality.",
  },
  {
    icon: Smartphone,
    title: "Frontend Development",
    desc: "Creating clear, responsive interfaces that provide a smooth experience across devices.",
  },
  {
    icon: Plug,
    title: "Backend Development",
    desc: "Developing the application logic and integrations that support secure, maintainable digital products.",
  },
  {
    icon: Briefcase,
    title: "Continuous Learning",
    desc: "Expanding my technical knowledge through training, teamwork, and hands-on project experience.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <span className="section-tag">Experience &amp; Services</span>
        <h2 className="section-title">
          My <span className="gradient-text">Journey</span> &amp; How I Can Help
        </h2>
        <p className="section-subtitle">
          A growing professional building strong technical foundations through
          education, training, and real-world experience.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-12 sm:mt-16 sm:gap-16 lg:grid-cols-2">
        {/* Timeline */}
        <div>
          <Reveal>
            <h3 className="mb-8 text-xl font-semibold">Education &amp; Experience</h3>
          </Reveal>
          <div className="relative space-y-8 border-l border-black/10 pl-6 dark:border-white/10 sm:space-y-10 sm:pl-8">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.role} delay={i * 0.12}>
                <div className="relative">
                  <span className="absolute -left-[30px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-600 shadow-glow ring-4 ring-white dark:ring-ink-900 sm:-left-[38px]" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300">
                    {item.period}
                  </p>
                  <h4 className="mt-1 text-lg font-semibold text-ink-900 dark:text-white">
                    {item.role}
                  </h4>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {item.org}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <Reveal>
            <h3 className="mb-8 text-xl font-semibold">Professional Focus</h3>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.1}>
                <div className="card group h-full p-5 sm:p-6 hover:-translate-y-1.5 hover:shadow-glow">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 font-semibold text-ink-900 dark:text-white">
                    {service.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {service.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
