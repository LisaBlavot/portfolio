const portfolio = {
  projects: [
    {
      slug: "v2v-simulateur",
      title: "Simulateur V2V",
      summary:
        "Outil de simulation de connexions V2V sur carte OSM avec visualisation temps réel.",
      intro:
        "Projet de Master centré sur la simulation de véhicules, le graphe routier et les connexions dynamiques.",
      context:
        "Réseaux mobiles réalisé en équipe de quatre, avec un simulateur capable de modéliser le déplacement de plusieurs milliers de véhicules et l’affichage des connexions V2V.",
      objective:
        "Visualiser un territoire, construire un graphe routier, simuler 2000 véhicules et afficher les interférences en temps réel.",
      role: [
        "Responsable simulation des déplacements",
        "Gestion du moteur temporel",
        "Suivi de 2000 véhicules",
        "Contrôles pause / vitesse",
      ],
      coverImage: "v2v-cover.jpg",
      mainImage: "v2v-main.png",
      resultImages: ["v2v-screen1.png"],
      achievements: [
        "Simulation multi-véhicules",
        "Lecture claire des états",
        "Synchronisation avec le graphe V2V",
        "Aide à l’intégration finale",
      ],
      problem: {
        issue:
          "La simulation devait rester fluide malgré un volume élevé d’objets mobiles.",
        solution:
          "Limitation des calculs inutiles, mise à jour maîtrisée du temps et organisation claire des modules.",
      },
      result:
        "Un simulateur visuel structuré autour d’une carte centrale, d’un panneau de propriétés et d’un affichage dynamique des connexions.",
      technologies: ["C++17", "Qt", "OpenGL", "OpenStreetMap"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/PRADES-matteo/ReseauM1S1.git",
        },
        { label: "Démonstration", href: "#" },
      ],
      theme: {
        top: ["#eef3f7", "#d9e3ec"],
        bottom: ["#ffffff", "#f4f6f8"],
      },
    },
    {
      slug: "erp-comptabilite-analytique",
      title: "ERP analytique",
      summary:
        "Application Django de comptabilité analytique avec scénarios, résultats et templates métier.",
      intro:
        "Un projet pédagogique pour créer et comparer des scénarios de coûts selon plusieurs méthodes de calcul.",
      context:
        "Application Django développée pour gérer des scénarios de comptabilité analytique et analyser les coûts selon trois approches : direct costing, direct costing évolué et centres d’analyse.",
      objective:
        "Permettre la création de scénarios, le calcul des coûts et l’affichage de résultats adaptés aux templates industriel, commercial et services.",
      role: [
        "Création des vues et templates",
        "Intégration de la logique métier",
        "Gestion des scénarios de coûts",
        "Mise en forme des résultats analytiques",
      ],
      achievements: [
        "Comparaison de scénarios",
        "Méthodes de calcul distinctes",
        "Templates métier adaptés",
        "Interface claire pour l’analyse",
      ],
      problem: {
        issue:
          "Les résultats de calcul devaient rester lisibles malgré des méthodes et des scénarios différents.",
        solution:
          "Séparation des calculs purs, des vues et des templates pour garder une lecture simple et structurée.",
      },
      result:
        "Un ERP pédagogique centré sur la gestion des coûts, avec des scénarios exploitables et des écrans dédiés aux résultats.",
      technologies: ["Python", "Django", "SQLite", "HTML/CSS"],

      coverImage: "images/erp-cover.jpg",
      mainImage: "images/erp1.png",
      demoVideo: "images/démo_ERP.mp4",
      demoDescription:
        "À gauche, on voit la page pour créer un scénario. À droite, on voit la page de résultat. L’application calcule ensuite les coûts avec une des trois méthodes selon le cas choisi, puis affiche un résultat clair et facile à lire.",
      demoVideoDescription:
        "Dans cette démonstration, je présente un scénario de **Direct Costing évolué** appliqué à trois produits. Je renseigne différents types de charges : les charges variables associées à chaque produit, les charges variables communes, ainsi que les charges fixes spécifiques à chaque gamme et les charges fixes communes à l’entreprise.\n\nAprès avoir lancé le calcul, l’ERP permet d’obtenir automatiquement les résultats selon les trois niveaux du Direct Costing évolué : la **marge sur coût variable**, la **marge spécifique** après déduction des charges fixes propres à chaque produit, puis le **résultat global** après prise en compte des charges fixes communes.\n\nCette démonstration montre ainsi comment l’application permet de **saisir les données, distinguer les différents types de charges et automatiser le calcul des marges et du résultat final**.",
      resultImages: ["images/erp2.png", "images/erp3.png"],
      links: [
        {
          label: "Code",
          href: "https://github.com/PRADES-matteo/projet_M1.git",
        },
        { label: "Démo", href: "#" },
      ],
      theme: {
        top: ["#f5f3ee", "#ddd6ca"],
        bottom: ["#ffffff", "#f8f6f1"],
      },
    },
    {
      slug: "archiweb-coach-sportif",
      title: "Plateforme de gestion pour coachs sportifs",
      summary:
        "Plateforme web de gestion complète pour coachs sportifs, avec CRM, agenda, facturation et contenus métier.",
      intro:
        "Un projet d’expression de besoins pour concevoir un écosystème numérique modulaire adapté aux coachs sportifs.",
      context:
        "Projet centré sur la gestion de clients, contrats, séances, contenus, messagerie, boutique et partenariats, avec une architecture pensée pour la scalabilité et les intégrations tierces.",
      objective:
        "Centraliser l’activité commerciale, opérationnelle et relation client d’un coach sportif dans une interface web responsive.",
      role: [
        "Modélisation des besoins fonctionnels",
        "Structuration des parcours coach, client et prospect",
        "Organisation des écrans de suivi et de reporting",
        "Préparation des vues métier et des maquettes",
      ],
      achievements: [
        "CRM complet",
        "Agenda et réservation",
        "Facturation multi-contrats",
      ],
      problem: {
        issue:
          "Le besoin couvrait plusieurs rôles, plusieurs modèles économiques et des intégrations externes.",
        solution:
          "Découpage en modules clairs et séparation des écrans métiers pour garder une navigation lisible.",
      },
      result:
        "Une vision structurée d’une plateforme complète pour coachs sportifs, avec des écrans prêts à illustrer les principaux modules métier.",
      technologies: ["HTML/CSS", "Architecture web", "CRM", "API REST"],
      coverImage: "coach-cover.jpg",
      mainImage: "images/coach_main.png",
      demoVideo: "images/démo_Coach.mp4",
      demoDescription:
        "Ces captures présentent les principales fonctionnalités de la plateforme : la gestion des clients à travers le CRM, le suivi détaillé d’un client avec son historique de séances et ses échanges avec le coach, la planification des séances via l’agenda, ainsi que le suivi de l’activité depuis l’espace de facturation avec le chiffre d’affaires, le taux de remplissage, les factures et les commandes récentes.",

      demoVideoDescription:
        "Dans cette démonstration, je présente les principales fonctionnalités de la plateforme de gestion pour coachs sportifs. Je montre notamment la gestion des clients avec le CRM, la planification des séances et le suivi de l’activité.\n\nJe présente également l’onglet Facturation, qui permet de gérer les offres et les produits, de suivre les commandes et leur historique, de consulter le chiffre d’affaires et les factures, ainsi que de créer de nouvelles offres.\n\nL’objectif est de montrer comment la plateforme centralise les différents aspects de l’activité d’un coach, de la gestion des clients et des séances jusqu’au suivi commercial et financier.",
      resultImages: [
        "archiweb-screen-1.png",
        "archiweb-screen-2.png",
        "archiweb-screen-3.png",
        "archiweb-screen-4.png",
      ],
      links: [
        {
          label: "Code",
          href: "https://github.com/LisaBlavot/CoachsSportifs.git",
        },
        { label: "Démo", href: "#" },
      ],
      theme: {
        top: ["#edf4ef", "#dce9df"],
        bottom: ["#ffffff", "#f4f8f5"],
      },
    },
  ],
  skills: [
    {
      title: "Langages",
      items: ["C++", "Python", "Java", "C", "Bash", "OCaml", "SQL"],
    },
    {
      title: "Développement Web",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "JSP/Servlets",
        "Struts 2",
        "Angular",
        "Symfony",
      ],
    },
    {
      title: "Développement logiciel",
      items: ["POO", "Design Patterns", "IHM", "Front-end", "Back-end", "Algorithmique"],
    },
    {
      title: "Bases de données",
      items: ["SQL", "MySQL", "Oracle", "SQLite", "Modélisation"],
    },
    {
      title: "Réseaux & Systèmes",
      items: ["TCP/IP", "HTTP", "DNS", "V2V", "Windows", "Linux"],
    },

    {
      title: "Outils",
      items: ["Git", "OpenGL", "Discord", "Trello"],
    },
  ],

  learnings: [
    {
      num: "01",
      title: "Structurer avant de développer",
      text: "Les projets réalisés en équipe m'ont appris qu'un projet ne peut pas reposer uniquement sur les compétences techniques de chacun. Il faut définir ce qui doit être fait, découper le travail, répartir les responsabilités et anticiper les dépendances entre les différentes parties. J'ai progressivement compris que l'organisation en amont permet d'éviter beaucoup de problèmes pendant le développement.",
      context: "Projets en équipe",
    },
    {
      num: "02",
      title: "Apprendre à travailler avec les autres",
      text: "Travailler à plusieurs m'a permis de comprendre que chacun possède sa propre manière de travailler, de communiquer et d'aborder un problème. Il faut donc apprendre à coordonner ces différentes façons de faire, communiquer suffisamment pour éviter les incompréhensions et rendre son propre travail compréhensible pour les autres.",
      context: "Travail en équipe",
    },
    {
      num: "03",
      title: "La rigueur commence avant le code",
      text: "Un projet réalisé à partir d'un cahier des charges fourni par un autre groupe m'a particulièrement sensibilisée à la rigueur nécessaire dans un projet informatique. En tant que personne qui reçoit une spécification, chaque imprécision peut devenir une source d'interprétation ou de blocage. J'ai également compris que chaque partie d'un projet dépend du travail des autres : il faut donc produire un travail suffisamment clair et précis pour pouvoir être compris, intégré et repris par les autres membres de l'équipe, de la spécification jusqu'à la livraison.",
      context: "Cahier des charges",
    },
    {
      num: "04",
      title: "Apprendre à faire des choix",
      text: "Les projets m'ont aussi appris qu'il faut savoir faire des choix et adapter ses priorités. Face à des contraintes de temps, de connaissances ou de faisabilité, il n'est pas toujours possible de tout réaliser comme prévu. Il faut alors identifier ce qui est réellement important, trouver un compromis et parfois remettre en question une première approche.",
      context: "Priorisation",
    },
  ],

  journey: [
    {
      year: "2025-2026",
      title: "Master 1, Informatique et mobilité",
      school: "Université de Haute-Alsace",
    },
    {
      year: "2024-2025",
      title: "Licence 3, Informatique parcours ingénierie",
      school: "Université d'Orléans",
    },
    {
      year: "2023-2024",
      title: "Licence 2, Informatique",
      school: "Université d'Orléans",
    },
    {
      year: "2022-2023",
      title: "Licence 1, Physique-Mathématiques-Informatique",
      school: "Université d'Orléans",
    },
    {
      year: "2019-2022",
      title:
        "Baccalauréat spécialités Mathématiques, Physique, Sciences économiques ",
      school: "Lycée Jacques-Monod, Saint Jean de Braye",
    },
  ],
  contact: [
    {
      label: "GitHub",
      meta: "Projets et code",
      href: "https://github.com/LisaBlavot",
    },
    {
      label: "LinkedIn",
      meta: "Réseau",
      href: "https://www.linkedin.com/in/lisa-blavot-6579b0378",
    },
    {
      label: "Email",
      meta: "Prise de contact",
      href: "mailto:bvtlisa@gmail.com",
    },
  ],
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function resolveMediaPath(source) {
  if (!source) {
    return source;
  }

  if (
    source.startsWith("http://") ||
    source.startsWith("https://") ||
    source.startsWith("data:") ||
    source.startsWith("/") ||
    source.includes("/")
  ) {
    return source;
  }

  return `images/${source}`;
}

