import { Github, Linkedin, Instagram, Code2 } from "lucide-react";

const QUICK_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com/roshanmunir", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/roshan-munir-6479aa412?utm_source=share_via&utm_content=profile&utm_medium=member_ios", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/theycall_me_shanii?igsh=eWN5cnJlZjl5Mzgx&utm_source=qr", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl container-px py-14">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:text-left">
          <div className="flex flex-col items-center sm:block">
            <a href="#home" className="flex items-center gap-2 font-semibold text-lg">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 text-white shadow-glow">
                <Code2 className="h-5 w-5" />
              </span>
              <span>
                Roshan<span className="gradient-text">.Munir</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-slate-600 dark:text-slate-400">
              Full-stack developer building a professional foundation through
              continuous learning and real-world experience.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink-900 dark:text-white">
              Quick Links
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 transition-colors hover:text-brand-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink-900 dark:text-white">
              Connect
            </p>
            <div className="mt-4 flex items-center justify-center gap-3 sm:justify-start">
              {SOCIALS.map((s) => (
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
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/10 dark:border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Roshan Munir. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
