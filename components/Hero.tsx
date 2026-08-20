"use client";

import { useEffect, useRef, useState } from "react";
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

// Floating Particles
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
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* Aurora blobs */}
      <div className="aurora-blob w-[500px] h-[500px] bg-[#14F1D9] left-[-10%] top-[10%]" />
      <div className="aurora-blob w-[600px] h-[600px] bg-[#38BDF8] right-[-15%] top-[-5%] animation-delay-3000" />
      <div className="aurora-blob w-[400px] h-[400px] bg-indigo-500 left-[30%] bottom-[5%] opacity-10" />

      <Particles />

      <div className="max-w-[1120px] w-full mx-auto px-8 md:px-16 pt-28 pb-20">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex w-fit items-center gap-2 bg-[#14F1D9]/10 border border-[#14F1D9]/20 rounded-full px-4 py-1.5 text-sm text-[#14F1D9] font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-[#14F1D9] animate-pulse" />
              Open to Internships · Sri Lanka
            </motion.div>

            {/* Name */}
            <div>
              <h1 className="font-display font-black leading-none">
                <span className="block text-white text-5xl md:text-6xl lg:text-7xl mb-2">
                  Rashmini
                </span>
                <span className="block text-gradient text-5xl md:text-6xl lg:text-7xl">
                  Sachina
                </span>
              </h1>
            </div>

            {/* Typed */}
            <div className="text-xl md:text-2xl font-display font-medium text-slate-300 min-h-[2.5rem]">
              <TypedText />
            </div>

            {/* Bio */}
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg">
              Information Technology undergraduate at{" "}
              <span className="text-[#38BDF8] font-medium">SLIIT</span>, Sri
              Lanka, building full-stack web applications powered by the{" "}
              <span className="text-[#14F1D9] font-medium">MERN stack</span> and
              AI. Passionate about crafting solutions that make a real impact.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-2">
              <a href="#projects" className="btn-primary">
                <Eye size={18} className="relative z-10" />
                <span className="relative z-10">View Projects</span>
              </a>
              <a
                href="/resume.pdf"
                download
                className="btn-outline"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 pt-2">
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
                  className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-[#14F1D9] hover:border-[#14F1D9]/30 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
              <div className="flex items-center gap-2 text-slate-500 text-sm ml-2">
                <span className="w-px h-5 bg-slate-700" />
                rashminisachina@gmail.com
              </div>
            </div>
          </motion.div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#14F1D9] to-[#38BDF8] blur-2xl opacity-25 scale-110" />

              {/* Rotating border */}
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

              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-[#14F1D9]/30 shadow-[0_0_60px_rgba(20,241,217,0.15)]">
                <div className="w-full h-full bg-gradient-to-br from-[#0F1729] to-[#0B1120] flex items-center justify-center">
                  {/* Placeholder avatar with initials */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#14F1D9]/20 to-[#38BDF8]/20 border border-[#14F1D9]/30 flex items-center justify-center">
                      <span className="font-display font-black text-4xl text-gradient">RS</span>
                    </div>
                    <div className="text-center">
                      <p className="text-[#14F1D9] text-sm font-medium">Rashmini Sachina</p>
                      <p className="text-slate-500 text-xs">IT Undergraduate · SLIIT</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 glass-card px-3 py-2 rounded-xl text-xs font-medium border border-[#14F1D9]/20 shadow-lg"
              >
                <span className="text-[#14F1D9]">⚡</span>
                <span className="text-slate-300 ml-1">CGPA 3.2</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -right-8 bottom-1/4 glass-card px-3 py-2 rounded-xl text-xs font-medium border border-[#38BDF8]/20 shadow-lg"
              >
                <span className="text-[#38BDF8]">🚀</span>
                <span className="text-slate-300 ml-1">4 Projects</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-xl text-xs font-medium border border-purple-400/20 shadow-lg"
              >
                <span className="text-purple-400">🎓</span>
                <span className="text-slate-300 ml-1">SLIIT · 2027</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs"
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
