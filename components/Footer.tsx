"use client";

import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative py-10 border-t border-white/5">
      <div className="max-w-[1280px] w-full mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#14F1D9] to-[#38BDF8] flex items-center justify-center text-[#0B1120] font-black text-xs font-display">
              RS
            </div>
            <div>
              <p className="font-display font-bold text-sm text-white">Rashmini Sachina</p>
              <p className="text-slate-500 text-xs">Full-Stack Developer · SLIIT</p>
            </div>
          </div>

          {/* Center */}
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Built with <Heart size={13} className="text-[#14F1D9] fill-[#14F1D9]" /> using Next.js & Tailwind
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: GithubIcon, href: "https://github.com/RashminiSachina", label: "GitHub" },
              { icon: LinkedinIcon, href: "https://www.linkedin.com/in/rashmini-sachina-a96171416", label: "LinkedIn" },
              { icon: Mail, href: "mailto:rashminisachina@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-slate-500 hover:text-[#14F1D9] hover:bg-[#14F1D9]/10 transition-colors"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 text-center text-slate-600 text-xs">
          © {year} Rashmini Sachina Chathuranganie · All rights reserved
        </div>
      </div>
    </footer>
  );
}
