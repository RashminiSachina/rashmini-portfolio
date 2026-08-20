"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import ProgressRing from "./ui/ProgressRing";

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-40 overflow-hidden">
      <div className="aurora-blob w-[350px] h-[350px] bg-[#14F1D9] left-[-5%] top-[30%] opacity-[0.06]" />

      <div className="max-w-[1280px] w-full mx-auto px-8 md:px-16 lg:px-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="section-line" />
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mt-4">
            Tech <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl text-lg">
            A curated toolkit built through building real-world, production-ready applications.
          </p>
        </motion.div>

        {/* Skill groups grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="glass-card glass-card-hover rounded-2xl p-6"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#14F1D9]/20 to-[#38BDF8]/10 flex items-center justify-center text-xl">
                  {group.icon}
                </div>
                <h3 className="font-display font-bold text-white text-lg">
                  {group.category}
                </h3>
              </div>

              {/* Progress rings */}
              <div className="grid grid-cols-2 gap-6 justify-items-center mt-8">
                {group.skills.map((skill) => (
                  <ProgressRing
                    key={skill.name}
                    level={skill.level}
                    size={80}
                    strokeWidth={6}
                    label={skill.name}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra badges row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {[
            "CRUD Operations",
            "OOP",
            "Database Design",
            "Android Studio",
            "Software Engineering",
            "Web Application Development",
            "Mobile Development",
            "API Integration",
            "Full-Stack Development",
          ].map((tag) => (
            <span key={tag} className="skill-badge text-sm py-1.5 px-4">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
