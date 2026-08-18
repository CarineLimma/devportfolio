const header = document.getElementById("header");
const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav a");
const reveals = document.querySelectorAll(".reveal");
const cursorGlow = document.getElementById("cursorGlow");




window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});




if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}


navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (nav) {
            nav.classList.remove("active");
        }
    });
});



const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");

                revealObserver.unobserve(
                    entry.target
                );
            }
        });
    },
    {
        threshold: 0.1
    }
);


reveals.forEach((element) => {
    revealObserver.observe(element);
});




const desktop = window.matchMedia("(pointer: fine)").matches;


if (desktop && cursorGlow) {

    document.addEventListener("mousemove", (event) => {
        cursorGlow.style.opacity = "1";

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;
    });


    document.addEventListener("mouseleave", () => {
        cursorGlow.style.opacity = "0";
    });

}




const projects = {

    financeiro: {

        type: "FULL STACK APPLICATION",

        title: "Sistema Financeiro",

        description:
            "Aplicação Full Stack desenvolvida para centralizar receitas, despesas, transações recorrentes, histórico financeiro e análise de dados em uma única plataforma.",

        image: "img/vd.mp4",

        features: [
            "Login e autenticação",
            "Receitas e despesas",
            "Transações recorrentes",
            "Filtros e histórico",
            "Gráficos financeiros",
            "Relatórios",
            "Exportação PDF e Excel"
        ],

        technologies: [
            "Python",
            "Flask",
            "SQLite",
            "JavaScript",
            "HTML",
            "CSS"
        ],

        github:
            "https://github.com/CarineLimma/financeiro"
    },


    cafeteria: {

        type: "SAAS APPLICATION",

        title: "SaaS para Cafeterias",

        description:
            "Plataforma desenvolvida para centralizar produtos, pedidos, cardápio, operações e relatórios de uma cafeteria em um único sistema.",

        image: "img/vdsaas.mp4",

        features: [
            "Dashboard administrativo",
            "Gerenciamento de produtos",
            "Controle de pedidos",
            "Cardápio digital",
            "Carrinho de compras",
            "Retirada e entrega",
            "Relatórios"
        ],

        technologies: [
            "Python",
            "Flask",
            "SQL",
            "JavaScript",
            "HTML",
            "CSS"
        ],

        github:
            "https://github.com/CarineLimma/saascafeteira"
    },


    agenda: {

        type: "WEB APPLICATION",

        title: "Sistema de Agendamento",

        description:
            "Solução criada para organizar horários, serviços e a jornada de agendamento entre cliente e estabelecimento.",

        image: "img/vdagenda.mp4",

        features: [
            "Cadastro de serviços",
            "Escolha de horários",
            "Área do cliente",
            "Área administrativa",
            "Controle de agenda",
            "Gerenciamento de atendimentos"
        ],

        technologies: [
            "Front-end",
            "Back-end",
            "Database"
        ],

        github:
            "https://github.com/CarineLimma/sistemadeagendamento"
    },


    lista: {

        type: "WEB APPLICATION",

        title: "Lista de Compras",

        description:
            "Aplicação interativa desenvolvida para organizar listas de compras, permitindo adicionar, remover e categorizar itens, calcular automaticamente os valores e acompanhar a compra em tempo real.",

        image: "img/vdlista.mp4",

        features: [
            "Adicionar itens",
            "Remover itens",
            "Organização por categorias",
            "Cálculo automático de valores",
            "Acompanhamento da compra",
            "Atualização em tempo real"
        ],

        technologies: [
            "Front-end",
            "Back-end",
            "Database"
        ],

        github:
            "https://github.com/CarineLimma/listadecompras"
    },


    landing: {

        type: "LANDING PAGE",

        title: "Landing Page",

        description:
            "Landing page responsiva desenvolvida para apresentar produtos ou serviços, com foco em conversão, experiência do usuário e adaptação para diferentes dispositivos.",

        image: "img/vdlp.mp4",

        features: [
            "Layout responsivo",
            "Apresentação de serviços",
            "Design focado em conversão",
            "Experiência mobile",
            "Seções estratégicas",
            "Integração com contato"
        ],

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsivo"
        ],

        github:
            "https://github.com/CarineLimma/matulovicestetica"
    },


    "mega-sena": {

        type: "WEB APPLICATION",

        title:
            "Simulador Estatístico da Mega-Sena",

        description:
            "Aplicação que simula e analisa estatísticas de resultados da Mega-Sena, permitindo observar padrões, tendências e comparar números.",

        image:
            "img/vdjogo.mp4",

        features: [
            "Análise de estatísticas",
            "Simulação de resultados",
            "Filtros",
            "Comparação de números",
            "Análise de padrões",
            "Visualização de resultados"
        ],

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Lógica"
        ],

        github:
            "https://github.com/CarineLimma/jogocomestatisticas"
    }

};

