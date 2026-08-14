export type Project = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Region Sofia",
    description:
      "Plateforme numérique territoriale fullstack pour la cartographie, la gestion et l'analyse démographique des districts et communes de la Région Sofia, Madagascar.",
    stack: ["Django", "React", "PostgreSQL"],
    image: "/images/projects/region-sofia.png",
    githubUrl: "https://github.com/Stakkino/region_sofia",
  },
  {
    title: "AGLU",
    description:
      "Application web fullstack de gestion des logements et chambres universitaires, développée en équipe, avec système d'attribution et de suivi en temps réel.",
    stack: ["Django", "React"],
    image: "/images/projects/aglu.png",
    githubUrl: "https://github.com/Stakkino/AGLU",
  },
  {
    title: "ExpenseApp",
    description:
      "Application desktop de gestion des dépenses personnelles. Permet de suivre, organiser et analyser ses dépenses quotidiennes.",
    stack: ["Python", "PyQt6", "MySQL"],
    image: "/images/projects/expenseapp.png",
    githubUrl: "https://github.com/Stakkino/ExpenseApp",
  },
  {
    title: "Algorithmes d'optimisation",
    description:
      "Implémentation des principales stratégies algorithmiques : Greedy, Programmation Dynamique, Backtracking et Branch & Bound.",
    stack: ["C++"],
    image: "/images/projects/algo-optimisation.png",
    githubUrl: "https://github.com/Stakkino/Algo-d-optimisation-et-de-recherche",
  },
];