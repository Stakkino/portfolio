"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Lang } from "@/lib/translations";

const langs: { code: Lang; label: string }[] = [
  { code: "mg", label: "MG" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

// Durée totale d'un cycle d'animation du logo (en secondes)
const LOGO_CYCLE = 5;

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#education", label: t.nav.education },
    { href: "#projects", label: t.nav.projects },
    { href: "#languages", label: t.nav.languages },
    { href: "#hobbies", label: t.nav.hobbies },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-white font-bold text-lg inline-flex items-baseline">
          {/* Le "S" tourne sur lui-même sur 360°, puis s'arrête */}
          <motion.span
            className="inline-block text-2xl font-bold"
            animate={{ rotate: [0, 360, 360] }}
            transition={{
              duration: LOGO_CYCLE,
              repeat: Infinity,
              times: [0, 0.20, 1],
              ease: "easeInOut",
            }}
          >
            <span className="text-blue-500">S</span>
          </motion.span>

          {/* "takkino" se révèle de gauche à droite depuis le S, reste, puis se rétracte */}
          <motion.span
            className="inline-block"
            animate={{
              clipPath: [
                "inset(0 100% 0 0)",
                "inset(0 100% 0 0)",
                "inset(0 0% 0 0)",
                "inset(0 0% 0 0)",
                "inset(0 100% 0 0)",
              ],
            }}
            transition={{
              duration: LOGO_CYCLE,
              repeat: Infinity,
              times: [0, 0.20, 0.3, 0.95, 1],
              ease: "easeInOut",
            }}
          >
            <span className="text-blue-500">takkino</span>
          </motion.span>
        </span>

        <div className="hidden md:flex gap-5 text-sm text-neutral-300">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-blue-400 transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-1 text-xs">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2 py-1 rounded-full border transition-colors ${
                  lang === l.code
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-neutral-700 text-neutral-400 hover:border-blue-500 hover:text-blue-400"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-neutral-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}