"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const hobbies = [
  { title: "[Loisir 1]", desc: "[courte description]" },
  { title: "[Loisir 2]", desc: "[courte description]" },
  { title: "[Loisir 3]", desc: "[courte description]" },
];

export default function Hobbies() {
  const { t } = useLanguage();

  return (
    <section id="hobbies" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-white mb-2">
        {t.hobbies.title}<span className="text-orange-500">.</span>
      </h2>
      <p className="text-neutral-500 mb-8">{t.hobbies.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {hobbies.map((hobby, i) => (
          <motion.div
            key={hobby.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-orange-500/50 transition-colors"
          >
            <h3 className="text-white font-semibold mb-1">{hobby.title}</h3>
            <p className="text-neutral-500 text-sm">{hobby.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}