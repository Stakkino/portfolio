"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Unbounded } from "next/font/google";
import { Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const nameParts = ["Nostos", "Duk'S", "Stakkino", "NJAKANERA"];

// La photo arrive en premier (glissée de droite vers sa position, à gauche).
// Le texte commence à apparaître juste après, en cascade.
const PHOTO_DURATION = 0.8;
const TEXT_START = 0.5;

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center max-w-7xl mx-auto px-5 pt-14">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 items-center w-full">
        {/* Colonne photo — à gauche, entre en glissant de droite à gauche */}
        <motion.div
          initial={{ opacity: 0, x: 250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: PHOTO_DURATION, ease: "easeOut" }}
          className="relative order-1 flex justify-center"
        >
          {/* Halo animé en fond */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: PHOTO_DURATION }}
            className="absolute inset-0 bg-linear-to-br from-blue-700 to-slate-950 rounded-full blur-3xl"
          />

          {/* Anneau qui respire (zoom in/out) */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: PHOTO_DURATION }}
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-full bg-linear-to-tr from-blue-600 via-slate-400 to-blue-900 p-0.75"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-black">
              <Image
                src="/images/profile.jpg"
                alt="Nostos Duk'S Stakkino NJAKANERA"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Colonne texte — à droite */}
        <div className="flex flex-col items-start order-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: TEXT_START }}
            className="text-white font-mono mb-4"
          >
            {t.hero.greeting}
          </motion.p>

          <h1
            className={`${unbounded.className} text-2xl md:text-4xl leading-tight mb-4 flex flex-wrap gap-x-3`}
          >
            {nameParts.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: TEXT_START + 0.2 + i * 0.12 }}
                className="bg-linear-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: TEXT_START + 0.8 }}
            className="text-lg md:text-2xl text-neutral-400 mb-6"
          >
            {t.hero.role}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: TEXT_START + 0.95 }}
            className="text-neutral-500 max-w-xl mb-8"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: TEXT_START + 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors"
            >
              {t.hero.cta}
            </a>

            <a
              href="/CV NJAKANERA Nostos Duk'S Stakkino.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-700 text-neutral-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
            >
              <Download size={15} />
              {t.hero.lcv}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}