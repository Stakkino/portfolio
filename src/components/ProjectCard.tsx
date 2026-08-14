"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-orange-500 transition-colors duration-300"
    >
      <div className="relative w-full h-48">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-neutral-400 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-sm font-medium text-orange-400 hover:text-orange-300"
        >
          {t.projects.viewGithub}
          <span className="transition-transform group-hover:translate-x-1">-&gt;</span>
        </a>
      </div>
    </motion.div>
  );
}