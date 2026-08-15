"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle2, Flag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import GithubIcon from "@/components/icons/GithubIcon";

const PHONE = "+261 38 80 865 33";
const EMAIL = "jhenstakkino@gmail.com";
const CITY = "Antananarivo, Madagascar";
const GITHUB = "https://github.com/Stakkino";

export default function About() {
  const { t } = useLanguage();

  const infos = [
    { icon: Phone, label: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
    { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: CITY, href: undefined },
    { icon: Flag, label: "Malagasy 🇲🇬", href: undefined },
    { icon: CheckCircle2, label: t.about.openTo, href: undefined },
    { icon: GithubIcon, label: "github.com/Stakkino", href: GITHUB },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-3 md:px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-2"
      >
        {t.about.title}
        <span className="text-blue-500">.</span>
      </motion.h2>
      <p className="text-neutral-500 mb-10">{t.about.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6">
        {/* Carte bio principale */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:p-10 overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-64 h-64 bg-slate-700/20 rounded-full blur-3xl" />

          <p className="relative text-neutral-300 leading-relaxed mb-8 text-base md:text-lg">
            {t.about.bio}
          </p>

          <div className="relative flex flex-wrap gap-2 mb-8">
            {t.about.strengths.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="text-xs px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30 cursor-default"
              >
                {s}
              </motion.span>
            ))}
          </div>

          <motion.a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-blue-600 to-slate-800 text-white text-sm font-semibold shadow-lg shadow-blue-950/40 hover:shadow-blue-900/60 transition-shadow"
          >
            <GithubIcon size={16} />
            {t.about.viewGithub}
          </motion.a>
        </motion.div>

        {/* Colonne infos / contact */}
        <div className="grid grid-cols-1 gap-3">
          {infos.map((info, i) => {
            const Icon = info.icon;
            const content = (
              <>
                <span className="shrink-0 w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Icon className="text-blue-400" size={16} />
                </span>
                <span className="text-neutral-300 text-sm truncate">{info.label}</span>
              </>
            );

            const cardClass =
              "flex items-center gap-3 bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3.5 hover:border-blue-500/50 hover:bg-neutral-900 transition-colors";

            return info.href ? (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                whileHover={{ x: 4 }}
                className={cardClass}
              >
                {content}
              </motion.a>
            ) : (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className={cardClass}
              >
                {content}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}