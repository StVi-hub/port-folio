let projects = document.querySelectorAll('.project-preview');
let currentIndex = 0;
let autoRotate = setInterval(nextProject, 3000);

function nextProject() {
    updateCarousel((currentIndex + 1) % projects.length);
}

function showProject(projectId) {
    clearInterval(autoRotate); // Stop auto-rotation

    let clickedIndex = Array.from(projects).findIndex(p => p.id === projectId);
    if (clickedIndex !== -1) {
        updateCarousel(clickedIndex);
        showProjectDetails(projectId);
    }
}

function updateCarousel(newIndex) {
    projects.forEach((project, index) => {
        project.classList.remove('active', 'left', 'right', 'hidden-project');
    });

    let prevIndex = (newIndex - 1 + projects.length) % projects.length;
    let nextIndex = (newIndex + 1) % projects.length;

    projects[newIndex].classList.add('active');
    projects[prevIndex].classList.add('left');
    projects[nextIndex].classList.add('right');

    // Hide all other projects
    projects.forEach((project, index) => {
        if (index !== newIndex && index !== prevIndex && index !== nextIndex) {
            project.classList.add('hidden-project');
        }
    });

    currentIndex = newIndex;
}

function showProjectDetails(projectId) {
    document.querySelectorAll('.project').forEach(div => div.classList.add('hidden'));
    let details = document.getElementById(projectId + '-details');
    if (details) details.classList.remove('hidden');
}


