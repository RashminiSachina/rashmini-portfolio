"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Eye, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const TYPED_STRINGS = [
  "Full-Stack Developer",
  "MERN Stack Engineer",
  "AI Integration Enthusiast",
  "IT Undergraduate @ SLIIT",
];

function TypedText() {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = TYPED_STRINGS[current];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(
        () => setDisplayed(target.slice(0, displayed.length + 1)),
        70
      );
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(target.slice(0, displayed.length - 1)),
        35
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setCurrent((c) => (c + 1) % TYPED_STRINGS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, current]);

  return (
    <span className="text-[#14F1D9]">
      {displayed}
      <span className="inline-block w-0.5 h-6 bg-[#14F1D9] ml-0.5 animate-pulse" />
    </span>
  );
}

function Particles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const particles = Array.from({ length: 25 });

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background:
              i % 2 === 0
                ? "rgba(20,241,217,0.5)"
                : "rgba(56,189,248,0.4)",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden grid-bg"
    >
      {/* Aurora blobs */}
      <div className="aurora-blob w-[500px] h-[500px] bg-[#14F1D9] left-[-10%] top-[10%]" />
      <div className="aurora-blob w-[600px] h-[600px] bg-[#38BDF8] right-[-15%] top-[-5%] animation-delay-3000" />
      <div className="aurora-blob w-[400px] h-[400px] bg-indigo-500 left-[30%] bottom-[5%] opacity-10" />

      <Particles />

      <div className="site-container relative z-10 flex min-h-screen flex-col justify-center py-28 pb-24">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto flex w-full max-w-xl flex-col items-center gap-5 text-center lg:mx-0 lg:max-w-none lg:items-start lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[#14F1D9]/20 bg-[#14F1D9]/10 px-4 py-1.5 text-sm font-medium text-[#14F1D9]"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#14F1D9]" />
              Open to Internships · Sri Lanka
            </motion.div>

            <div>
              <h1 className="font-display font-black leading-none">
                <span className="mb-2 block text-5xl text-white md:text-6xl lg:text-7xl">
                  Rashmini
                </span>
                <span className="block text-gradient text-5xl md:text-6xl lg:text-7xl">
                  Sachina
                </span>
              </h1>
            </div>

            <div className="min-h-[2.5rem] font-display text-xl font-medium text-slate-300 md:text-2xl">
              <TypedText />
            </div>

            <p className="max-w-md text-base leading-relaxed text-slate-400 md:text-lg">
              Information Technology undergraduate at{" "}
              <span className="font-medium text-[#38BDF8]">SLIIT</span>, Sri
              Lanka, building full-stack web applications powered by the{" "}
              <span className="font-medium text-[#14F1D9]">MERN stack</span> and
              AI. Passionate about crafting solutions that make a real impact.
            </p>

            <div className="mt-1 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#projects" className="btn-primary">
                <Eye size={18} className="relative z-10" />
                <span className="relative z-10">View Projects</span>
              </a>
              <a href="/resume.pdf" download className="btn-outline">
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-1 lg:justify-start">
              {[
                {
                  icon: GithubIcon,
                  href: "https://github.com/RashminiSachina",
                  label: "GitHub",
                },
                {
                  icon: LinkedinIcon,
                  href: "https://www.linkedin.com/in/rashmini-sachina-a96171416",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:rashminisachina@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card rounded-xl p-2.5 text-slate-400 transition-colors hover:border-[#14F1D9]/30 hover:text-[#14F1D9]"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
              <div className="ml-0 flex items-center gap-2 text-sm text-slate-500 sm:ml-2">
                <span className="hidden h-5 w-px bg-slate-700 sm:block" />
                rashminisachina@gmail.com
              </div>
            </div>
          </motion.div>

          {/* Right — Profile */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex w-full justify-center lg:justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-[#14F1D9] to-[#38BDF8] opacity-25 blur-2xl" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full border-2 border-dashed border-[#14F1D9]/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 rounded-full border border-[#38BDF8]/10"
              />

              <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-[#14F1D9]/30 shadow-[0_0_60px_rgba(20,241,217,0.15)] md:h-80 md:w-80 lg:h-[22rem] lg:w-[22rem] xl:h-96 xl:w-96">
                <Image
                  src="/profilep.jpeg"
                  alt="Rashmini Sachina"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 18rem, (max-width: 1024px) 20rem, 24rem"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/85 via-[#0B1120]/25 to-transparent" />
                <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center text-center">
                  <p className="text-sm font-medium text-[#14F1D9]">
                    Rashmini Sachina
                  </p>
                  <p className="text-xs text-slate-300/80">
                    IT Undergraduate · SLIIT
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-[#14F1D9]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
