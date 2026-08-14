"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Lang } from "@/lib/translations";

const langs: { code: Lang; label: string }[] = [
  { code: "mg", label: "MG" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

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
        <span className="text-white font-bold text-lg">
          Stakkino<span className="text-blue-500">.</span>
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