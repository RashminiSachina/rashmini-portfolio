"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "from-teal-400/20 to-cyan-400/10",
    accent: "#14F1D9",
    skills: ["React.js", "HTML5 / CSS3", "JavaScript", "Vite", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "from-blue-400/20 to-indigo-400/10",
    accent: "#38BDF8",
    skills: ["Node.js", "Express.js", "Spring Boot", "RESTful APIs"],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "from-purple-400/20 to-violet-400/10",
    accent: "#a78bfa",
    skills: ["MongoDB", "MySQL / SQL", "Mongoose", "Database Design"],
  },
  {
    category: "AI & Integrations",
    icon: "🤖",
    color: "from-emerald-400/20 to-teal-400/10",
    accent: "#34d399",
    skills: ["Gemini AI", "Tesseract.js", "PDF Parsing", "API Integration"],
  },
  {
    category: "Security",
    icon: "🔐",
    color: "from-rose-400/20 to-pink-400/10",
    accent: "#fb7185",
    skills: ["JWT Auth", "RBAC", "Protected Routes", "Java (OOP)"],
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    color: "from-amber-400/20 to-orange-400/10",
    accent: "#fbbf24",
    skills: ["Git & GitHub", "VS Code", "Postman", "npm", "Android Studio"],
  },
  {
    category: "Concepts & Practices",
    icon: "📐",
    color: "from-sky-400/20 to-blue-400/10",
    accent: "#7dd3fc",
    skills: [
      "OOP",
      "CRUD Operations",
      "Software Engineering",
      "Full-Stack Development",
      "Mobile Development",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-40 overflow-hidden">
      <div className="aurora-blob w-[400px] h-[400px] bg-[#14F1D9] left-[-5%] top-[20%] opacity-[0.05]" />
      <div className="aurora-blob w-[300px] h-[300px] bg-[#38BDF8] right-[-5%] bottom-[10%] opacity-[0.04]" />

      <div className="max-w-[900px] w-full mx-auto px-8 md:px-16">
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
            Tech <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-xl text-lg">
            A curated toolkit built through real‑world, production‑ready applications.
          </p>
        </motion.div>

        {/* Skill rows */}
        <div className="flex flex-col gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.07 }}
              className="glass-card rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-5"
            >
              {/* Left: icon + label — fixed width */}
              <div className="flex items-center gap-3 sm:w-52 shrink-0">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-lg shrink-0`}
                >
                  {group.icon}
                </div>
                <span className="font-display font-bold text-white text-sm leading-tight">
                  {group.category}
                </span>
              </div>

              {/* Thin vertical divider (desktop only) */}
              <div className="hidden sm:block w-px self-stretch bg-white/[0.07]" />

              {/* Right: pills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: gi * 0.05 + si * 0.04 }}
                    style={
                      {
                        "--accent": group.accent,
                      } as React.CSSProperties
                    }
                    className="px-3.5 py-1.5 rounded-full text-sm font-medium
                      bg-white/[0.05] border border-white/10 text-slate-300
                      hover:border-[var(--accent)]/60 hover:text-[var(--accent)] hover:bg-[var(--accent)]/10
                      transition-all duration-200 cursor-default select-none"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
