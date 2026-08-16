"use client";

import { motion } from "framer-motion";
import { GraduationCap, Cpu, BrainCircuit } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Icône + statut "en cours" associés à chaque étape, par clé
// (les textes viennent de translations.ts)
const iconByKey: Record<string, typeof GraduationCap> = {
  arduino: Cpu,
  ia: BrainCircuit,
  licence: GraduationCap,
};

const currentByKey: Record<string, boolean> = {
  licence: true,
};

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="max-w-6xl mx-auto px-3 md:px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-2"
      >
        {t.education.title}
        <span className="text-blue-500">.</span>
      </motion.h2>
      <p className="text-neutral-500 mb-12">{t.education.subtitle}</p>

      <div className="relative">
        <div className="absolute left-4.75 top-2 bottom-2 w-px bg-neutral-800" />

        <div className="flex flex-col gap-8">
          {t.education.items.map((f, i) => {
            const Icon = iconByKey[f.key] ?? GraduationCap;
            const isCurrent = currentByKey[f.key] ?? false;
            return (
              <motion.div
                key={f.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex gap-5"
              >
                <div className="relative z-10 shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                      isCurrent
                        ? "bg-blue-600 border-blue-500 shadow-lg shadow-blue-950/50"
                        : "bg-neutral-900 border-blue-500/30"
                    }`}
                  >
                    <Icon size={17} className={isCurrent ? "text-white" : "text-blue-400"} />
                  </div>
                  {isCurrent && (
                    <motion.span
                      animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full bg-blue-500/40"
                    />
                  )}
                </div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex-1 bg-neutral-900/60 border border-neutral-800 rounded-xl px-5 py-4 hover:border-blue-500/50 transition-colors mb-0"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-white font-semibold">{f.title}</h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30 shrink-0">
                      {f.period}
                    </span>
                  </div>
                  <p className="text-blue-400 text-sm mb-1">{f.org}</p>
                  <p className="text-neutral-400 text-sm">{f.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}