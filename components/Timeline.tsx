"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import { Calendar, Award } from "lucide-react";

export default function Timeline() {
  return (
    <section id="timeline" className="relative w-full overflow-hidden bg-bg-secondary/30 py-32 md:py-40">
      <div className="aurora-blob w-[400px] h-[400px] bg-[#14F1D9] left-[-10%] bottom-[20%] opacity-[0.04]" />

      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <div className="section-line" />
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mt-4">
            Education <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl text-lg">
            My academic foundation that paved the way for my software engineering career.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#14F1D9] via-[#38BDF8] to-transparent hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-0 gap-4`}
                >
                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                    <div className="glass-card glass-card-hover rounded-2xl p-6">
                      <div className={`flex items-center gap-2 mb-3 ${isLeft ? "md:justify-end" : "justify-start"}`}>
                        <Calendar size={13} className="text-slate-500" />
                        <span className="text-xs text-slate-500">{item.year}</span>
                        {item.badge && (
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#14F1D9]/10 border border-[#14F1D9]/20 text-[#14F1D9] font-medium">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="font-display font-bold text-white text-base mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#14F1D9] text-sm font-medium mb-2">
                        {item.institution}
                      </p>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0B1120] border-2 border-[#14F1D9] items-center justify-center z-10 shadow-[0_0_20px_rgba(20,241,217,0.4)]">
                    <Award size={16} className="text-[#14F1D9]" />
                  </div>

                  {/* Empty side spacer */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 glass-card rounded-2xl p-8"
        >
          <h3 className="font-display font-bold text-white text-xl mb-6 text-center">
            Relevant Coursework
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Object-Oriented Programming",
              "Software Engineering",
              "Database Management Systems",
              "Data Structures & Algorithms",
              "Web Application Development",
              "Mobile Application Development",
            ].map((course) => (
              <span key={course} className="skill-badge text-sm py-1.5 px-4">
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