function svgDataUri({ title, subtitle, top, bottom, artwork = "default" }) {
  if (artwork === "erp-dashboard") {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" role="img" aria-label="${escapeHtml(title)}">
        <defs>
          <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#f8faf7" />
            <stop offset="100%" stop-color="#eef2ee" />
          </linearGradient>
        </defs>
        <rect width="1200" height="750" rx="36" fill="url(#bg)" />
        <rect x="0" y="0" width="180" height="750" rx="36" fill="#ffffff" />
        <rect x="18" y="58" width="144" height="40" rx="8" fill="#1f7a67" />
        <rect x="18" y="130" width="144" height="54" rx="10" fill="#f4f6f3" stroke="#e0e6e2" />
        <rect x="18" y="198" width="144" height="54" rx="10" fill="#ffffff" stroke="#e0e6e2" />
        <rect x="18" y="266" width="144" height="54" rx="10" fill="#ffffff" stroke="#e0e6e2" />
        <rect x="18" y="334" width="144" height="54" rx="10" fill="#ffffff" stroke="#e0e6e2" />
        <rect x="18" y="402" width="144" height="54" rx="10" fill="#ffffff" stroke="#e0e6e2" />
        <rect x="18" y="470" width="144" height="54" rx="10" fill="#ffffff" stroke="#e0e6e2" />
        <rect x="18" y="538" width="144" height="54" rx="10" fill="#ffffff" stroke="#e0e6e2" />
        <rect x="18" y="684" width="144" height="34" rx="8" fill="#e83b3b" />

        <text x="20" y="30" fill="#245e54" font-family="Manrope, Arial, sans-serif" font-size="18" font-weight="800">ERP</text>
        <text x="200" y="42" fill="#1d2021" font-family="Manrope, Arial, sans-serif" font-size="30" font-weight="800">${escapeHtml(title)}</text>
        <text x="200" y="68" fill="#5f6662" font-family="Manrope, Arial, sans-serif" font-size="14">${escapeHtml(subtitle)}</text>

        <rect x="200" y="92" width="180" height="72" rx="14" fill="#ffffff" stroke="#dfe7e3" />
        <rect x="396" y="92" width="180" height="72" rx="14" fill="#ffffff" stroke="#dfe7e3" />
        <rect x="592" y="92" width="180" height="72" rx="14" fill="#ffffff" stroke="#dfe7e3" />
        <rect x="788" y="92" width="180" height="72" rx="14" fill="#ffffff" stroke="#dfe7e3" />
        <rect x="984" y="92" width="180" height="72" rx="14" fill="#ffffff" stroke="#9ed4c0" />

        <text x="220" y="122" fill="#66706d" font-family="Manrope, Arial, sans-serif" font-size="12">CA total</text>
        <text x="220" y="149" fill="#13201c" font-family="Manrope, Arial, sans-serif" font-size="22" font-weight="800">102100 €</text>
        <text x="416" y="122" fill="#66706d" font-family="Manrope, Arial, sans-serif" font-size="12">CV total</text>
        <text x="416" y="149" fill="#13201c" font-family="Manrope, Arial, sans-serif" font-size="22" font-weight="800">34600 €</text>
        <text x="612" y="122" fill="#66706d" font-family="Manrope, Arial, sans-serif" font-size="12">CF spécifiques</text>
        <text x="612" y="149" fill="#13201c" font-family="Manrope, Arial, sans-serif" font-size="22" font-weight="800">10500 €</text>
        <text x="808" y="122" fill="#66706d" font-family="Manrope, Arial, sans-serif" font-size="12">CF communes</text>
        <text x="808" y="149" fill="#13201c" font-family="Manrope, Arial, sans-serif" font-size="22" font-weight="800">35600 €</text>
        <text x="1004" y="122" fill="#2e7864" font-family="Manrope, Arial, sans-serif" font-size="12">Résultat global</text>
        <text x="1004" y="149" fill="#2e7864" font-family="Manrope, Arial, sans-serif" font-size="22" font-weight="800">21400 €</text>

        <rect x="200" y="184" width="964" height="218" rx="18" fill="#ffffff" stroke="#dfe7e3" />
        <text x="218" y="225" fill="#225f56" font-family="Manrope, Arial, sans-serif" font-size="28" font-weight="800">Analyse détaillée par produit</text>
        <rect x="218" y="246" width="928" height="28" rx="6" fill="#edf6f3" />
        <rect x="218" y="280" width="928" height="34" rx="0" fill="#ffffff" />
        <rect x="218" y="314" width="928" height="34" rx="0" fill="#ffffff" />
        <rect x="218" y="348" width="928" height="34" rx="0" fill="#ffffff" />
        <rect x="218" y="382" width="928" height="16" rx="0" fill="#edf6f3" />

        <text x="230" y="265" fill="#5f6662" font-family="Manrope, Arial, sans-serif" font-size="12" font-weight="700">Produit</text>
        <text x="395" y="265" fill="#5f6662" font-family="Manrope, Arial, sans-serif" font-size="12" font-weight="700">Qté produite</text>
        <text x="535" y="265" fill="#5f6662" font-family="Manrope, Arial, sans-serif" font-size="12" font-weight="700">CA</text>
        <text x="662" y="265" fill="#5f6662" font-family="Manrope, Arial, sans-serif" font-size="12" font-weight="700">CV total</text>
        <text x="822" y="265" fill="#5f6662" font-family="Manrope, Arial, sans-serif" font-size="12" font-weight="700">MSCV</text>
        <text x="965" y="265" fill="#5f6662" font-family="Manrope, Arial, sans-serif" font-size="12" font-weight="700">Marge spécifique</text>

        <text x="230" y="303" fill="#202529" font-family="Manrope, Arial, sans-serif" font-size="12">Vase décoratif</text>
        <text x="395" y="303" fill="#202529" font-family="Manrope, Arial, sans-serif" font-size="12">810</text>
        <text x="535" y="303" fill="#202529" font-family="Manrope, Arial, sans-serif" font-size="12">36000</text>
        <text x="662" y="303" fill="#202529" font-family="Manrope, Arial, sans-serif" font-size="12">11130</text>
        <text x="822" y="303" fill="#202529" font-family="Manrope, Arial, sans-serif" font-size="12">24869</text>
        <text x="965" y="303" fill="#2d9a58" font-family="Manrope, Arial, sans-serif" font-size="12" font-weight="700">21669</text>

        <text x="230" y="337" fill="#202529" font-family="Manrope, Arial, sans-serif" font-size="12">Bol collection</text>
        <text x="395" y="337" fill="#202529" font-family="Manrope, Arial, sans-serif" font-size="12">1220</text>
        <text x="535" y="337" fill="#202529" font-family="Manrope, Arial, sans-serif" font-size="12">33600</text>
        <text x="662" y="337" fill="#202529" font-family="Manrope, Arial, sans-serif" font-size="12">12805</text>
        <text x="822" y="337" fill="#202529" font-family="Manrope, Arial, sans-serif" font-size="12">20794</text>
        <text x="965" y="337" fill="#2d9a58" font-family="Manrope, Arial, sans-serif" font-size="12" font-weight="700">17994</text>

        <text x="230" y="371" fill="#202529" font-family="Manrope, Arial, sans-serif" font-size="12">Figurine artisanale</text>
        <text x="395" y="371" fill="#202529" font-family="Manrope, Arial, sans-serif" font-size="12">510</text>
        <text x="535" y="371" fill="#202529" font-family="Manrope, Arial, sans-serif" font-size="12">32500</text>
        <text x="662" y="371" fill="#202529" font-family="Manrope, Arial, sans-serif" font-size="12">10663</text>
        <text x="822" y="371" fill="#202529" font-family="Manrope, Arial, sans-serif" font-size="12">21836</text>
        <text x="965" y="371" fill="#2d9a58" font-family="Manrope, Arial, sans-serif" font-size="12" font-weight="700">17336</text>

        <rect x="200" y="424" width="964" height="276" rx="18" fill="#ffffff" stroke="#dfe7e3" />
        <text x="218" y="463" fill="#1d2021" font-family="Manrope, Arial, sans-serif" font-size="24" font-weight="700">Mouvement de stock par produit</text>
        <rect x="218" y="494" width="928" height="96" rx="8" fill="#fbfcfb" stroke="#e6ece9" />
        <rect x="218" y="618" width="928" height="52" rx="8" fill="#ffffff" stroke="#e6ece9" />
        <rect x="218" y="618" width="300" height="52" rx="8" fill="#ffffff" />
        <rect x="540" y="620" width="72" height="50" rx="4" fill="#3c7ff0" />
        <rect x="624" y="640" width="72" height="30" rx="4" fill="#f47b20" />
        <rect x="708" y="648" width="72" height="22" rx="4" fill="#158a7a" />

        <text x="232" y="527" fill="#5f6662" font-family="Manrope, Arial, sans-serif" font-size="12">Produit</text>
        <text x="420" y="527" fill="#5f6662" font-family="Manrope, Arial, sans-serif" font-size="12">Stock initial</text>
        <text x="590" y="527" fill="#5f6662" font-family="Manrope, Arial, sans-serif" font-size="12">Production</text>
        <text x="744" y="527" fill="#5f6662" font-family="Manrope, Arial, sans-serif" font-size="12">Ventes</text>
        <text x="892" y="527" fill="#5f6662" font-family="Manrope, Arial, sans-serif" font-size="12">Stock final</text>
        <text x="1010" y="527" fill="#5f6662" font-family="Manrope, Arial, sans-serif" font-size="12">Variation</text>
      </svg>`;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" role="img" aria-label="${escapeHtml(title)}">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${top[0]}" />
          <stop offset="100%" stop-color="${top[1]}" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${bottom[0]}" />
          <stop offset="100%" stop-color="${bottom[1]}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="750" rx="42" fill="url(#g)" />
      <circle cx="960" cy="150" r="150" fill="rgba(255,255,255,0.35)" />
      <circle cx="210" cy="580" r="160" fill="rgba(21,21,21,0.06)" />
      <rect x="72" y="70" width="360" height="50" rx="25" fill="rgba(255,255,255,0.7)" />
      <rect x="72" y="148" width="620" height="450" rx="30" fill="url(#g2)" stroke="rgba(21,21,21,0.08)" />
      <rect x="756" y="148" width="372" height="210" rx="30" fill="rgba(255,255,255,0.78)" stroke="rgba(21,21,21,0.08)" />
      <rect x="756" y="388" width="372" height="210" rx="30" fill="rgba(255,255,255,0.78)" stroke="rgba(21,21,21,0.08)" />
      <text x="120" y="260" fill="#111" font-family="Manrope, Arial, sans-serif" font-size="58" font-weight="800">${escapeHtml(title)}</text>
      <text x="120" y="324" fill="#45413b" font-family="Manrope, Arial, sans-serif" font-size="28" font-weight="600">${escapeHtml(subtitle)}</text>
      <rect x="120" y="382" width="240" height="20" rx="10" fill="rgba(21,21,21,0.16)" />
      <rect x="120" y="422" width="360" height="20" rx="10" fill="rgba(21,21,21,0.12)" />
      <rect x="120" y="462" width="310" height="20" rx="10" fill="rgba(21,21,21,0.12)" />
      <text x="810" y="230" fill="#111" font-family="Manrope, Arial, sans-serif" font-size="30" font-weight="700">Capture</text>
      <rect x="810" y="260" width="248" height="20" rx="10" fill="rgba(21,21,21,0.12)" />
      <rect x="810" y="300" width="170" height="20" rx="10" fill="rgba(21,21,21,0.09)" />
      <text x="810" y="469" fill="#111" font-family="Manrope, Arial, sans-serif" font-size="30" font-weight="700">Vue</text>
      <rect x="810" y="499" width="248" height="20" rx="10" fill="rgba(21,21,21,0.12)" />
      <rect x="810" y="539" width="170" height="20" rx="10" fill="rgba(21,21,21,0.09)" />
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderTagRow(container, items, tagClass = "tag") {
  container.innerHTML = items
    .map((item) => `<span class="${tagClass}">${escapeHtml(item)}</span>`)
    .join("");
}

function ensureVideoModal() {
  let modal = document.getElementById("video-modal");

  if (modal) {
    return modal;
  }

  modal = document.createElement("div");
  modal.id = "video-modal";
  modal.className = "video-modal";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="video-modal__backdrop" data-video-close></div>
    <div class="video-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="video-modal-title">
      <div class="video-modal__header">
        <div>
          <p class="eyebrow">Démo vidéo</p>
          <h2 id="video-modal-title">Aperçu du projet</h2>
        </div>
        <button class="video-modal__close" type="button" data-video-close aria-label="Fermer la vidéo">Fermer</button>
      </div>
      <video class="video-modal__video" controls playsinline></video>
      <div class="video-modal__description"></div>
      <p class="video-modal__hint">Appuie sur Échap ou clique en dehors pour fermer.</p>
    </div>
  `;

  document.body.appendChild(modal);

  modal.addEventListener("click", (event) => {
    const target = event.target;

    if (
      target instanceof HTMLElement &&
      target.hasAttribute("data-video-close")
    ) {
      closeVideoModal();
    }
  });

  return modal;
}

function formatVideoDescription(text) {
  const escaped = escapeHtml(text || "");
  const withBold = escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  return withBold
    .split(/\n\n+/)
    .map((paragraph) => `<p>${paragraph.replace(/\n/g, "<br />")}</p>`)
    .join("");
}

function openVideoModal(videoSrc, title, description) {
  const modal = ensureVideoModal();
  const heading = modal.querySelector("#video-modal-title");
  const video = modal.querySelector("video");
  const text = modal.querySelector(".video-modal__description");

  if (
    !(heading instanceof HTMLElement) ||
    !(video instanceof HTMLVideoElement) ||
    !(text instanceof HTMLElement)
  ) {
    return;
  }

  heading.textContent = title;
  text.innerHTML = formatVideoDescription(description);
  text.hidden = !description;
  video.src = videoSrc;
  modal.hidden = false;
  document.body.classList.add("no-scroll");

  video.play().catch(() => {
    // Le navigateur peut bloquer l'autoplay; le contrôle reste disponible.
  });
}

function closeVideoModal() {
  const modal = document.getElementById("video-modal");
  const video = modal ? modal.querySelector("video") : null;

  if (!modal) {
    return;
  }

  if (video instanceof HTMLVideoElement) {
    video.pause();
    video.removeAttribute("src");
    video.load();
  }

  modal.hidden = true;
  document.body.classList.remove("no-scroll");
}

function bindVideoModalEscape() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeVideoModal();
    }
  });
}

