import React from "react";
import { Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    id: 1,
    title: "SDE Intern – Android Development",
    company: "PMStack",
    period: "Dec 2024 – Apr 2025",
    bullets: [
      "Developed mobile UI components with Flutter and analytics integration.",
      "Resolved 193+ frontend & backend issues.",
      "Worked with Flutter, Firebase, Dart.",
    ],
  },
  {
    id: 2,
    title: "Founding Engineer",
    company: "2nd Swap",
    period: "Jan 2025 – Apr 2025",
    bullets: [
      "Built backend with 12+ REST APIs (<200ms latency).",
      "OCR + OAuth verification system (99.8% uptime).",
      "Node.js, Express, MongoDB, Socket.io.",
    ],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Freelance",
    period: "Aug 2024 – Nov 2024",
    bullets: [
      "Built React & Tailwind landing pages.",
      "Improved SEO & Lighthouse score to 95+.",
      "API integrations for dynamic content.",
    ],
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "Startup Project",
    period: "Jan 2024 – Jul 2024",
    bullets: [
      "Designed scalable Express APIs.",
      "JWT authentication & role-based access.",
      "AWS EC2 & Docker deployment.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative w-full py-20 bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            My journey & achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-emerald-400 to-fuchsia-400 md:block" />

          <ol className="space-y-16">
            {EXPERIENCES.map((exp, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <li key={exp.id} className="relative grid md:grid-cols-2">
                  {/* Card */}
                  <div
                    className={`${
                      isLeft
                        ? "md:col-start-1 md:pr-12"
                        : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <AnimatedCard exp={exp} fromLeft={isLeft} />
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 top-6 hidden -translate-x-1/2 md:block">
                    <span className="block h-3 w-3 rounded-full bg-white shadow-[0_0_0_6px_rgba(16,185,129,0.15)] dark:bg-slate-900" />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ANIMATION ---------------- */

function AnimatedCard({ exp, fromLeft }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <ExperienceCard exp={exp} />
    </motion.div>
  );
}

/* ---------------- CARD ---------------- */

function ExperienceCard({ exp }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white">
            {exp.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {exp.company}
          </p>
        </div>

        <span className="flex items-center gap-1 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-[11px] text-slate-600 dark:text-slate-300">
          <Calendar className="h-3.5 w-3.5" />
          {exp.period}
        </span>
      </div>

      <ul className="mt-4 space-y-2">
        {exp.bullets.map((b, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
          >
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-500 shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
