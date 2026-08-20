"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface ProgressRingProps {
  level: number; // 0-100
  size?: number;
  strokeWidth?: number;
  label: string;
}

export default function ProgressRing({
  level,
  size = 80,
  strokeWidth = 6,
  label,
}: ProgressRingProps) {
  const ref = useRef<SVGCircleElement>(null);
  const isInView = useInView(ref, { once: true });
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="-rotate-90"
          aria-label={`${label}: ${level}%`}
        >
          {/* Background ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={strokeWidth}
          />
          {/* Progress ring */}
          <motion.circle
            ref={ref}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#ringGradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            animate={
              isInView
                ? { strokeDashoffset: offset }
                : { strokeDashoffset: circumference }
            }
            initial={{ strokeDashoffset: circumference }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
          />
          <defs>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14F1D9" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
        </svg>
        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display font-bold text-sm text-gradient">
            {level}%
          </span>
        </div>
      </div>
      <p className="text-xs text-slate-400 text-center leading-tight max-w-[80px]">
        {label}
      </p>
    </div>
  );
}
