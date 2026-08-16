"use client";

import { motion } from "framer-motion";
import { Server, Database, Sigma, LayoutTemplate, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import GithubIcon from "@/components/icons/GithubIcon";

const GITHUB = "https://github.com/Stakkino";

// Icône associée à chaque catégorie, par clé (les textes viennent de translations.ts)
const iconByKey: Record<string, typeof Server> = {
  backend: Server,
  db: Database,
  math: Sigma,
  frontend: LayoutTemplate,
  tools: Wrench,
};

// Couleur du point de niveau, par clé
const dotByKey: Record<string, string> = {
  backend: "bg-blue-500",
  db: "bg-blue-400",
  math: "bg-slate-400",
  frontend: "bg-slate-500",
  tools: "bg-blue-600",
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="max-w-6xl mx-auto px-3 md:px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-2"
      >
        {t.skills.title}
        <span className="text-blue-500">.</span>
      </motion.h2>
      <p className="text-neutral-500 mb-10">{t.skills.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {t.skills.categories.map((cat, i) => {
          const Icon = iconByKey[cat.key] ?? Server;
          return (
            <motion.div
              key={cat.key}
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
                <span className={`w-2 h-2 rounded-full ${dotByKey[cat.key] ?? "bg-blue-500"}`} />
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
        {t.skills.viewGithub}
      </motion.a>
    </section>
  );
}