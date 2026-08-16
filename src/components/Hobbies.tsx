"use client";

import { motion } from "framer-motion";
import { Trophy, Film, Plane } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const hobbies = [
  { icon: Trophy, name: "Basketball" },
  { icon: Film, name: "Cinéma" },
  { icon: Plane, name: "Voyage" },
];

export default function Hobbies() {
  const { t } = useLanguage();

  return (
    <section id="hobbies" className="max-w-6xl mx-auto px-3 md:px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-2"
      >
        {t.hobbies.title}
        <span className="text-blue-500">.</span>
      </motion.h2>
      <p className="text-neutral-500 mb-10">{t.hobbies.subtitle}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {hobbies.map((h, i) => {
          const Icon = h.icon;
          return (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="relative bg-neutral-900/60 border border-neutral-800 rounded-2xl p-8 text-center overflow-hidden hover:border-blue-500/50 transition-colors"
            >
              <div className="pointer-events-none absolute -bottom-16 -left-16 w-36 h-36 bg-blue-600/10 rounded-full blur-3xl" />

              <motion.div
                className="relative w-14 h-14 mx-auto mb-3 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              >
                <Icon className="text-blue-400" size={22} />
              </motion.div>
              <h3 className="relative text-white font-semibold">{h.name}</h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

