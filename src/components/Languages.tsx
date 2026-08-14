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
    <section id="languages" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-white mb-2">
        {t.languages.title}<span className="text-orange-500">.</span>
      </h2>
      <p className="text-neutral-500 mb-8">{t.languages.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center hover:border-orange-500/50 transition-colors"
          >
            <div className="text-3xl mb-2">{item.flag}</div>
            <h3 className="text-white font-semibold">{item.name}</h3>
            <p className="text-orange-400 text-sm">{item.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}