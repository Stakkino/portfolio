"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, Globe } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

const projects = [
  {
    name: "region_sofia",
    description:
      "Plateforme numérique territoriale (Fullstack Django & React) pour la cartographie, la gestion et l'analyse démographique des districts et communes de la Région Sofia, Madagascar.",
    tech: ["Django", "React", "PostgreSQL", "UML"],
    url: "https://github.com/Stakkino/region_sofia",
    stars: 1,
  },
  {
    name: "Linked-Brain",
    description:
      "Plateforme web en production, co-développée en équipe : numérisation d'exercices de Maths et Physique-Chimie en contenu structuré, conception des modèles et de la logique métier.",
    tech: ["Django", "React"],
    url: "https://github.com/Edisthel/linked-brain",
    liveUrl: "https://www.linked-brain.com",
  },
  {
    name: "AGLU",
    description:
      "Application web fullstack (Django & React) de gestion des logements et chambres universitaires, développée en équipe, avec système d'attribution et de suivi en temps réel.",
    tech: ["Django", "React", "Python"],
    url: "https://github.com/Stakkino/AGLU",
  },
  {
    name: "Système de gestion d'absences",
    description:
      "Modélisation et structuration des tables (UML + MERISE), scripts d'automatisation en Python — travail d'équipe, frontend pris en charge séparément.",
    tech: ["Python", "SQLite", "React", "MERISE", "UML"],
    url: "https://github.com/Stakkino/GestionAbsence",
  },
  {
    name: "ExpenseApp",
    description:
      "Application desktop de gestion des dépenses personnelles développée avec Python, PyQt6 et MySQL, pour suivre, organiser et analyser les dépenses quotidiennes.",
    tech: ["Python", "PyQt6", "MySQL"],
    url: "https://github.com/Stakkino/ExpenseApp",
  },
  {
    name: "Algo d'optimisation et de recherche",
    description:
      "Implémentation en C++ des principales stratégies algorithmiques : Greedy, Programmation Dynamique, Backtracking et Branch & Bound.",
    tech: ["C++"],
    url: "https://github.com/Stakkino/Algo-d-optimisation-et-de-recherche",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-3 md:px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-2"
      >
        Projets
        <span className="text-blue-500">.</span>
      </motion.h2>
      <p className="text-neutral-500 mb-10">
        Une sélection de projets, du fullstack en équipe aux implémentations algorithmiques.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -4 }}
            className="group relative bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:p-7 overflow-hidden hover:border-blue-500/50 transition-colors flex flex-col"
          >
            <div className="pointer-events-none absolute -top-20 -right-20 w-52 h-52 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors" />

            <div className="relative flex items-start justify-between mb-3">
              <h3 className="text-white font-semibold text-lg">{p.name}</h3>
              {p.stars ? (
                <span className="flex items-center gap-1 text-xs text-neutral-400">
                  <Star size={13} className="text-blue-400" />
                  {p.stars}
                </span>
              ) : null}
            </div>

            <p className="relative text-neutral-400 text-sm leading-relaxed mb-5 flex-1">
              {p.description}
            </p>

            <div className="relative flex flex-wrap gap-2 mb-5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="relative flex items-center gap-4 mt-auto">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-blue-400 transition-colors w-fit"
              >
                <GithubIcon size={15} />
                Voir le repo
                <ExternalLink size={12} />
              </a>

              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-blue-400 transition-colors w-fit"
                >
                  <Globe size={15} />
                  Site live
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}