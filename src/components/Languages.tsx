"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Couleurs du drapeau de chaque pays, utilisées pour le dégradé de fond de chaque carte
const items = [
  { flag: "🇲🇬", code: "MG", name: "Malagasy", from: "from-green-600", via: "via-white/10", to: "to-red-600" },
  { flag: "🇫🇷", code: "FR", name: "Français", from: "from-blue-600", via: "via-white/10", to: "to-red-600" },
  { flag: "🇬🇧", code: "GB", name: "English", from: "from-blue-700", via: "via-white/10", to: "to-red-600" },
];

export default function Languages() {
  const { t } = useLanguage();

  const levels = [t.languages.native, t.languages.fluent, t.languages.intermediate];

  return (
    <section id="languages" className="max-w-6xl mx-auto px-3 md:px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-2"
      >
        {t.languages.title}
        <span className="text-blue-500">.</span>
      </motion.h2>
      <p className="text-neutral-500 mb-10">{t.languages.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <motion.div
            key={item.code}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="relative rounded-2xl p-6 text-center overflow-hidden border border-neutral-800 hover:border-blue-500/50 transition-colors"
          >
            {/* Fond = couleurs du drapeau, en dégradé sombre */}
            <div
              className={`absolute inset-0 bg-linear-to-br ${item.from} ${item.via} ${item.to} opacity-15`}
            />
            <div className="absolute inset-0 bg-neutral-950/70" />

            {/* Drapeau géant en filigrane */}
            <div className="absolute -bottom-6 -right-4 text-8xl opacity-15 select-none pointer-events-none rotate-6">
              {item.flag}
            </div>

            <motion.div
              className="relative text-4xl mb-3"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.15 + i * 0.1 }}
            >
              {item.flag}
            </motion.div>
            <h3 className="relative text-white font-semibold">{item.name}</h3>
            <p className="relative text-blue-400 text-sm mt-1">{levels[i]}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}