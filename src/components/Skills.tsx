"use client";

import { motion } from "framer-motion";
import {
  Server,
  Database,
  Sigma,
  LayoutTemplate,
  Wrench,
} from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

const GITHUB = "https://github.com/Stakkino";

type Level = "En cours" | "Passionné" | "Fondations" | "Bases" | "Usage quotidien";

const levelColor: Record<Level, string> = {
  "En cours": "bg-blue-500",
  Passionné: "bg-blue-400",
  Fondations: "bg-slate-400",
  Bases: "bg-slate-500",
  "Usage quotidien": "bg-blue-600",
};

const categories: {
  icon: typeof Server;
  title: string;
  level: Level;
  skills: string[];
}[] = [
  {
    icon: Server,
    title: "Backend",
    level: "En cours",
    skills: ["Python", "Django", "C++"],
  },
  {
    icon: Database,
    title: "Bases de données & Modélisation",
    level: "Passionné",
    skills: ["UML", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    icon: Sigma,
    title: "Mathématiques",
    level: "Fondations",
    skills: ["Algèbre", "Analyse", "Logique"],
  },
  {
    icon: LayoutTemplate,
    title: "Frontend",
    level: "Bases",
    skills: ["HTML5", "CSS3", "React", "Next"],
  },
  {
    icon: Wrench,
    title: "Outils",
    level: "Usage quotidien",
    skills: ["Git", "GitHub", "VS Code", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-3 md:px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-2"
      >
        Compétences
        <span className="text-blue-500">.</span>
      </motion.h2>
      <p className="text-neutral-500 mb-10">
        Approche mathématique et rigoureuse du développement — logique, structure, architecture claire.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 overflow-hidden hover:border-blue-500/50 transition-colors"
            >
              <div className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors" />

              <div className="relative flex items-center gap-3 mb-4">
                <span className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Icon className="text-blue-400" size={20} />
                </span>
                <h3 className="text-white font-semibold">{cat.title}</h3>
              </div>

              <div className="relative flex items-center gap-2 mb-4">
                <span className={`w-2 h-2 rounded-full ${levelColor[cat.level]}`} />
                <span className="text-xs text-neutral-400">{cat.level}</span>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700 group-hover:border-blue-500/30 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.a
        href={GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-blue-600 to-slate-800 text-white text-sm font-semibold shadow-lg shadow-blue-950/40 hover:shadow-blue-900/60 transition-shadow"
      >
        <GithubIcon size={16} />
        Voir mon parcours complet sur GitHub
      </motion.a>
    </section>
  );
}