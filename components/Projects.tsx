"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

import { projects } from "@/lib/data";

const stackColors: Record<string, string> = {
  "React.js": "text-[#61DAFB] bg-[#61DAFB]/10 border-[#61DAFB]/20",
  "Node.js": "text-[#6bca3c] bg-[#6bca3c]/10 border-[#6bca3c]/20",
  "Express.js": "text-slate-300 bg-slate-300/10 border-slate-300/20",
  MongoDB: "text-[#4DB33D] bg-[#4DB33D]/10 border-[#4DB33D]/20",
  "Gemini AI": "text-[#8b5cf6] bg-[#8b5cf6]/10 border-[#8b5cf6]/20",
  "Tesseract.js": "text-[#f59e0b] bg-[#f59e0b]/10 border-[#f59e0b]/20",
  JWT: "text-[#e11d48] bg-[#e11d48]/10 border-[#e11d48]/20",
  "Spring Boot": "text-[#6DB33F] bg-[#6DB33F]/10 border-[#6DB33F]/20",
};

const defaultBadge = "text-[#14F1D9] bg-[#14F1D9]/10 border-[#14F1D9]/20";

const cardGradients = [
  "from-[#14F1D9]/5 to-[#38BDF8]/5",
  "from-blue-500/5 to-indigo-500/5",
  "from-purple-500/5 to-pink-500/5",
  "from-orange-500/5 to-amber-500/5",
];

const accentColors = [
  { border: "border-[#14F1D9]/40", glow: "rgba(20,241,217,0.15)" },
  { border: "border-blue-400/40", glow: "rgba(96,165,250,0.15)" },
  { border: "border-purple-400/40", glow: "rgba(192,132,252,0.15)" },
  { border: "border-orange-400/40", glow: "rgba(251,146,60,0.15)" },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full overflow-hidden py-32 md:py-40">
      <div className="aurora-blob w-[500px] h-[500px] bg-[#38BDF8] right-[-10%] top-[40%] opacity-[0.05]" />

      <div className="site-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="section-line" />
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl text-lg">
            Real-world applications crafted using the MERN stack and modern styling.
          </p>
        </motion.div>

        {/* Featured project — full width */}
        {projects.filter((p) => p.featured).map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <div
              className={`relative glass-card rounded-2xl overflow-hidden border ${accentColors[0].border} bg-gradient-to-br ${cardGradients[0]}`}
              style={{
                boxShadow: `0 0 60px ${accentColors[0].glow}`,
              }}
            >
              {/* Featured badge */}
              <div className="absolute top-5 right-5 z-10 flex items-center gap-1.5 bg-[#14F1D9]/10 border border-[#14F1D9]/30 text-[#14F1D9] text-xs font-semibold px-3 py-1.5 rounded-full">
                <Star size={11} fill="currentColor" />
                Featured Project
              </div>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Visual side */}
                <div className="relative p-8 md:p-12 flex items-center justify-center min-h-[280px] md:border-r border-[#14F1D9]/10">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-[#14F1D9]/20 to-[#38BDF8]/10 border border-[#14F1D9]/20 flex flex-col items-center justify-center gap-4 shadow-[0_0_40px_rgba(20,241,217,0.1)]">
                      <div className="text-5xl">🩺</div>
                      <div className="text-center px-4">
                        <p className="text-[#14F1D9] font-display font-bold text-sm">VitalRead</p>
                        <p className="text-slate-500 text-xs">AI Analysis</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-4 rounded-2xl border border-dashed border-[#14F1D9]/10"
                    />
                  </div>
                </div>

                {/* Content side */}
                <div className="p-8 md:p-10 flex flex-col gap-5">
                  <div>
                    <h3 className="font-display font-black text-2xl text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-[#14F1D9] text-sm font-medium mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-[#14F1D9] mt-0.5 flex-shrink-0">▸</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
                          stackColors[tech] || defaultBadge
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-sm py-2 px-4"
                    >
                      <GithubIcon size={15} />

                      GitHub
                    </a>
                    <a href={project.demo} className="btn-primary text-sm py-2 px-4">
                      <ExternalLink size={15} className="relative z-10" />
                      <span className="relative z-10">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Rest of Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.filter((p) => !p.featured).map((project, i) => {
            const idx = i + 1;
            const icons = ["🚗", "🎓", "🏫"];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`glass-card rounded-2xl overflow-hidden border ${accentColors[idx].border} bg-gradient-to-br ${cardGradients[idx]} flex flex-col transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(20,241,217,0.1)]`}
              >
                {/* Visual */}
                <div className="h-36 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                  <div className="text-5xl">{icons[i]}</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-4 flex-1">
                  <div>
                    <h3 className="font-display font-bold text-white text-lg mb-0.5">
                      {project.title}
                    </h3>
                    <p className="text-[#14F1D9] text-xs font-medium mb-2">
                      {project.subtitle}
                    </p>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1 flex-1">
                    {project.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-1.5 text-xs text-slate-400">
                        <span className="text-[#14F1D9] mt-0.5 flex-shrink-0">▸</span>
                        <span className="line-clamp-1">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-2 py-0.5 rounded-full border font-medium ${
                          stackColors[tech] || defaultBadge
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs py-1.5 px-3 flex-1 justify-center"
                    >
                      <GithubIcon size={13} />

                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="btn-primary text-xs py-1.5 px-3 flex-1 justify-center"
                    >
                      <ExternalLink size={13} className="relative z-10" />
                      <span className="relative z-10">Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
