"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Instagram,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "roshanmunir25@gmail.com" },
  { icon: Phone, label: "Phone", value: "+923264507070" },
  { icon: MapPin, label: "Location", value: "Remote — Worldwide" },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com/roshanmunir", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/roshan-munir-6479aa412?utm_source=share_via&utm_content=profile&utm_medium=member_ios", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/theycall_me_shanii?igsh=eWN5cnJlZjl5Mzgx&utm_source=qr", label: "Instagram" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      // TODO: Replace with your real API endpoint or email service (e.g. Formspree, Resend, EmailJS)
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="relative section">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-hero-glow opacity-50" />

      <Reveal>
        <span className="section-tag">Contact</span>
        <h2 className="section-title">
          Let&apos;s Build Something <span className="gradient-text">Great Together</span>
        </h2>
        <p className="section-subtitle">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-16 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal delay={0.1}>
          <div className="space-y-5">
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="card flex min-w-0 items-center gap-4 p-4 sm:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 text-white shadow-glow">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.label}</p>
                  <p className="break-all text-sm font-medium text-ink-900 dark:text-white sm:text-base">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="card p-5">
              <p className="mb-4 text-xs text-slate-500 dark:text-slate-400">Find me on</p>
              <div className="flex items-center gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full glass text-slate-600 dark:text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:text-brand-500"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <form onSubmit={handleSubmit} noValidate className="card space-y-5 p-5 sm:p-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full rounded-xl border bg-white/50 dark:bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 ${
                    errors.name
                      ? "border-red-400"
                      : "border-black/10 dark:border-white/10"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-xl border bg-white/50 dark:bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 ${
                    errors.email
                      ? "border-red-400"
                      : "border-black/10 dark:border-white/10"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className={`w-full resize-none rounded-xl border bg-white/50 dark:bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 ${
                  errors.message
                    ? "border-red-400"
                    : "border-black/10 dark:border-white/10"
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full sm:w-auto disabled:opacity-70"
            >
              {status === "loading" && (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              )}
              {status === "success" && (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message Sent!
                </>
              )}
              {status === "idle" && (
                <>
                  Send Message <Send className="h-4 w-4" />
                </>
              )}
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
