"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Brain, MapPin } from "lucide-react";

const inView = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const highlights = [
  { icon: GraduationCap, label: "Degree", value: "BSc (Hons) IT", sub: "SLIIT, Sri Lanka" },
  { icon: Code2, label: "Stack", value: "MERN + Spring Boot", sub: "Full-Stack" },
  { icon: Brain, label: "Focus", value: "AI Integration", sub: "Gemini · Tesseract" },
  { icon: MapPin, label: "Location", value: "Malabe", sub: "Sri Lanka 🇱🇰" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative flex w-full flex-col items-center overflow-hidden py-28 md:py-36"
    >
      <div className="aurora-blob right-[-5%] top-[20%] h-[400px] w-[400px] bg-[#38BDF8] opacity-[0.06]" />

      <div className="site-container flex w-full flex-col items-center">
        {/* Heading */}
        <motion.div
          variants={inView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 flex w-full flex-col items-center text-center md:mb-20"
        >
          <div className="section-line" />
          <h2 className="mt-4 font-display text-4xl font-black md:text-5xl lg:text-6xl">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="mt-5 max-w-xl text-base text-slate-400 md:text-lg">
            Passionate about building digital solutions that sit at the
            intersection of elegance and intelligence.
          </p>
        </motion.div>

        {/* Who Am I — forced center */}
        <motion.div
          variants={inView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 flex w-full justify-center lg:mb-20"
        >
          <div className="glass-card w-full max-w-3xl rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-12 md:px-14 md:py-14">
            <h3 className="mb-8 font-display text-2xl font-bold text-white md:text-3xl">
              Who Am I?
            </h3>

            <div className="mx-auto max-w-2xl space-y-6 text-base leading-relaxed text-slate-400 md:text-lg md:leading-8">
              <p>
                I&apos;m{" "}
                <span className="font-semibold text-[#14F1D9]">
                  Rashmini Sachina Chathuranganie
                </span>
                , an Information Technology undergraduate at SLIIT with hands-on
                experience building full-stack web applications using the{" "}
                <span className="font-medium text-[#38BDF8]">MERN stack</span>{" "}
                and Spring Boot.
              </p>
              <p>
                I specialize in RESTful API development, JWT authentication,
                role-based access control, and seamlessly integrating AI-powered
                features including{" "}
                <span className="font-medium text-[#14F1D9]">Gemini AI</span> and{" "}
                <span className="font-medium text-[#14F1D9]">
                  Tesseract.js OCR
                </span>{" "}
                into production web applications.
              </p>
              <p>
                Currently seeking a{" "}
                <span className="font-semibold text-[#38BDF8]">
                  Software Engineer Internship
                </span>{" "}
                to contribute to real-world software solutions while continuing
                to grow as an engineer.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center gap-3">
              <p className="text-sm text-slate-500">Languages</p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Sinhala 🌺", "English 🇬🇧"].map((lang) => (
                  <span key={lang} className="skill-badge">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights */}
        <div className="grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {highlights.map(({ icon: Icon, label, value, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass-card glass-card-hover rounded-2xl p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#14F1D9]/10">
                <Icon size={20} className="text-[#14F1D9]" />
              </div>
              <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
                {label}
              </p>
              <p className="font-display text-base font-semibold text-white">
                {value}
              </p>
              <p className="mt-1 text-sm text-slate-500">{sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
