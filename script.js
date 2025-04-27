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
        "project1-title": "Project 1",
        "project1-desc": "This is a description of project 1.",
        "project2-title": "Project 2",
        "project2-desc": "This is a description of project 2.",
        "contact-heading": "Contact",
        "contact-email": "You can reach me at: <a href='mailto:steven.vieira@protonmail.com'>steven.vieira@protonmail.com</a>",
        footer: "&copy; 2025 Your Name. All rights reserved."
    },
    fr: {
        title: "Mon Portfolio",
        "header-title": "Bienvenue dans Mon Portfolio",
        "nav-about": "À propos de moi",
        "nav-projects": "Projets",
        "nav-contact": "Contact",
        "projects-heading": "Projets",
        "project1-title": "Projet 1",
        "project1-desc": "Ceci est une description du projet 1.",
        "project2-title": "Projet 2",
        "project2-desc": "Ceci est une description du projet 2.",
        "contact-heading": "Contact",
        "contact-email": "Vous pouvez me contacter à : <a href='mailto:steven.vieira@protonmail.com'>steven.vieira@protonmail.com</a>",
        footer: "&copy; 2025 Votre Nom. Tous droits réservés."
    },
    es: {
        title: "Mi Portafolio",
        "header-title": "Bienvenido a Mi Portafolio",
        "nav-about": "Sobre mí",
        "nav-projects": "Proyectos",
        "nav-contact": "Contacto",
        "projects-heading": "Proyectos",
        "project1-title": "Proyecto 1",
        "project1-desc": "Esta es una descripción del proyecto 1.",
        "project2-title": "Proyecto 2",
        "project2-desc": "Esta es una descripción del proyecto 2.",
        "contact-heading": "Contacto",
        "contact-email": "Puedes contactarme en: <a href='mailto:steven.vieira@protonmail.com'>steven.vieira@protonmail.com</a>",
        footer: "&copy; 2025 Tu Nombre. Todos los derechos reservados."
    }
};

let currentLangIndex = 0;
const languages = ["en", "fr", "es"];

function applyTranslations(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            if (el.tagName === "TITLE" || key === "title") {
                document.title = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
}

document.getElementById("language-toggle").addEventListener("click", () => {
    currentLangIndex = (currentLangIndex + 1) % languages.length;
    applyTranslations(languages[currentLangIndex]);
});

window.onload = () => {
    applyTranslations(languages[currentLangIndex]);
};

