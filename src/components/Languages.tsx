"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Languages() {
  const { t } = useLanguage();

  const items = [
    { flag: "🇲🇬", name: "Malagasy", level: t.languages.native },
    { flag: "🇫🇷", name: "Français", level: t.languages.fluent },
    { flag: "🇬🇧", name: "English", level: t.languages.intermediate },
  ];

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
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="relative bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 text-center overflow-hidden hover:border-blue-500/50 transition-colors"
          >
            <div className="pointer-events-none absolute -top-16 -right-16 w-36 h-36 bg-blue-600/10 rounded-full blur-3xl" />

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
            <p className="relative text-blue-400 text-sm mt-1">{item.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}