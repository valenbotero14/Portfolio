let menuVisible = false;

//--------------------------------------------------------------
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

//----------------------------------------------------------------------
   //oculta el menu una vez que selecciono una opcion
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//--------------------------------------------------------------------------
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("excel");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("sql");
        habilidades[6].classList.add("gitgithub");
        habilidades[7].classList.add("powerbi");
        habilidades[8].classList.add("comunication");
        habilidades[9].classList.add("teamwork");
        habilidades[10].classList.add("leadership");
        habilidades[11].classList.add("dedication");
        habilidades[12].classList.add("adaptabilitytochange");
        habilidades[13].classList.add("integrityandprofessionalethics");
        habilidades[14].classList.add("initiative");
        habilidades[15].classList.add("learningability");

    }
}

//-----------------------------------------------------------------------
//oscurese el menu al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.contenedor-header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//------------------------------------------------------------------------
//descarga la hoja de vida
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'ruta-del-archivo/CV.pdf';
    link.download = 'CV.pdf';
    link.click();
}

//----------------------------------------------------------------------------
//ventana modal de la galeria
document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.imagenes img');
    const totalImages = images.length;
    const imagenesContainer = document.querySelector('.imagenes');


    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close-btn');


    images.forEach((image) => {
    image.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = image.src;
    });
    });

    closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    });


    window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
    });


    function showImage(index) {
    if (index < 0) {
        currentIndex = totalImages - 1;
    } else if (index >= totalImages) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }


      imagenesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }


    document.querySelector('.prev').addEventListener('click', () => {
    showImage(currentIndex - 1);
    });

    document.querySelector('.next').addEventListener('click', () => {
    showImage(currentIndex + 1);
    });


    setInterval(() => {
    showImage(currentIndex + 1);
    }, 5000);


    showImage(currentIndex);
});

