"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import GithubIcon from "@/components/icons/GithubIcon";

// Données fixes par projet (liens, techs, étoiles), associées par clé.
// Le nom et la description viennent de translations.ts (t.projects.items).
const meta: Record<string, { tech: string[]; url: string; liveUrl?: string; stars?: number }> = {
  region_sofia: { tech: ["Django", "React", "PostgreSQL", "UML"], url: "https://github.com/Stakkino/region_sofia", stars: 1 },
  linked_brain: { tech: ["PostgreSQL", "Next"], url: "https://github.com/Edisthel/linked-brain", liveUrl: "https://www.linked-brain.com" },
  aglu: { tech: ["Django", "React", "Python"], url: "https://github.com/Stakkino/AGLU" },
  gestion_absence: { tech: ["Python", "SQLite", "React", "MERISE", "UML"], url: "https://github.com/Stakkino/GestionAbsence" },
  expense_app: { tech: ["Python", "PyQt6", "MySQL"], url: "https://github.com/Stakkino/ExpenseApp" },
  algo: { tech: ["C++"], url: "https://github.com/Stakkino/Algo-d-optimisation-et-de-recherche" },
};

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="max-w-6xl mx-auto px-3 md:px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-2"
      >
        {t.projects.title}
        <span className="text-blue-500">.</span>
      </motion.h2>
      <p className="text-neutral-500 mb-10">{t.projects.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {t.projects.items.map((p, i) => {
          const m = meta[p.key];
          if (!m) return null;
          return (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="group relative bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:p-7 overflow-hidden hover:border-blue-500/50 transition-colors flex flex-col"
            >
              <div className="pointer-events-none absolute -top-20 -right-20 w-52 h-52 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors" />

              <div className="relative flex items-start justify-between mb-3">
                <h3 className="text-white font-semibold text-lg">{p.name}</h3>
                {m.stars ? (
                  <span className="flex items-center gap-1 text-xs text-neutral-400">
                    <Star size={13} className="text-blue-400" />
                    {m.stars}
                  </span>
                ) : null}
              </div>

              <p className="relative text-neutral-400 text-sm leading-relaxed mb-5 flex-1">
                {p.description}
              </p>

              <div className="relative flex flex-wrap gap-2 mb-5">
                {m.tech.map((t2) => (
                  <span
                    key={t2}
                    className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30"
                  >
                    {t2}
                  </span>
                ))}
              </div>

              <div className="relative flex items-center gap-4 mt-auto">
                <a
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-blue-400 transition-colors w-fit"
                >
                  <GithubIcon size={15} />
                  {t.projects.viewGithub}
                  <ExternalLink size={12} />
                </a>

                {m.liveUrl && (
                  <a
                    href={m.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-blue-400 transition-colors w-fit"
                  >
                    <Globe size={15} />
                    {t.projects.viewLive}
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}