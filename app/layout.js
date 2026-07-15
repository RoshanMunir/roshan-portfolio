import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Roshan Munir | Full Stack Developer",
    template: "%s | Roshan Munir",
  },
  description:
    "Roshan Munir is a full-stack developer building a strong foundation through education, training, and professional experience.",
  keywords: [
    "Full Stack Developer",
    "Web Development",
    "Software Development",
    "Portfolio",
  ],
  authors: [{ name: "Roshan Munir" }],
  creator: "Roshan Munir",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Roshan Munir | Full Stack Developer",
    description:
      "Full-stack developer building a strong foundation through education, training, and professional experience.",
    siteName: "Roshan Munir Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roshan Munir | Full Stack Developer",
    description:
      "Full-stack developer building a strong foundation through education, training, and professional experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