const translations = {
    en: {
        title: "My Portfolio",
        "header-title": "Welcome to My Portfolio",
        "nav-about": "About Me",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "projects-heading": "Projects",
        "contact-heading": "Contact",
        "contact-email": "You can reach me at: <a href='mailto:steven.vieira@protonmail.com'>steven.vieira@protonmail.com</a>",
        footer: "&copy; 2025 Steven Vieira. All rights reserved.",
        "skills-heading": "Skills",
        "skills-databases-title": "Databases & Modeling",
        "skills-databases-list": "<li>MySQL</li><li>UML (Unified Modeling Language)</li><li>Modelisation BDD</li><li>Laravel Eloquent ORM</li><li>CRUD Implementation (Create, Research, Update, Delete)</li>",
        "skills-programming-title": "Programming & Web Development",
        "skills-programming-list": "<li>Python</li><li>C</li><li>C++</li><li>PHP</li><li>POO</li><li>HTML</li><li>CSS</li><li>JavaScript</li><li>Tailwind CSS</li><li>Laravel</li>",
        "skills-networking-title": "Networking & Tools",
        "skills-networking-list": "<li>TCP/IP</li><li>Routing</li><li>IPv4/IPv6</li><li>Wireshark</li><li>Cisco Packet Tracer (CPT)</li><li>Git</li><li>GitHub</li><li>Linux</li><li>Windows</li><li>Office 365</li>",
        "about-heading": "About Me",
        "about-paragraph1": "Hello! I'm <span class='text-blue-400 font-semibold'>Steven Vieira</span>, a computer science engineer student fueled by a deep passion for IT and innovation.",
        "about-paragraph2": "I have hands-on experience in building databases from specifications, developing dynamic websites, writing clean and efficient code, debugging, and collaborating effectively within teams. I thrive on solving problems and bringing ideas to life through technology.",
        "about-paragraph3": "As I continue my journey toward becoming a skilled engineer, I stay committed to constant learning, professional excellence, and personal growth.",
        "project1-description": "LinkedIn-Inspired Web Platform: A dynamic web application designed to connect professionals and facilitate networking. Built with modern front-end technologies like HTML, Tailwind CSS, and JavaScript, and powered by a robust back-end using Laravel (PHP) and a MySQL database.",
        "project2-description": "Conway's Game of Life in C++: An application built using CLion and CMake. It features a graphical interface powered by SFML, custom save/load functionality, an editable grid, and multiple simulation modes for cellular automata dynamics.",
        "project3-description": "DevOps Dashboard: A full-stack real-time dashboard that displays GitHub commits, CI/CD pipeline statuses, deployment logs, and project health metrics using modern DevOps tools.",
        "project4-description": "Portfolio Website: A responsive personal website showcasing projects, skills, and certifications. Designed with Tailwind CSS and deployed via Netlify."
    },
    fr: {
        title: "Mon Portfolio",
        "header-title": "Bienvenue dans Mon Portfolio",
        "nav-about": "À propos de moi",
        "nav-projects": "Projets",
        "nav-contact": "Contact",
        "projects-heading": "Projets",
        "contact-heading": "Contact",
        "contact-email": "Vous pouvez me contacter à : <a href='mailto:steven.vieira@protonmail.com'>steven.vieira@protonmail.com</a>",
        footer: "&copy; 2025 Steven Vieira. Tous droits réservés.",
        "skills-heading": "Compétences",
        "skills-databases-title": "Bases de données et modélisation",
        "skills-databases-list": "<li>MySQL</li><li>UML (Langage de modélisation unifié)</li><li>Modélisation BDD</li><li>Laravel Eloquent ORM</li><li>Implémentation CRUD (Créer, Rechercher, Mettre à jour, Supprimer)</li>",
        "skills-programming-title": "Programmation et développement Web",
        "skills-programming-list": "<li>Python</li><li>C</li><li>C++</li><li>PHP</li><li>POO</li><li>HTML</li><li>CSS</li><li>JavaScript</li><li>Tailwind CSS</li><li>Laravel</li>",
        "skills-networking-title": "Réseaux et outils",
        "skills-networking-list": "<li>TCP/IP</li><li>Routage</li><li>IPv4/IPv6</li><li>Wireshark</li><li>Cisco Packet Tracer (CPT)</li><li>Git</li><li>GitHub</li><li>Linux</li><li>Windows</li><li>Office 365</li>",
        "about-heading": "À propos de moi",
        "about-paragraph1": "Bonjour ! Je suis <span class='text-blue-400 font-semibold'>Steven Vieira</span>, un étudiant en ingénierie informatique passionné par les technologies de l'information et l'innovation.",
        "about-paragraph2": "J'ai une expérience pratique dans la création de bases de données à partir de spécifications, le développement de sites Web dynamiques, l'écriture de code propre et efficace, le débogage et la collaboration efficace au sein d'équipes. J'adore résoudre des problèmes et donner vie à des idées grâce à la technologie.",
        "about-paragraph3": "Alors que je poursuis mon parcours pour devenir un ingénieur qualifié, je reste engagé dans un apprentissage constant, l'excellence professionnelle et le développement personnel.",
        "project1-description": "Plateforme Web inspirée de LinkedIn : Une application Web dynamique conçue pour connecter des professionnels et faciliter le réseautage. Construite avec des technologies frontales modernes comme HTML, Tailwind CSS et JavaScript, et alimentée par un back-end robuste utilisant Laravel (PHP) et une base de données MySQL.",
        "project2-description": "Le jeu de la vie de Conway en C++ : Une application construite à l'aide de CLion et CMake. Elle dispose d'une interface graphique alimentée par SFML, d'une fonctionnalité de sauvegarde/chargement personnalisée, d'une grille modifiable et de plusieurs modes de simulation pour les dynamiques d'automates cellulaires.",
        "project3-description": "Tableau de bord DevOps : Un tableau de bord en temps réel full-stack qui affiche les commits GitHub, les statuts des pipelines CI/CD, les journaux de déploiement et les métriques de santé des projets à l'aide d'outils DevOps modernes.",
        "project4-description": "Site Web Portfolio : Un site Web personnel réactif présentant des projets, des compétences et des certifications. Conçu avec Tailwind CSS et déployé via Netlify."
    }
};

let currentLanguage = "en";

function applyTranslations(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

document.getElementById("language-switcher").addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "fr" : "en";
    applyTranslations(currentLanguage);
    document.getElementById("language-switcher").textContent = currentLanguage === "en" ? "Français" : "English";
});

window.onload = () => {
    applyTranslations(currentLanguage);
};