function renderHome() {
  const projectsGrid = document.getElementById("projects-grid");
  const skillsGrid = document.getElementById("skills-grid");
  const learningsGrid = document.getElementById("learnings-grid");
  const timeline = document.getElementById("timeline");
  const contactLinks = document.getElementById("contact-links");
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (projectsGrid) {
    projectsGrid.innerHTML = portfolio.projects
      .map((project) => {
        const image = project.coverImage
          ? resolveMediaPath(project.coverImage)
          : svgDataUri({
              title: project.title,
              subtitle: project.summary,
              top: project.theme.top,
              bottom: project.theme.bottom,
              artwork: project.artwork,
            });

        return `
          <article class="project-card reveal">
            <a href="projet.html?project=${project.slug}" aria-label="Voir le projet ${escapeHtml(project.title)}">
              <div class="project-card__media">
                <img src="${image}" alt="Capture du projet ${escapeHtml(project.title)}" />
              </div>
            </a>
            <div class="project-card__body">
              <h3 class="project-card__title">${escapeHtml(project.title)}</h3>
              <p class="project-card__desc">${escapeHtml(project.summary)}</p>
              <div class="tag-row">
                ${project.technologies.map((tech) => `<span class="tag">${escapeHtml(tech)}</span>`).join("")}
              </div>
              <div class="project-card__actions">
                <a class="project-card__button" href="projet.html?project=${project.slug}">Voir le projet</a>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  if (skillsGrid) {
    skillsGrid.innerHTML = portfolio.skills
      .map(
        (skill) => `
        <article class="skill-card reveal">
          <h3>${escapeHtml(skill.title)}</h3>
          <div class="skill-tags">
            ${skill.items.map((item) => `<span class="mini-tag">${escapeHtml(item)}</span>`).join("")}
          </div>
        </article>
      `,
      )
      .join("");
  }

    if (learningsGrid) {
      learningsGrid.innerHTML = portfolio.learnings
        .map(
          (item) => `
        <article class="learning-card reveal">
          <div class="learning-card__step">
            <span class="learning-card__num">${escapeHtml(item.num)}</span>
          </div>
          <h3 class="learning-card__title">${escapeHtml(item.title)}</h3>
          <p class="learning-card__text">${escapeHtml(item.text)}</p>
          <div class="learning-card__context">
            <span class="mini-tag">${escapeHtml(item.context)}</span>
          </div>
        </article>
      `,
        )
        .join("");
    }

  if (timeline) {
    timeline.innerHTML = portfolio.journey
      .map(
        (item) => `
        <article class="timeline-item reveal">
          <div class="timeline-year">${escapeHtml(item.year)}</div>
          <div class="timeline-title">${escapeHtml(item.title)}</div>
          <div class="timeline-school">${escapeHtml(item.school)}</div>
        </article>
      `,
      )
      .join("");
  }

  if (contactLinks) {
    contactLinks.innerHTML = portfolio.contact
      .map(
        (item) => `
        <a class="contact-card reveal" href="${item.href}">
          <div>
            <div class="contact-card__label">${escapeHtml(item.label)}</div>
            <div class="contact-card__meta">${escapeHtml(item.meta)}</div>
          </div>
          <span class="project-link">Ouvrir</span>
        </a>
      `,
      )
      .join("");
  }
}

function renderProjectPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project") || portfolio.projects[0].slug;
  const project =
    portfolio.projects.find((entry) => entry.slug === slug) ||
    portfolio.projects[0];

  const title = document.getElementById("project-title");
  const intro = document.getElementById("project-intro");
  const heroImage = document.getElementById("project-hero-image");
  const context = document.getElementById("project-context");
  const objective = document.getElementById("project-objective");
  const tech = document.getElementById("project-tech");
  const role = document.getElementById("project-role");
  const achievements = document.getElementById("project-achievements");
  const problem = document.getElementById("project-problem");
  const result = document.getElementById("project-result");
  const resultCaption = document.getElementById("project-result-caption");
  const gallery = document.getElementById("project-gallery");
  const links = document.getElementById("project-links");

  if (!title) {
    return;
  }

  if (resultCaption) {
    resultCaption.textContent = project.demoDescription || "";
    resultCaption.hidden = !project.demoDescription;
  }
  const hero = project.mainImage
    ? resolveMediaPath(project.mainImage)
    : svgDataUri({
        title: project.title,
        subtitle: project.intro,
        top: project.theme.top,
        bottom: project.theme.bottom,
        artwork: project.artwork,
      });

  title.textContent = project.title;
  intro.textContent = project.intro;
  heroImage.src = hero;
  heroImage.alt = `Capture principale du projet ${project.title}`;
  context.textContent = project.context;
  objective.textContent = project.objective;
  renderTagRow(tech, project.technologies);
  role.innerHTML = project.role
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  achievements.innerHTML = project.achievements
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  problem.innerHTML = `
    <div class="ps-card">
      <strong>Problème</strong>
      <span>${escapeHtml(project.problem.issue)}</span>
    </div>
    <div class="ps-card">
      <strong>Solution</strong>
      <span>${escapeHtml(project.problem.solution)}</span>
    </div>
  `;
  result.textContent = project.result;

  const galleryImages =
    project.resultImages && project.resultImages.length > 0
      ? project.resultImages.map((image) => resolveMediaPath(image))
      : [
          svgDataUri({
            title: `${project.title} - vue 1`,
            subtitle: "Capture secondaire",
            top: project.theme.top,
            bottom: project.theme.bottom,
            artwork: project.artwork,
          }),
          svgDataUri({
            title: `${project.title} - vue 2`,
            subtitle: "Capture secondaire",
            top: project.theme.bottom,
            bottom: project.theme.top,
            artwork: project.artwork,
          }),
        ];

  gallery.innerHTML = galleryImages
    .map(
      (image, index) => `
        <figure>
          <img src="${image}" alt="Capture ${index + 1} du projet ${escapeHtml(project.title)}" />
        </figure>
      `,
    )
    .join("");

  links.innerHTML = project.links
    .map((link) => {
      const isDemoLink =
        link.label.toLowerCase().includes("démo") ||
        link.label.toLowerCase().includes("demo");

      if (isDemoLink && project.demoVideo) {
        return `
          <button class="project-link project-link--button" type="button" data-video-src="${escapeHtml(project.demoVideo)}" data-video-title="${escapeHtml(project.title)}" data-video-description="${escapeHtml(project.demoVideoDescription || project.demoDescription || "")}">
            ${escapeHtml(link.label)}
          </button>
        `;
      }

      return `<a class="project-link" href="${link.href}">${escapeHtml(link.label)}</a>`;
    })
    .join("");

  links.querySelectorAll("[data-video-src]").forEach((button) => {
    button.addEventListener("click", () => {
      const videoSrc = button.getAttribute("data-video-src");
      const videoTitle =
        button.getAttribute("data-video-title") || project.title;
      const videoDescription =
        button.getAttribute("data-video-description") ||
        project.demoVideoDescription ||
        project.demoDescription ||
        "";

      if (videoSrc) {
        openVideoModal(videoSrc, videoTitle, videoDescription);
      }
    });
  });
}

function renderCvPage() {
  const skills = document.getElementById("cv-skills");
  const timeline = document.getElementById("cv-timeline");
  const contact = document.getElementById("cv-contact");
  const printButton = document.getElementById("print-cv");

  if (skills) {
    const items = portfolio.skills.flatMap((item) => item.items).slice(0, 10);
    renderTagRow(skills, items);
  }

  if (timeline) {
    timeline.innerHTML = portfolio.journey
      .map(
        (item) => `
        <article class="mini-timeline-item">
          <div class="mini-year">${escapeHtml(item.year)}</div>
          <div class="mini-title">${escapeHtml(item.title)}</div>
          <div class="mini-school">${escapeHtml(item.school)}</div>
        </article>
      `,
      )
      .join("");
  }

  if (contact) {
    contact.innerHTML = portfolio.contact
      .map(
        (item) => `
        <a class="contact-card" href="${item.href}">
          <div>
            <div class="contact-card__label">${escapeHtml(item.label)}</div>
            <div class="contact-card__meta">${escapeHtml(item.meta)}</div>
          </div>
          <span class="project-link">Ouvrir</span>
        </a>
      `,
      )
      .join("");
  }

  if (printButton) {
    printButton.addEventListener("click", () => window.print());
  }
}

const page = document.body.dataset.page;
bindVideoModalEscape();

if (page === "home") {
  renderHome();
} else if (page === "project") {
  renderProjectPage();
} else if (page === "cv") {
  renderCvPage();
}
