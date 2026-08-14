"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const skills = [
  "Python", "Django", "C++", "MySQL", "PostgreSQL",
  "React", "Next.js", "Git & GitHub", "UML", "Intelligence Artificielle",
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-white mb-2">
        {t.skills.title}<span className="text-orange-500">.</span>
      </h2>
      <p className="text-neutral-500 mb-8">{t.skills.subtitle}</p>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="px-4 py-2 rounded-full border border-neutral-700 text-neutral-300 hover:border-orange-500 hover:text-orange-400 transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}