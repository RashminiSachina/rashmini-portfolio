"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-40 overflow-hidden">
      <div className="aurora-blob w-[500px] h-[500px] bg-[#14F1D9] left-[20%] top-[10%] opacity-[0.05]" />
      <div className="aurora-blob w-[400px] h-[400px] bg-[#38BDF8] right-[-5%] bottom-[10%] opacity-[0.06]" />

      <div className="max-w-[896px] w-full mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="section-line" />
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mt-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl text-lg">
            Open to internship opportunities, collaborations, and interesting conversations. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — CTA card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 border border-[#14F1D9]/15 shadow-[0_0_50px_rgba(20,241,217,0.06)]"
          >
            <div className="mb-6">
              <h3 className="font-display font-black text-2xl text-white mb-3">
                Let's Build Something <span className="text-gradient">Amazing</span> 🚀
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm actively seeking a{" "}
                <span className="text-[#14F1D9] font-medium">Software Engineer Internship</span>{" "}
                in Sri Lanka or remotely. If you're looking for a passionate full-stack developer,
                let's talk!
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "rashminisachina@gmail.com",
                  href: "mailto:rashminisachina@gmail.com",
                  color: "text-[#14F1D9]",
                },
                {
                  icon: LinkedinIcon,
                  label: "LinkedIn",
                  value: "rashmini-sachina-a96171416",
                  href: "https://www.linkedin.com/in/rashmini-sachina-a96171416",
                  color: "text-[#38BDF8]",
                },
                {
                  icon: GithubIcon,
                  label: "GitHub",
                  value: "@RashminiSachina",
                  href: "https://github.com/RashminiSachina",
                  color: "text-slate-200",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+94 761110026",
                  href: "tel:+94761110026",
                  color: "text-purple-400",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Malabe, Sri Lanka",
                  href: "#",
                  color: "text-orange-400",
                },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 ${color} transition-colors`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Quick links + status */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Status card */}
            <div className="glass-card rounded-2xl p-6 border border-[#14F1D9]/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#14F1D9] animate-pulse shadow-[0_0_8px_rgba(20,241,217,0.8)]" />
                <span className="text-[#14F1D9] text-sm font-semibold">
                  Available for Opportunities
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Currently open to{" "}
                <span className="text-white font-medium">Software Engineer Internship</span> and{" "}
                <span className="text-white font-medium">Full-Stack Developer Intern</span> roles.
                Based in Sri Lanka, open to remote.
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="grid grid-cols-1 gap-3">
              <a
                href="mailto:rashminisachina@gmail.com"
                className="btn-primary justify-center text-sm py-3"
              >
                <Send size={16} className="relative z-10" />
                <span className="relative z-10">Send me an Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rashmini-sachina-a96171416"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline justify-center text-sm py-3"
              >
                <LinkedinIcon size={16} />
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/RashminiSachina"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline justify-center text-sm py-3"
              >
                <GithubIcon size={16} />
                View GitHub Profile
              </a>
            </div>

            {/* Tech summary */}
            <div className="glass-card rounded-2xl p-6 border border-white/5">
              <h4 className="font-display font-semibold text-white text-sm mb-4">
                Core Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Spring Boot",
                  "JWT Auth",
                  "Gemini AI",
                  "REST APIs",
                ].map((s) => (
                  <span key={s} className="skill-badge">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
