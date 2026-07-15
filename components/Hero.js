"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  // Generate stable particle positions once per mount
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        duration: Math.random() * 12 + 14,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.4 + 0.2,
      })),
    []
  );

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      {/* ---------- Animated background layers ---------- */}

      {/* 1. Shifting mesh gradient */}
      <div className="absolute inset-0 -z-20 bg-mesh-gradient" />

      {/* 2. Grid with light sweep */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />
      <div className="absolute inset-0 -z-10 overflow-hidden [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]">
        <div className="grid-sweep" />
      </div>

      {/* 3. Soft glow blobs (slow orbit instead of static) */}
      <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl animate-blob-orbit" />
      <div className="absolute top-40 right-1/4 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl animate-blob-orbit [animation-delay:3s] [animation-direction:reverse]" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-brand-400/10 blur-3xl animate-blob-orbit [animation-delay:6s]" />

      {/* 4. Floating particle field */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-brand-400 animate-particle-float"
            style={{
              left: `${p.left}%`,
              bottom: "-10px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              boxShadow: "0 0 6px 1px currentColor",
            }}
          />
        ))}
      </div>

      {/* ---------- Foreground content ---------- */}

      <div className="section relative grid grid-cols-1 items-center gap-12 !py-0 sm:gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-tag">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for freelance &amp; full-time roles
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="gradient-text">Roshan Munir</span>
            <br />
            Full Stack Developer
          </h1>

          <p className="section-subtitle">
            I&apos;m a full-stack developer focused on building thoughtful, reliable web
            applications. I combine a strong computer science foundation with hands-on
            training and professional experience to keep learning and delivering value.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto">
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/roshanmunir", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/roshan-munir-6479aa412?utm_source=share_via&utm_content=profile&utm_medium=member_ios", label: "LinkedIn" },
              { icon: Instagram, href: "https://www.instagram.com/theycall_me_shanii?igsh=eWN5cnJlZjl5Mzgx&utm_source=qr", label: "Instagram" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full glass text-slate-600 dark:text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:text-brand-500"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-3 border-t border-black/10 pt-6 dark:border-white/10 sm:mt-14 sm:gap-6 sm:pt-8">
            {[
              { value: "2023", label: "Learning initial stage about frontend" },
              { value: "2024", label: "Full-Stack Training" },
              { value: "2025", label: "Professional Journey" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-bold gradient-text sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex h-[min(82vw,340px)] w-[min(82vw,340px)] items-center justify-center sm:h-[420px] sm:w-[420px]"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand-500 to-accent-600 opacity-20 blur-2xl" />
          <div className="relative h-full w-full animate-float">
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/20 glass shadow-glow">
              {imageError ? (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-500/20 via-accent-500/10 to-transparent">
                  <span className="text-8xl font-bold gradient-text select-none">RM</span>
                </div>
              ) : (
                <Image
                  src="/profile.jpg"
                  alt="Roshan Munir"
                  fill
                  priority
                  sizes="(max-width: 640px) 340px, 420px"
                  className="object-cover"
                  onError={() => setImageError(true)}
                />
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-2 top-5 card px-3 py-2 text-[10px] font-semibold sm:-left-6 sm:top-8 sm:px-4 sm:py-2.5 sm:text-xs"
            >
              ⚛️ React &amp; Next.js
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-2 top-1/2 card px-3 py-2 text-[10px] font-semibold sm:-right-4 sm:px-4 sm:py-2.5 sm:text-xs"
            >
              🟢 Node.js API
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-3 left-6 card px-3 py-2 text-[10px] font-semibold sm:-bottom-4 sm:left-10 sm:px-4 sm:py-2.5 sm:text-xs"
            >
              📱 React Native
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ---------- Scoped global animation styles ---------- */}
      <style jsx global>{`
        .bg-mesh-gradient {
          background-image: radial-gradient(
              at 20% 20%,
              rgba(99, 102, 241, 0.18) 0px,
              transparent 50%
            ),
            radial-gradient(at 80% 15%, rgba(236, 72, 153, 0.14) 0px, transparent 50%),
            radial-gradient(at 15% 80%, rgba(56, 189, 248, 0.14) 0px, transparent 50%),
            radial-gradient(at 85% 85%, rgba(139, 92, 246, 0.16) 0px, transparent 50%);
          background-size: 200% 200%;
          animation: meshMove 18s ease-in-out infinite;
        }

        @keyframes meshMove {
          0%,
          100% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
        }

        .grid-sweep {
          position: absolute;
          inset: -20% -20%;
          background: linear-gradient(
            100deg,
            transparent 40%,
            rgba(99, 102, 241, 0.08) 48%,
            rgba(139, 92, 246, 0.12) 50%,
            rgba(99, 102, 241, 0.08) 52%,
            transparent 60%
          );
          animation: sweep 8s ease-in-out infinite;
        }

        @keyframes sweep {
          0% {
            transform: translateX(-30%) translateY(-10%);
          }
          50% {
            transform: translateX(20%) translateY(10%);
          }
          100% {
            transform: translateX(-30%) translateY(-10%);
          }
        }

        @keyframes blobOrbit {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -40px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-blob-orbit {
          animation: blobOrbit 14s ease-in-out infinite;
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) translateX(20px);
            opacity: 0;
          }
        }
        .animate-particle-float {
          animation-name: particleFloat;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
}