const projectModal =
    document.getElementById("projectModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalClose =
    document.getElementById("modalClose");

const modalTitle =
    document.getElementById("modalTitle");

const modalType =
    document.getElementById("modalType");

const modalDescription =
    document.getElementById("modalDescription");

const modalMedia =
    document.getElementById("modalMedia");

const modalFeatures =
    document.getElementById("modalFeatures");

const modalTech =
    document.getElementById("modalTech");

const modalGithub =
    document.getElementById("modalGithub");

const projectButtons =
    document.querySelectorAll(".project-button");




function openProject(projectName) {

    const project =
        projects[projectName];


    if (!project) {
        console.error(
            `Projeto "${projectName}" não encontrado.`
        );

        return;
    }


    if (modalType) {
        modalType.textContent =
            project.type;
    }


    if (modalTitle) {
        modalTitle.textContent =
            project.title;
    }


    if (modalDescription) {
        modalDescription.textContent =
            project.description;
    }


    
    if (modalMedia) {

        modalMedia.innerHTML = "";


        if (
            project.image &&
            project.image
                .toLowerCase()
                .endsWith(".mp4")
        ) {

            const video =
                document.createElement("video");


            video.src =
                project.image;


            video.controls =
                true;


            video.playsInline =
                true;


            video.preload =
                "metadata";


            video.classList.add(
                "project-video"
            );


            modalMedia.appendChild(
                video
            );


        } else if (project.image) {

            const image =
                document.createElement("img");


            image.src =
                project.image;


            image.alt =
                project.title;


            image.classList.add(
                "project-image"
            );


            modalMedia.appendChild(
                image
            );

        }

    }


   
    if (modalFeatures) {

        modalFeatures.innerHTML = "";


        project.features.forEach(
            (feature) => {

                const li =
                    document.createElement("li");


                li.textContent =
                    feature;


                modalFeatures.appendChild(
                    li
                );

            }
        );

    }


 

    if (modalTech) {

        modalTech.innerHTML = "";


        project.technologies.forEach(
            (technology) => {

                const span =
                    document.createElement("span");


                span.textContent =
                    technology;


                modalTech.appendChild(
                    span
                );

            }
        );

    }


    

    if (modalGithub) {

        modalGithub.href =
            project.github;

    }


   

    if (projectModal) {

        projectModal.classList.add(
            "active"
        );

    }


    document.body.classList.add(
        "modal-open"
    );

}




function closeProject() {

    if (projectModal) {

        projectModal.classList.remove(
            "active"
        );

    }


    document.body.classList.remove(
        "modal-open"
    );


    // Para o vídeo quando fecha
    if (modalMedia) {

        const video =
            modalMedia.querySelector("video");


        if (video) {
            video.pause();
        }

    }

}





projectButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const project =
                button.dataset.project;


            openProject(
                project
            );

        }
    );

});




if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProject
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeProject
    );

}


document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {
            closeProject();
        }

    }
);




const heroVisual =
    document.querySelector(".hero-visual");


if (
    heroVisual &&
    desktop
) {

    document.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (
                    event.clientX /
                    window.innerWidth -
                    0.5
                ) * 6;


            const y =
                (
                    event.clientY /
                    window.innerHeight -
                    0.5
                ) * 6;


            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );

}


console.log(`
Carine Lima
Full Stack Developer

<built with curiosity />
`);