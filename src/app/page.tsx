"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import ProjectCard from "@/components/Projects";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />

      <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-white mb-2">
          {t.projects.title}<span className="text-orange-500">.</span>
        </h2>
        <p className="text-neutral-500 mb-8">{t.projects.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </section>

      <Languages />
      <Hobbies />
      <Contact />
    </main>
  );
}