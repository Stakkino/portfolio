"use client";

import { motion } from "framer-motion";
import { GraduationCap, Cpu, BrainCircuit } from "lucide-react";

const formations = [
  {
    icon: Cpu,
    title: "Certification Arduino Base",
    org: "Tansfert Multisort Electronik Education",
    period: "2025",
    description: "Programmation embarquée, circuits de base.",
    badge: "Certification",
  },
  {
    icon: BrainCircuit,
    title: "Attestation IA et Automatisation",
    org: "Orange Digital Center Soarano",
    period: "Avril 2026",
    description: "Optimisation des processus.",
    badge: "Attestation",
  },
  {
    icon: GraduationCap,
    title: "Licence 2 Informatique",
    org: "Université FJKM Ravelojaona, Antananarivo",
    period: "En cours",
    description: "Formation universitaire en informatique.",
    badge: "En cours",
    current: true,
  },
];

export default function Formation() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-3 md:px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-2"
      >
        Formation
        <span className="text-blue-500">.</span>
      </motion.h2>
      <p className="text-neutral-500 mb-12">
        Parcours académique et formations complémentaires.
      </p>

      <div className="relative">
        {/* Ligne verticale */}
        <div className="absolute left-4.75 top-2 bottom-2 w-px bg-neutral-800" />

        <div className="flex flex-col gap-8">
          {formations.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex gap-5"
              >
                {/* Icône / point de la timeline */}
                <div className="relative z-10 shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                      f.current
                        ? "bg-blue-600 border-blue-500 shadow-lg shadow-blue-950/50"
                        : "bg-neutral-900 border-blue-500/30"
                    }`}
                  >
                    <Icon size={17} className={f.current ? "text-white" : "text-blue-400"} />
                  </div>
                  {f.current && (
                    <motion.span
                      animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full bg-blue-500/40"
                    />
                  )}
                </div>

                {/* Contenu */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex-1 bg-neutral-900/60 border border-neutral-800 rounded-xl px-5 py-4 hover:border-blue-500/50 transition-colors mb-0"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-white font-semibold">{f.title}</h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30 shrink-0">
                      {f.period}
                    </span>
                  </div>
                  <p className="text-blue-400 text-sm mb-1">{f.org}</p>
                  <p className="text-neutral-400 text-sm">{f.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}