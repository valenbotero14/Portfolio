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

//----------------------------------------------------------------------------
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}