"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const education = [
  {
    period: "[Année - Année]",
    title: "[Ton diplôme, ex: Licence 3 — Informatique]",
    place: "[Ton établissement]",
  },
  {
    period: "[Année - Année]",
    title: "[Diplôme précédent]",
    place: "[Établissement]",
  },
];

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-white mb-2">
        {t.education.title}<span className="text-orange-500">.</span>
      </h2>
      <p className="text-neutral-500 mb-8">{t.education.subtitle}</p>

      <div className="space-y-4">
        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col md:flex-row md:items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-orange-500/50 transition-colors"
          >
            <span className="text-orange-400 font-mono text-sm md:w-40 shrink-0">
              {item.period}
            </span>
            <div>
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-neutral-500 text-sm">{item.place}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}