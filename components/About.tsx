"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Brain, MapPin, Calendar } from "lucide-react";

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
    <section id="about" className="relative py-32 md:py-40 overflow-hidden">
      <div className="aurora-blob w-[400px] h-[400px] bg-[#38BDF8] right-[-5%] top-[20%] opacity-[0.06]" />

      <div className="max-w-[1280px] w-full mx-auto px-8 md:px-16 lg:px-24">
        {/* Heading */}
        <motion.div
          variants={inView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="section-line" />
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mt-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl text-lg">
            Passionate about building digital solutions that sit at the intersection of elegance and intelligence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Story */}
          <motion.div
            variants={inView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8 space-y-5">
              <h3 className="font-display font-bold text-2xl text-white">
                Who Am I?
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I'm <span className="text-[#14F1D9] font-semibold">Rashmini Sachina Chathuranganie</span>, an
                Information Technology undergraduate at SLIIT with hands-on experience building
                full-stack web applications using the{" "}
                <span className="text-[#38BDF8] font-medium">MERN stack</span> and Spring Boot.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I specialize in RESTful API development, JWT authentication, role-based access control,
                and seamlessly integrating AI-powered features including{" "}
                <span className="text-[#14F1D9] font-medium">Gemini AI</span> and{" "}
                <span className="text-[#14F1D9] font-medium">Tesseract.js OCR</span> into
                production web applications.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Currently seeking a{" "}
                <span className="text-[#38BDF8] font-semibold">Software Engineer Internship</span> to
                contribute to real-world software solutions while continuing to grow as an engineer.
              </p>

              {/* Languages */}
              <div className="pt-2 border-t border-white/5">
                <p className="text-sm text-slate-500 mb-3">Languages</p>
                <div className="flex gap-3">
                  {["Sinhala 🌺", "English 🇬🇧"].map((lang) => (
                    <span key={lang} className="skill-badge">{lang}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, value, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card glass-card-hover rounded-xl p-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#14F1D9]/10 flex items-center justify-center mb-3">
                    <Icon size={18} className="text-[#14F1D9]" />
                  </div>
                  <p className="text-xs text-slate-500 mb-1">{label}</p>
                  <p className="font-display font-semibold text-sm text-white">{value}</p>
                  <p className="text-xs text-slate-500">{sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Education timeline */}
          <motion.div
            variants={inView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-display font-bold text-xl text-white mb-8">
              Education Journey
            </h3>

            <div className="relative space-y-0">
              {/* Vertical line */}
              <div className="absolute left-[6px] top-3 bottom-3 w-px bg-gradient-to-b from-[#14F1D9] via-[#38BDF8] to-transparent" />

              {[
                {
                  year: "2024 – Present",
                  degree: "BSc (Hons) Information Technology",
                  school: "SLIIT, Malabe",
                  detail: "CGPA: 3.2 · Expected Graduation: 2027 · Specialization: Information Technology",
                  badge: "🎓 In Progress",
                  color: "text-[#14F1D9] border-[#14F1D9]/30 bg-[#14F1D9]/10",
                },
                {
                  year: "2022",
                  degree: "G.C.E. Advanced Level",
                  school: "B/Dharmapala Maha Vidyalaya, Bandarawela",
                  detail: "Physical Science Stream · Results: 1C, 2S",
                  badge: "📐 A/Levels",
                  color: "text-[#38BDF8] border-[#38BDF8]/30 bg-[#38BDF8]/10",
                },
                {
                  year: "2017",
                  degree: "G.C.E. Ordinary Level",
                  school: "B/Keppetipola Maha Vidyalaya",
                  detail: "Outstanding results: 7 A passes · 2 C passes",
                  badge: "⭐ 7A 2C",
                  color: "text-purple-400 border-purple-400/30 bg-purple-400/10",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="relative pl-10 pb-10 last:pb-0"
                >
                  <div className="timeline-node absolute left-0 top-1.5" />
                  <div className="glass-card rounded-xl p-5 hover:border-[#14F1D9]/20 transition-colors">
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Calendar size={12} />
                        {item.year}
                      </div>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${item.color}`}>
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="font-display font-semibold text-white text-sm md:text-base lg:text-lg mb-1.5">
                      {item.degree}
                    </h4>
                    <p className="text-[#14F1D9] text-sm mb-3 font-medium">{item.school}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
