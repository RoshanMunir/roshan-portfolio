# Alex Morgan — Full Stack Developer Portfolio

A modern, premium, fully responsive developer portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- Next.js 14 App Router, SEO-optimized (metadata, `sitemap.xml`, `robots.txt`)
- Tailwind CSS with a custom brand color system, gradients & glassmorphism
- Dark / light mode toggle (persisted, no flash) via `next-themes`
- Sticky navbar with scroll-based active-section highlighting
- Smooth scroll navigation between sections
- Scroll-reveal animations & micro-interactions with Framer Motion
- Loading skeleton UI (`app/loading.js`)
- Fully responsive: mobile, tablet, desktop
- Clean, reusable, component-based architecture

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.js        # Root layout, fonts, metadata
│   ├── page.js           # Assembles all sections
│   ├── loading.js        # Skeleton loading UI
│   ├── not-found.js      # 404 page
│   ├── robots.js         # robots.txt
│   ├── sitemap.js        # sitemap.xml
│   └── globals.css       # Tailwind + custom utility classes
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Experience.js
│   ├── Contact.js
│   ├── Footer.js
│   ├── ThemeProvider.js
│   ├── ThemeToggle.js
│   └── Reveal.js          # Reusable scroll-reveal wrapper
├── public/                # Static assets (add your resume.pdf, images here)
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm run start
```

## ✏️ Customization Checklist

- **Personal info**: Update name, tagline, and bio in `components/Hero.js` and `components/About.js`.
- **Social links**: Replace placeholder URLs in `Hero.js`, `Contact.js`, and `Footer.js`.
- **Projects**: Edit the `PROJECTS` array in `components/Projects.js` with your real projects, live links, and GitHub repos.
- **Skills**: Adjust proficiency levels in `components/Skills.js`.
- **Experience**: Update the `TIMELINE` array in `components/Experience.js`.
- **Contact form**: The form currently simulates a submission. Wire it up to a real backend or service such as [Formspree](https://formspree.io), [Resend](https://resend.com), or [EmailJS](https://www.emailjs.com) inside `handleSubmit` in `components/Contact.js`.
- **Resume**: Add your `resume.pdf` to the `public/` folder (linked from the Hero section).
- **Profile image**: Replace the initials placeholder in `Hero.js` with a real photo using `next/image` if desired.
- **SEO**: Update `metadataBase` URL and social preview info in `app/layout.js`, plus URLs in `app/sitemap.js` and `app/robots.js`.
- **Colors/fonts**: Tweak the `brand` / `accent` palette and font in `tailwind.config.js` and `app/layout.js`.

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) — React framework (App Router)
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — animations
- [next-themes](https://github.com/pacocoursey/next-themes) — dark/light mode
- [lucide-react](https://lucide.dev/) — icons

## 📦 Deployment

This project deploys seamlessly to [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo directly on vercel.com for automatic deployments.

---

Built with care. Customize freely and make it your own. 🚀
