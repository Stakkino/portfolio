"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Chaque carte utilise la vraie photo du drapeau en fond
// (fichiers à placer dans public/images/flags/)
const items = [
  { flag: "🇲🇬", code: "MG", name: "Malagasy", bg: "/images/madagascar.jpg" },
  { flag: "🇫🇷", code: "FR", name: "Français", bg: "/images/france.jpg" },
  { flag: "🇬🇧", code: "GB", name: "English", bg: "/images/uk.jpg" },
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
            {/* Fond = photo réelle du drapeau */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${item.bg}')` }}
            />
            {/* Voile sombre pour garder le texte lisible */}
            <div className="absolute inset-0 bg-neutral-950/70 group-hover:bg-neutral-950/60" />

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