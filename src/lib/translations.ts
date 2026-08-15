export type Lang = "fr" | "mg" | "en";

export const translations: Record<Lang, {
  nav: { about: string; skills: string; education: string; projects: string; languages: string; hobbies: string; contact: string };
  hero: { greeting: string; role: string; tagline: string; cta: string };
  about: { title: string; subtitle: string; bio: string; strengths: string[]; openTo: string; viewGithub: string };
  skills: { title: string; subtitle: string; viewGithub: string };
  education: { title: string; subtitle: string };
  projects: { title: string; subtitle: string; viewGithub: string; viewLive: string };
  languages: { title: string; subtitle: string; native: string; fluent: string; intermediate: string };
  hobbies: { title: string; subtitle: string };
  contact: { title: string; subtitle: string; name: string; email: string; message: string; send: string; sending: string; success: string; error: string };
  footer: { thanks: string; rights: string };
}> = {
  fr: {
    nav: { about: "À propos", skills: "Compétences", education: "Formation", projects: "Projets", languages: "Langues", hobbies: "Loisirs", contact: "Contact" },
    hero: {
      greeting: "Bonjour, je suis",
      role: "Développeur backend & bases de données, passionné d'IA",
      tagline: "Je construis des systèmes de données clairs et fiables, et j'explore l'intelligence artificielle pour aller plus loin.",
      cta: "Voir mes projets",
    },
    about: {
      title: "À propos de moi",
      subtitle: "Toutes les informations essentielles pour vous faire une idée précise de mon profil.",
      bio: "Informaticien spécialisé en bases de données, je suis également Secrétaire Général de l'association Linked-Brain, porteuse d'un projet de plateforme numérique d'apprentissage. Passionné par l'intelligence artificielle, j'aime concevoir des systèmes fiables et explorer comment l'IA peut les enrichir.",
      strengths: ["Curieux", "Autodidacte", "Rigoureux", "Esprit d'équipe", "Créatif"],
      openTo: "Ouvert aux opportunités",
      viewGithub: "Voir mon GitHub",
    },
    skills: { title: "Compétences", subtitle: "Une stack orientée données, backend et intelligence artificielle.", viewGithub: "Voir mon parcours complet sur GitHub" },
    education: { title: "Formation", subtitle: "Un parcours académique en informatique." },
    projects: { title: "Projets", subtitle: "Des projets concrets reflétant mes compétences techniques.", viewGithub: "Voir le repo", viewLive: "Site live" },
    languages: { title: "Langues", subtitle: "Capacité à travailler dans des environnements multilingues.", native: "Langue maternelle", fluent: "Courant", intermediate: "Intermédiaire" },
    hobbies: { title: "Loisirs & Passions", subtitle: "En dehors du code, ce qui me ressource." },
    contact: {
      title: "Me contacter", subtitle: "Disponible pour un stage, un emploi ou une collaboration.",
      name: "Votre nom", email: "Votre email", message: "Votre message", send: "Envoyer le message",
      sending: "Envoi en cours...", success: "Message envoyé, merci !", error: "Une erreur est survenue, réessaie ou écris-moi directement par email.",
    },
    footer: { thanks: "Merci d'avoir visité mon portfolio.", rights: "Tous droits réservés." },
  },
  mg: {
    nav: { about: "Mombamomba ahy", skills: "Fahaiza-manao", education: "Fianarana", projects: "Tetikasa", languages: "Fiteny", hobbies: "Fialam-boly", contact: "Fifandraisana" },
    hero: {
      greeting: "Manao ahoana, izaho no",
      role: "Mpamorona backend & angon-drakitra, tia Artificial Intelligence",
      tagline: "Mamorona rafitra angon-drakitra mazava sy azo itokiana aho, ary mikaroka ny fomba hampiasana ny AI mba handrosoana bebe kokoa.",
      cta: "Jereo ny tetikasako",
    },
    about: {
      title: "Mombamomba ahy",
      subtitle: "Ny fampahalalana rehetra ilaina hahafantaranao ny profil-ko.",
      bio: "Informaticien manam-pahaizana amin'ny angon-drakitra aho, ary Sekretera Jeneralin'ny fikambanana Linked-Brain, izay mitondra tetikasa sehatra fianarana nomerika. Tia ny Artificial Intelligence, mankafy ny famoronana rafitra azo itokiana ary ny fikarohana ny fomba hanatsarana azy amin'ny alalan'ny AI.",
      strengths: ["Mpikaroka", "Mianatra irery", "Marina", "Fiaraha-miasa", "Mahay mamorona"],
      openTo: "Vonona amin'ny fahafahana",
      viewGithub: "Jereo ny GitHub-ko",
    },
    skills: { title: "Fahaiza-manao", subtitle: "Fahaizana mikendrika angon-drakitra, backend ary AI.", viewGithub: "Jereo ny dianay feno ao amin'ny GitHub" },
    education: { title: "Fianarana", subtitle: "Dingam-pianarana amin'ny informatika." },
    projects: { title: "Tetikasa", subtitle: "Tetikasa marina mampiseho ny fahaizako.", viewGithub: "Jereo ny repo", viewLive: "Tranonkala mivantana" },
    languages: { title: "Fiteny", subtitle: "Fahaizana miasa amin'ny tontolo maro fiteny.", native: "Tenin-drazana", fluent: "Mahay tsara", intermediate: "Antonony" },
    hobbies: { title: "Fialam-boly", subtitle: "Ivelan'ny code, izay mamelombelona ahy." },
    contact: {
      title: "Mifandraisa amiko", subtitle: "Vonona amin'ny stage, asa na fiaraha-miasa.",
      name: "Anaranao", email: "Email-nao", message: "Hafatra", send: "Alefaso ny hafatra",
      sending: "Mandefa...", success: "Voalefa ny hafatra, misaotra!", error: "Nisy olana teo am-pandefasana, andramo indray na soraty mivantana ny email-ko.",
    },
    footer: { thanks: "Misaotra tamin'ny fitsidihanao ny portfolio-ko.", rights: "Zo rehetra voatokana." },
  },
  en: {
    nav: { about: "About", skills: "Skills", education: "Education", projects: "Projects", languages: "Languages", hobbies: "Hobbies", contact: "Contact" },
    hero: {
      greeting: "Hello, I'm",
      role: "Backend & database developer, passionate about AI",
      tagline: "I build clear, reliable data systems and explore how AI can push them further.",
      cta: "View my projects",
    },
    about: {
      title: "About me",
      subtitle: "Everything you need to know to get a clear picture of my profile.",
      bio: "A computer scientist specialized in databases, I am also Secretary General of the Linked-Brain association, which leads a digital learning platform project. Passionate about artificial intelligence, I enjoy designing reliable systems and exploring how AI can enrich them.",
      strengths: ["Curious", "Self-taught", "Rigorous", "Team spirit", "Creative"],
      openTo: "Open to opportunities",
      viewGithub: "View my GitHub",
    },
    skills: { title: "Skills", subtitle: "A stack focused on data, backend and artificial intelligence.", viewGithub: "See my full journey on GitHub" },
    education: { title: "Education", subtitle: "An academic background in computer science." },
    projects: { title: "Projects", subtitle: "Concrete projects reflecting my technical skills.", viewGithub: "View repo", viewLive: "Live site" },
    languages: { title: "Languages", subtitle: "Able to work in multilingual environments.", native: "Native", fluent: "Fluent", intermediate: "Intermediate" },
    hobbies: { title: "Hobbies & Passions", subtitle: "Outside of code, what keeps me inspired." },
    contact: {
      title: "Get in touch", subtitle: "Available for an internship, a job or a collaboration.",
      name: "Your name", email: "Your email", message: "Your message", send: "Send message",
      sending: "Sending...", success: "Message sent, thank you!", error: "Something went wrong, try again or email me directly.",
    },
    footer: { thanks: "Thanks for visiting my portfolio.", rights: "All rights reserved." },
  },
};