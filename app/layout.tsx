import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rashmini Sachina | Full-Stack Developer & IT Undergraduate",
  description:
    "Portfolio of Rashmini Sachina — Information Technology undergraduate at SLIIT, Sri Lanka. Full-Stack Developer specializing in MERN stack, AI integration, and modern web applications. Seeking a Software Engineer Internship.",
  keywords: [
    "Rashmini Sachina",
    "Full Stack Developer",
    "SLIIT",
    "Software Engineer",
    "MERN Stack",
    "React Developer",
    "Sri Lanka",
    "Portfolio",
  ],
  authors: [{ name: "Rashmini Sachina" }],
  openGraph: {
    title: "Rashmini Sachina | Full-Stack Developer",
    description:
      "IT Undergraduate at SLIIT, Full-Stack Developer specializing in MERN stack and AI-powered applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0B1120] text-slate-200 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