//-----------------------------------------------------------------------------------//
//traduccion
const translations = {
    en: {
        home: "HOME",
        about: "ABOUT ME",
        interest: "INTEREST",
        skills: "SKILLS",
        curriculum: "CURRICULUM",
        certificates: "CERTIFICATES",
        projects: "PROJECTS",
        achievements: "ACHIEVEMENTS",
        references: "REFERENCES",
        profession: "Est. Systems Engineering | Software Developer | Junior in Technology",
        about1: "Hello, I am <strong>Valentina Velasquez Botero</strong>.",
        about2: "I am passionate about technology and <strong>innovative problem-solving</strong>. My curiosity has always driven me to explore tools and develop projects that blend <strong>creativity with functionality</strong>.",
        about3: "Recognized for being <strong>curious, determined, and self-reliant</strong>, I prioritize <strong>continuous learning</strong> to thrive in a global context. This mindset empowers me to tackle challenges and contribute to meaningful progress.",
        about4: "My goal is to refine my technical and interpersonal skills, creating <strong>impactful solutions</strong> while embracing growth and new opportunities.",
        download: "Download CV",
        interest1: "Programming",
        interestp1: "I enjoy creating functional and innovative code.",
        interest2: "Sport",
        interestp2: "I improve my physical and mental health, increase my energy, and develop discipline and teamwork.",
        interest3: "Technology",
        interestp3: "Exploring new tech trends is my passion.",
        interest4: "Learning",
        interestp4: "Continuous learning keeps me inspired and motivated.",
        interest5: "Collaboration",
        interestp5: "Working with others to solve problems is one of my strengths.",
        interest6: "Books",
        interestp6: "I expand my knowledge, improve my concentration, and connect with new perspectives and emotions.",
        skills1: "Technical Skills",
        skills2: "Professional Skills",
        skillsh1: "Comunication",
        skillsh2: "TeamWork",
        skillsh3: "Leadership",
        skillsh4: "Dedication",
        skillsh5: "Adaptability to change",
        skillsh6: "Integrity and professional ethics",
        skillsh7: "Initiative",
        skillsh8: "Learning ability",
        skillsn: "<strong style='color: rgb(218, 26, 26);'>¡Important! </strong> Aside from the skills mentioned, I continue to expand my competencies through continuous learning.",
        currit1: "Education",
        curris1: "Systems Engineer",
        currif1: "Present",
        currip1: "I am gaining a solid foundation in the creation of IT systems, programming, and the use of advanced technologies to solve complex problems.",
        curris2: "Seed plan",
        currip2: "I learned programming, where I gained knowledge that allowed me to develop a solid understanding of programming fundamentals.",
        curris3: "Software Development Technician",
        currip3: "With training in the creation of applications and IT solutions, using programming languages, and agile approaches for software development.",
        curris4: "Informatics",
        currip4:"Graduated from a high school with a technical focus in computer science, gaining foundational knowledge in programming, IT systems, and technology management.",
        currit5: "Professional experience",
        curris5: "Market Analytics and Development Analyst",
        currip5: "I was responsible for performing unit tests, managing data using Excel, and developing SQL queries to optimize processes. I used Python to implement automated solutions and improve efficiency in data analysis.",
        currin: "<strong style='color: rgb(218, 26, 26);'>¡Important! </strong> I am continuously learning and improving every day, always seeking new challenges. I am currently available to work and contribute my energy and skills to exciting projects.",
        certificatesn: "If you wish to see more certificates, you can access all of them at <a href='https://drive.google.com/drive/folders/1KzS3HnXKfmnEUpic2mvKahpuQXOpmr8-?usp=drive_link' target='_blank' style='color: rgb(218, 26, 26); font-weight: bold;'>Google Drive here</a>",
        projectst1: "Technical test",
        projectsp1: "Used various tools to achieve optimal results.",
        achievements1: "Operational Excellence - XM S.A (2024)",
        achievements2: "First place with web application - EPEMTI (2018)",
        achievements3: "Best graduation project - Fundacion Celia Duque (2018)",
        badges: "BADGES",
        badges1: "Badge of Agile Explorer",
        badges2: "Badge of Explore Emerging Tech",
        achievementsn: "If you wish to see more badges, you can access all of them at  <a href='https://www.credly.com/users/valentina-velasquez-botero' target='_blank' style='color: rgb(218, 26, 26); font-weight: bold;'>Credly  here</a>",
        references1: "\"Valentina has always proven to be someone who knows how to work in a team. She is easy to collaborate with because she creates a positive and productive environment. She communicates clearly, listens attentively, and always contributes useful ideas When faced with a challenge, Valentina doesn't stop. Additionally, she knows how to handle pressure well, staying calm and making strategic decisions that benefit the team She is someone who takes her responsibilities very seriously and maintains a proactive attitude at all times.\"",
        referencesc1: "Systems Engineering Professor",
        references2: "\"Vale constantly seeks improvement, with new challenges and knowledge ranging from sports practice to her academic and professional life. She is disciplined, curious, and has a collaborative spirit, contributing to the achievement of the goals and objectives set.\"",
        referencesc2: "Data & AI consultant"




    },
    es: {
        home: "INICIO",
        about: "SOBRE MÍ",
        interest: "INTERESES",
        skills: "HABILIDADES",
        curriculum: "CURRICULUM",
        certificates: "CERTIFICADOS",
        projects: "PROYECTOS",
        achievements: "LOGROS",
        references: "REFERENCIAS",
        profession: "Est. Ingeniería de Sistemas | Desarrolladora de Software | Junior en Tecnología",
        about1: "Hola, soy <strong>Valentina Velasquez Botero.</strong>",
        about2: "Me apasiona la tecnología y <strong>la solución innovadora de problemas</strong>. Desde siempre, mi curiosidad me ha llevado a explorar herramientas y desarrollar proyectos que combinan <strong>creatividad con funcionalidad</strong>.",
        about3: "Reconocida por ser <strong>curiosa, determinada e independiente</strong>, priorizo el <strong>aprendizaje continuo</strong> para destacar a nivel global. Esta mentalidad me permite afrontar desafíos y contribuir al progreso significativo.",
        about4: "Mi objetivo es perfeccionar mis habilidades técnicas y humanas, creando <strong>soluciones impactantes</strong> mientras abrazo el crecimiento y nuevas oportunidades.",
        download: "Descargar CV",
        interest1: "Programación",
        interestp1: "Disfruto creando código funcional e innovador.",
        interest2: "Deporte",
        interestp2: "Mejoro mi salud física y mental, aumento mi energía y desarrollo disciplina y trabajo en equipo.",
        interest3: "Tecnología",
        interestp3: "Explorar nuevas tendencias tecnológicas es mi pasión.",
        interest4: "Aprendizaje",
        interestp4: "El aprendizaje continuo me mantiene inspirado y motivado.",
        interest5: "Colaboración",
        interestp5: "Trabajar con otros para resolver problemas es una de mis fortalezas.",
        interest6: "Libros",
        interestp6: "Expando mi conocimiento, mejoro mi concentración y me conecto con nuevas perspectivas y emociones.",
        skills1: "Habilidades Técnicas",
        skills2: "Habilidades Profesionales",
        skillsh1: "Comunicación",
        skillsh2: "Trabajo en equipo",
        skillsh3: "Liderazgo",
        skillsh4: "Dedicación",
        skillsh5: "Adaptabilidad al cambio",
        skillsh6: "Integridad y ética profesional",
        skillsh7: "Iniciativa",
        skillsh8: "Capacidad de aprendizaje",
        skillsn: "<strong style='color: rgb(218, 26, 26);'>¡Importante!</strong> Además de las habilidades mencionadas, sigo expandiendo mis competencias mediante el aprendizaje continuo.",
        currit1: "Educación",
        curris1: "Ingeniero de Sistemas",
        currif1: "Presente",
        currip1: "Estoy adquiriendo una base sólida en la creación de sistemas informáticos, programación y el uso de tecnologías avanzadas para resolver problemas complejos.",
        curris2: "Plan de semilla",
        currip2: "Aprendí programación, donde adquirí conocimientos que me permitieron desarrollar una comprensión sólida de los fundamentos de la programación.",
        curris3: "Técnico en Desarrollo de Software",
        currip3: "Con formación en la creación de aplicaciones y soluciones informáticas, utilizando lenguajes de programación y enfoques ágiles para el desarrollo de software.",
        curris4: "Informática",
        currip4: "Graduada de un instituto de educación media con enfoque técnico en informática, adquiriendo conocimientos fundamentales en programación, sistemas informáticos y gestión de tecnologías.",
        currit5: "Experiencia profesional",
        curris5: "Analista de Análisis de Mercado y Desarrollo",
        currip5: "Fui responsable de realizar pruebas unitarias, gestionar datos utilizando Excel y desarrollar consultas SQL para optimizar procesos. Utilicé Python para implementar soluciones automatizadas y mejorar la eficiencia en el análisis de datos.",
        currin: "<strong style='color: rgb(218, 26, 26);'>¡Importante!</strong> Estoy aprendiendo y mejorando continuamente cada día, siempre buscando nuevos desafíos. Actualmente, estoy disponible para trabajar y aportar mi energía y habilidades a proyectos emocionantes.",
        certificatesn: "Si deseas ver más certificados, puedes acceder a todos ellos en <a href='https://drive.google.com/drive/folders/1KzS3HnXKfmnEUpic2mvKahpuQXOpmr8-?usp=drive_link' target='_blank' style='color: rgb(218, 26, 26); font-weight: bold;'>Google Drive aquí</a>",
        projectst1: "Prueba técnica",
        projectsp1: "Utilicé diversas herramientas para lograr resultados óptimos.",
        achievements1: "Excelencia Operacional - XM S.A (2024)",
        achievements2: "Primer lugar con aplicación web - EPEMTI (2018)",
        achievements3: "Mejor proyecto de graduación - Fundacion Celia Duque (2018)",
        badges: "INSIGNIAS",
        badges1: "Insignia de Explorador Ágil",
        badges2: "Insignia de Exploración de Tecnologías Emergentes",
        achievementsn: "Si deseas ver más insignias, puedes acceder a todas ellas en <a href='https://www.credly.com/users/valentina-velasquez-botero' target='_blank' style='color: rgb(218, 26, 26); font-weight: bold;'>Credly  aqui</a>",
        references1: "\"Valentina siempre ha demostrado ser alguien que sabe trabajar en equipo. Es fácil colaborar con ella porque crea un ambiente positivo y productivo. Se comunica claramente, escucha atentamente y siempre aporta ideas útiles. Cuando se enfrenta a un desafío, Valentina no se detiene. Además, sabe manejar bien la presión, manteniéndose tranquila y tomando decisiones estratégicas que benefician al equipo. Es alguien que se toma sus responsabilidades muy en serio y mantiene una actitud proactiva en todo momento.\"",
        referencesc1: "Docente de Ingeniería de Sistemas",
        references2: "\"Vale busca constantemente la mejora, con nuevos desafíos y conocimientos que van desde la práctica deportiva hasta su vida académica y profesional. Es disciplinada, curiosa y tiene un espíritu colaborativo, contribuyendo al logro de los objetivos y metas establecidos.\"",
        referencesc2: "Consultora de Datos e Inteligencia Artificial"
    }
};

// Cambiar idioma
const setLanguage = (lang) => {
    try {
        localStorage.setItem('language', lang);
    } catch (e) {
        console.warn('LocalStorage no está disponible.');
    }
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(element => {
        const key = element.getAttribute("data-translate");
        element.innerHTML = translations[lang][key] || key;
    });
};


// Establecer idioma inicial
document.addEventListener("DOMContentLoaded", () => {
    // Asociamos el evento de cambio de idioma al botón de español
    const spanishButton = document.getElementById('spanishButton');
    spanishButton.addEventListener('click', () => setLanguage('es'));

    // Asociamos el evento de cambio de idioma al botón de inglés
    const englishButton = document.getElementById('englishButton');
    englishButton.addEventListener('click', () => setLanguage('en'));

    // Recuperamos el idioma guardado en localStorage y lo aplicamos
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
});


//----------------------------------------------------------------------------
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}