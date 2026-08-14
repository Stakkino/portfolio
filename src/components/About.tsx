"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle2, Flag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const PHONE = "[ton numéro]";
const EMAIL = "[ton-email@exemple.com]";
const CITY = "[Ta ville]";

const strengths = ["Curieux", "Autodidacte", "Rigoureux", "Esprit d'équipe", "Créatif"];

export default function About() {
  const { t } = useLanguage();

  const infos = [
    { icon: Phone, label: PHONE },
    { icon: Mail, label: EMAIL },
    { icon: MapPin, label: CITY },
    { icon: Flag, label: "Malagasy 🇲🇬" },
    { icon: CheckCircle2, label: "Ouvert aux opportunités" },
  ];

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-2"
      >
        {t.about.title}
        <span className="text-orange-500">.</span>
      </motion.h2>
      <p className="text-neutral-500 mb-8">{t.about.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8"
        >
          <p className="text-neutral-300 leading-relaxed mb-6">{t.about.bio}</p>

          <div className="flex flex-wrap gap-2">
            {strengths.map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-3">
          {infos.map((info, i) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 hover:border-orange-500/50 transition-colors"
              >
                <Icon className="text-orange-400 shrink-0" size={20} />
                <span className="text-neutral-300 text-sm">{info.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}