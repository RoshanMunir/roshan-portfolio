"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
      Boolean
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl container-px">
        <div
          className={`flex items-center justify-between gap-2 rounded-2xl px-3 py-3 sm:px-6 transition-all duration-300 ${
            scrolled ? "glass shadow-card" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex min-w-0 items-center gap-2 text-base font-semibold sm:text-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 text-white shadow-glow">
              <Code2 className="h-5 w-5" />
            </span>
            <span className="truncate">
              Roshan<span className="gradient-text">.Munir</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-300 hover:text-ink-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-600 to-accent-600"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <a href="#contact" className="hidden sm:inline-flex btn-primary !px-5 !py-2.5 text-xs">
              Hire Me
            </a>
            <button
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full glass"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden mt-2 rounded-2xl glass shadow-card"
            >
              <div className="flex flex-col p-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      active === link.href.slice(1)
                        ? "bg-gradient-to-r from-brand-600 to-accent-600 text-white"
                        : "text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
