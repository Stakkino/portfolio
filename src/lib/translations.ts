export type Lang = "fr" | "mg" | "en";

export type SkillCategory = { key: string; title: string; level: string; skills: string[] };
export type EducationItem = { key: string; title: string; org: string; period: string; description: string; badge: string };
export type ProjectItem = { key: string; name: string; description: string };

export const translations: Record<Lang, {
  nav: { about: string; skills: string; education: string; projects: string; languages: string; hobbies: string; contact: string };
  hero: { greeting: string; role: string; tagline: string; cta: string ; lcv: string };
  about: { title: string; subtitle: string; bio: string; strengths: string[]; openTo: string; viewGithub: string };
  skills: { title: string; subtitle: string; viewGithub: string; categories: SkillCategory[] };
  education: { title: string; subtitle: string; items: EducationItem[] };
  projects: { title: string; subtitle: string; viewGithub: string; viewLive: string; items: ProjectItem[] };
  languages: { title: string; subtitle: string; native: string; fluent: string; intermediate: string };
  hobbies: { title: string; subtitle: string };
  contact: { title: string; subtitle: string; name: string; email: string; message: string; send: string; sending: string; success: string; error: string };
  footer: { thanks: string; rights: string };
}> = {

  //------------------------------------------------------------
  // ~~~~~ Francais ~~~~~~~
  //------------------------------------------------------------
  fr: {
    
    nav: { about: "À propos", skills: "Compétences", education: "Formation", projects: "Projets", languages: "Langues", hobbies: "Loisirs", contact: "Contact" },
    
    hero: {
      greeting: "Bienvenue, je suis",
      role: "Développeur backend & bases de données, passionné d'intelligence artificielle et l'innovation numérique",
      tagline: "Je construis des systèmes de données clairs et fiables, et j'explore l'intelligence artificielle (IA) pour aller plus loin,   concevant ainsi des architectures robustes et innovantes prête à relever les défis de demain.",
      cta: "Voir mes projets",
      lcv : "Télécharger mon cv",
    },
    
    about: {
      title: "À propos de moi",
      subtitle: "Toutes les informations essentielles pour vous faire une idée précise de mon profil.",
      bio: "Étudiant en informatique avec un grand intérêt pour les bases de données, je m'investis dans la création de projet porteurs de sens. J'occupe d'ailleurs le poste de Secrétaire Général de l'association Linked-Brain, qui développe actuellement une platforme numérique d'apprentissage. Face à chaque problème rencontré, j'aime chercher la solution en adoptant d'abord une vision mathématique avant d'avancer dans la conception. Mon ambition est de bâtir des systèmes fiables, tout en étudiant continuellement comment l'intelligence artificielle peut venir les enrichir.",
      strengths: ["Curieux", "Autodidacte", "Rigoureux", "Esprit d'équipe", "Créatif"],
      openTo: "Ouvert aux opportunités",
      viewGithub: "Voir mon GitHub",
    },
    
    skills: {
      title: "Compétences", subtitle: "Une stack orientée données, backend et intelligence artificielle.",
      viewGithub: "Voir mon parcours complet sur GitHub",
      categories: [
        { key: "backend", title: "Backend", level: "En cours", skills: ["Python", "Django", "C++"] },
        { key: "db", title: "Bases de données & Modélisation", level: "Passionné", skills: ["UML", "MySQL", "PostgreSQL", "SQLite"] },
        { key: "math", title: "Mathématiques", level: "Fondations", skills: ["Algèbre", "Analyse", "Logique"] },
        { key: "frontend", title: "Frontend", level: "Bases", skills: ["HTML5", "CSS3","JS", "React", "Next"] },
        { key: "tools", title: "Outils", level: "Usage quotidien", skills: ["Git", "GitHub", "VS Code"] },
      ],
    },
    
    education: {
      title: "Formation", subtitle: "Un parcours académique en informatique.",
      items: [
        { key: "arduino", title: "Certification Arduino Base", org: "Tansfert Multisort Electronik Education", period: "2025", description: "Programmation embarquée, circuits de base.", badge: "Certification" },
        { key: "ia", title: "Attestation IA et Automatisation", org: "Orange Digital Center Soarano", period: "Avril 2026", description: "Optimisation des processus.", badge: "Attestation" },
        { key: "licence", title: "Licence 2 Informatique", org: "Oniversity FJKM Ravelojaona, Antananarivo", period: "En cours", description: "Formation universitaire en informatique.", badge: "En cours" },
      ],
    },
    
    projects: {
      title: "Projets", subtitle: "Des projets concrets reflétant mes compétences techniques.",
      viewGithub: "Voir le repo", viewLive: "Site live",
      items: [
        { key: "region_sofia", name: "region_sofia", description: "Plateforme numérique territoriale (Fullstack Django & React) pour la cartographie, la gestion et l'analyse démographique des districts et communes de la Région Sofia, Madagascar." },
        { key: "linked_brain", name: "Linked-Brain", description: "Plateforme web en production, co-développée en équipe : numérisation d'exercices de Maths et Physique-Chimie en contenu structuré, conception des modèles et de la logique métier." },
        { key: "aglu", name: "AGLU", description: "Application web fullstack (Django & React) de gestion des logements et chambres universitaires, développée en équipe, avec système d'attribution et de suivi en temps réel." },
        { key: "gestion_absence", name: "Système de gestion d'absences", description: "Modélisation et structuration des tables (UML + MERISE), scripts d'automatisation en Python — travail d'équipe, frontend pris en charge séparément." },
        { key: "expense_app", name: "ExpenseApp", description: "Application desktop de gestion des dépenses personnelles développée avec Python, PyQt6 et MySQL, pour suivre, organiser et analyser les dépenses quotidiennes." },
        { key: "algo", name: "Algo d'optimisation et de recherche", description: "Implémentation en C++ des principales stratégies algorithmiques : Greedy, Programmation Dynamique, Backtracking et Branch & Bound." },
      ],
    },
    
    languages: { title: "Langues", subtitle: "Capacité à travailler dans des environnements multilingues.", native: "Langue maternelle", fluent: "Intermédiaire", intermediate: "Tecnique et Professionnel" },
    
    hobbies: { title: "Loisirs & Passions", subtitle: "En dehors du code, ce qui me ressource." },
    
    contact: {
      title: "Me contacter", subtitle: "Disponible pour un stage, un emploi ou une collaboration.",
      name: "Votre nom", email: "Votre email", message: "Votre message", send: "Envoyer le message",
      sending: "Envoi en cours...", success: "Message envoyé, merci !", error: "Une erreur est survenue, réessaie ou écris-moi directement par email.",
    },
    
    footer: { thanks: "Merci d'avoir visité mon portfolio.", rights: "Tous droits réservés." },
  },



  //------------------------------------------------------------
  // ~~~~~ MALAGASY ~~~~~~~
  //------------------------------------------------------------
  mg: {

    nav: { about: "Mombamomba ahy", skills: "Fahaiza-manao", education: "Fianarana", projects: "Tetikasa", languages: "Fiteny", hobbies: "Fialam-boly", contact: "Fifandraisana" },
    
    hero: {
      greeting: "Tongasoa, izaho no",
      role: "Mpamorona rafitra backend & fototao-drakitra, mazoto amin'ny faharanitan-tsaina voafetra sy zava-baovao ara-teknolojia",
      tagline: "Manamboatra rafitra angon-drakitra mazava sy azo antoka aho, ary mandalina ny faharanitan-tsaina voafetra (AI) mba handrosoana lavitra kokoa, mamorona rafitra matanjaka sy vaovao vonona hiatrika ny fanamby rahampitso.",
      cta: "Jereo ny tetikasako",
      lcv : "Ampidino ny cv-ko",
    },
    
    about: {
      title: "Mombamomba ahy",
      subtitle: "Ny fampahalalana rehetra ilaina hahafantaranao ny profil-ko.",
      bio: "Amin'ny maha mpianatra momba ny informatika liana amin'ny fitantanana fototao-drakitra ahy, dia mirotsaka an-tsehatra amin'ny famoronana tetikasa mitondra vahaolana aho. Izany indrindra no isahanako ny toeran'ny Sekretera Jeneralin'ny Linked-Brain, izay mamolavola sehatra fianarana nomerika amin'izao fotoana izao. Manoloana ny olana tsirairay, dia tiako hatrany ny mijery ny vahaolana miainga amin'ny fomba fijery ara-matematika aloha vao mandroso amin'ny fanatanterahana. Ny tanjoko dia ny hanamboatra rafitra azo antoka, sady mandinika mandrakariva ny fomba ahafahan'ny faharanitan-tsaina voafetra manatsara izany.",
      strengths: ["Mpikaroka", "Mianatra irery", "Marina", "Fiaraha-miasa", "Mahay mamorona"],
      openTo: "Vonona amin'ny fahafahana",
      viewGithub: "Jereo ny GitHub-ko",
    },
    
    skills: {
      title: "Fahaiza-manao", subtitle: "Fahaizana mikendrika angon-drakitra, backend ary AI.",
      viewGithub: "Jereo ny dianay feno ao amin'ny GitHub",
      categories: [
        { key: "backend", title: "Backend", level: "Eo am-pandalinana", skills: ["Python", "Django", "C++"] },
        { key: "db", title: "Angon-drakitra & Modelisation", level: "Tia be", skills: ["UML", "MySQL", "PostgreSQL", "SQLite"] },
        { key: "math", title: "Matematika", level: "Fototra matanjaka", skills: ["Aljebra", "Fandinihana", "Lôjika"] },
        { key: "frontend", title: "Frontend", level: "Fototra fotsiny", skills: ["HTML5", "CSS3", "JS", "React", "Next"] },
        { key: "tools", title: "Fitaovana", level: "Ampiasaina isan'andro", skills: ["Git", "GitHub", "VS Code"] },
      ],
    },
    
    education: {
      title: "Fianarana", subtitle: "Dingam-pianarana amin'ny informatika.",
      items: [
        { key: "arduino", title: "Fanamarinana Arduino Fototra", org: "Tansfert Multisort Electronik Education", period: "2025", description: "Fandaharana embarquée, faritry ny circuit fototra.", badge: "Fanamarinana" },
        { key: "ia", title: "Taratasy IA sy Fanatontoloana", org: "Orange Digital Center Soarano", period: "Aprily 2026", description: "Fanatsarana ny fizotran'asa.", badge: "Taratasy fanamarinana" },
        { key: "licence", title: "Licence 2 amin'ny Informatika", org: "Oniversity FJKM Ravelojaona, Antananarivo", period: "Mbola mianatra", description: "Fianarana ambony amin'ny informatika.", badge: "Mbola mianatra" },
      ],
    },
    
    projects: {
      title: "Tetikasa", subtitle: "Tetikasa marina mampiseho ny fahaizako.",
      viewGithub: "Jereo ny repo", viewLive: "Tranonkala mivantana",
      items: [
        { key: "region_sofia", name: "region_sofia", description: "Sehatra nomerika ho an'ny faritra (Fullstack Django & React) ho an'ny sarintany, ny fitantanana ary ny famakafakana demografika amin'ny distrika sy kaominina ao amin'ny Faritra Sofia, Madagasikara." },
        { key: "linked_brain", name: "Linked-Brain", description: "Sehatra web efa miasa, niarahana namolavola tamin'ny ekipa: fanaovana angon-drakitra nomerika ny fanazaran-tena Matematika sy Fizika-Simia amin'ny endrika voarindra, famolavolana ny modely sy ny lôjikan'ny asa." },
        { key: "aglu", name: "AGLU", description: "Rindrankajy web fullstack (Django & React) ho an'ny fitantanana trano fonenana sy efitrano an'ny oniversite, novolavolaina niaraka tamin'ny ekipa, misy rafitra fizarana sy fanaraha-maso amin'ny fotoana marina." },
        { key: "gestion_absence", name: "Rafitra fitantanana tsy fahatongavana", description: "Famolavolana sy firafitry ny tabilao (UML + MERISE), script fanatontoloana amin'ny Python — asa an-tsokajina, ny frontend dia notantanan'olon-kafa." },
        { key: "expense_app", name: "ExpenseApp", description: "Rindrankajy desktop fitantanana fandaniam-bola manokana, novolavolaina tamin'ny Python, PyQt6 ary MySQL, mba hanaraha-maso, handaminana ary hamakafaka ny fandaniana isan'andro." },
        { key: "algo", name: "Algo d'optimisation et de recherche", description: "Fampiharana amin'ny C++ ny paikady algorithmika lehibe: Greedy, Programmation Dynamique, Backtracking ary Branch & Bound." },
      ],
    },
    
    languages: { title: "Fiteny", subtitle: "Fahaizana miasa amin'ny tontolo maro fiteny.", native: "Tenin-drazana", fluent: "Antonony", intermediate: "Teknika sy Ara-profesionaly" },
    
    hobbies: { title: "Fialam-boly", subtitle: "Ivelan'ny code, izay mamelombelona ahy." },
    
    contact: {
      title: "Mifandraisa amiko", subtitle: "Vonona amin'ny stage, asa na fiaraha-miasa.",
      name: "Anaranao", email: "Email-nao", message: "Hafatra", send: "Alefaso ny hafatra",
      sending: "Mandefa...", success: "Voalefa ny hafatra, misaotra!", error: "Nisy olana teo am-pandefasana, andramo indray na soraty mivantana ny email-ko.",
    },
    
    footer: { thanks: "Misaotra tamin'ny fitsidihanao ny portfolio-ko.", rights: "Zo rehetra voatokana." },
  },



  //------------------------------------------------------------
  // ~~~~~ ENGLISH ~~~~~~~
  //------------------------------------------------------------
  en: {

    nav: { about: "About", skills: "Skills", education: "Education", projects: "Projects", languages: "Languages", hobbies: "Hobbies", contact: "Contact" },
    
    hero: {
      greeting: "Welcome, I'm",
      role: "Backend & database developer, passionate about artificial intelligence and digital innovation",
      tagline: "I build clear, reliable data systems and explore artificial intelligence (AI) to push boundaries further, designing robust and innovative architectures ready to tackle tomorrow's challenges.",
      cta: "View my projects",
      lcv : "Download my cv",
    },
    
    about: {
      title: "About me",
      subtitle: "Everything you need to know to get a clear picture of my profile.",
      bio: "As a computer science student with a strong interest in databases, I am committed to contributing to meaningful projects. I currently serve as the Secretary General of the Linked-Brain association, wich is developing a digital learning platform. When faced with any problem, I like to look for a solution by first adopting a mathematical perspective before moving forward with the design. My ambition is to build reliable systemes while continuously exploring how artificial intelligence can be used to enrich them.",
      strengths: ["Curious", "Self-taught", "Rigorous", "Team spirit", "Creative"],
      openTo: "Open to opportunities",
      viewGithub: "View my GitHub",
    },
    
    skills: {
      title: "Skills", subtitle: "A stack focused on data, backend and artificial intelligence.",
      viewGithub: "See my full journey on GitHub",
      categories: [
        { key: "backend", title: "Backend", level: "In Progress", skills: ["Python", "Django", "C++"] },
        { key: "db", title: "Databases & Modeling", level: "Passionate", skills: ["UML", "MySQL", "PostgreSQL", "SQLite"] },
        { key: "math", title: "Mathematics", level: "Strong foundations", skills: ["Algebra", "Analysis", "Logic"] },
        { key: "frontend", title: "Frontend", level: "Basics", skills: ["HTML5", "CSS3", "JS", "React", "Next"] },
        { key: "tools", title: "Tools", level: "Daily use", skills: ["Git", "GitHub", "VS Code"] },
      ],
    },
    
    education: {
      title: "Education", subtitle: "An academic background in computer science.",
      items: [
        { key: "arduino", title: "Arduino Basics Certification", org: "Tansfert Multisort Electronik Education", period: "2025", description: "Embedded programming, basic circuits.", badge: "Certification" },
        { key: "ia", title: "AI & Automation Attestation", org: "Orange Digital Center Soarano", period: "April 2026", description: "Process optimization.", badge: "Attestation" },
        { key: "licence", title: "Computer Science — Year 2 (Licence)", org: "Oniversity FJKM Ravelojaona, Antananarivo", period: "Ongoing", description: "University degree in computer science.", badge: "Ongoing" },
      ],
    },
    
    projects: {
      title: "Projects", subtitle: "Concrete projects reflecting my technical skills.",
      viewGithub: "View repo", viewLive: "Live site",
      items: [
        { key: "region_sofia", name: "region_sofia", description: "A territorial digital platform (Fullstack Django & React) for mapping, managing and analyzing demographic data across the districts and communes of the Sofia Region, Madagascar." },
        { key: "linked_brain", name: "Linked-Brain", description: "A live web platform, co-developed as a team: digitizing Math and Physics-Chemistry exercises into structured content, designing the data models and business logic." },
        { key: "aglu", name: "AGLU", description: "A fullstack web app (Django & React) for managing university housing and rooms, built with a team, with a real-time allocation and tracking system." },
        { key: "gestion_absence", name: "Absence Management System", description: "Modeling and structuring the database tables (UML + MERISE), Python automation scripts — team project, frontend handled separately." },
        { key: "expense_app", name: "ExpenseApp", description: "A desktop app for personal expense management built with Python, PyQt6 and MySQL, to track, organize and analyze daily spending." },
        { key: "algo", name: "Algo d'optimisation et de recherche", description: "A C++ implementation of core algorithmic strategies: Greedy, Dynamic Programming, Backtracking and Branch & Bound." },
      ],
    },
    
    languages: { title: "Languages", subtitle: "Able to work in multilingual environments.", native: "Native", fluent: "Intermediate", intermediate: "Technical & Proficiency" },
    
    hobbies: { title: "Hobbies & Passions", subtitle: "Outside of code, what keeps me inspired." },
    
    contact: {
      title: "Get in touch", subtitle: "Available for an internship, a job or a collaboration.",
      name: "Your name", email: "Your email", message: "Your message", send: "Send message",
      sending: "Sending...", success: "Message sent, thank you!", error: "Something went wrong, try again or email me directly.",
    },
    
    footer: { thanks: "Thanks for visiting my portfolio.", rights: "All rights reserved." },
  },
};