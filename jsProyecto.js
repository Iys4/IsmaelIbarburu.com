const params = new URLSearchParams(window.location.search);
const idCat = params.get("id");

const tituloPro = document.querySelector ("#tituloPro");
const descripcionPro = document.querySelector ("#descripcionPro");
const descripcion2Pro = document.querySelector ("#descripcion2Pro");
const mostradorDeItems = document.querySelector("#mostradorDeItems");
const mostradorDeHerramientasPro = document.querySelector("#mostradorDeHerramientasPro");
const imagen3dproyecto = document.querySelector("#imagen3dproyecto");

let randomBit = Math.floor(Math.random() * 2);
if (randomBit == 0) {
    imagen3dproyecto.innerHTML = `<img src=Imagenes/3ds/Cubvo.gif></img>
    <a href="#mostradorDeItems" class="linkEstilos parallax" data-speed="-0.9">Ver Proyecto ></a>`
} else {
    imagen3dproyecto.innerHTML = `<img src=Imagenes/3ds/Esfera_1.gif></img>
    <a href="#mostradorDeItems" class="linkEstilos parallax" data-speed="-0.9">Ver Proyecto ></a>`
}

let proyectoDisplay = {};
listaProyectos.forEach(proyecto => {
    if (proyecto.titulo === idCat) {
        tituloPro.innerHTML = `${proyecto.titulo}`
        descripcionPro.innerHTML = `${proyecto.descripcion}`
        descripcion2Pro.innerHTML = `${proyecto.descripcion2}`
        proyecto.herramientas.forEach(herramienta => {
            mostradorDeHerramientasPro.innerHTML += `<img src="${herramienta}"><img>`
        });
        proyectoDisplay = proyecto;
        console.log(proyectoDisplay);
        cargarInfo();
    }
});
function cargarInfo () {
if (proyectoDisplay.tipo === "behance"){
    cargarBehance();
} else if (proyectoDisplay.tipo === "figma"){
    cargarFigma();
} else if (proyectoDisplay.tipo === "video"){
    cargarVideo();
} else if (proyectoDisplay.tipo === "mobile") {
    cargarMobile();
}
}

function cargarBehance() {
    proyectoDisplay.imagenes.forEach(imagen => {
        const imagenElement = document.createElement('img');
        imagenElement.src = imagen;
        mostradorDeItems.appendChild(imagenElement);
    });
    if (proyectoDisplay.titulo === "Fiestas del Uruguay") {
            const imagenElement = document.createElement('div');
        imagenElement.innerHTML = `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/WZb5Z0AUkqAzvMwObwL4sg/DICW-FIESTAS-DEL-URUGUAY--Copia---Copia-?page-id=2001%3A2&node-id=2004-2&viewport=1075%2C317%2C0.05&scaling=scale-down-width&content-scaling=fixed&embed-host=share" allowfullscreen></iframe>`
        mostradorDeItems.appendChild(imagenElement);
    }
}

function cargarFigma() {
    const imagenElement = document.createElement('div');
    proyectoDisplay.imagenes.forEach(imagen => {
        const imagenElement = document.createElement('img');
        imagenElement.src = imagen;
        mostradorDeItems.appendChild(imagenElement);
    });
    imagenElement.innerHTML = `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" height="650" src="https://embed.figma.com/proto/AUk1M6Lx6TB4SVMCel0Xvo/Glitchen?page-id=62%3A30522&node-id=64-83835&viewport=-358%2C766%2C0.21&scaling=scale-down-width&content-scaling=fixed&embed-host=share" allowfullscreen></iframe>`
    mostradorDeItems.appendChild(imagenElement);
}

function cargarVideo(){
    const imagenElement = document.createElement('div');
    imagenElement.innerHTML = `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" height="650" src="https://www.youtube.com/embed/d-MZnTRimoM?autoplay=1&mute=1&loop=1&playlist=d-MZnTRimoM" allowfullscreen></iframe>`
    mostradorDeItems.appendChild(imagenElement);
}

function cargarMobile(){
    const gridElement = document.createElement('div');
    gridElement.className = "grillaPosts";
        proyectoDisplay.imagenesCuadradas.forEach(imagen => {
        const imagenElement = document.createElement('img');
        imagenElement.src = imagen;
        imagenElement.className = "cuadradoGrilla"
        gridElement.appendChild(imagenElement);
    });
        proyectoDisplay.links.forEach(link => {
        const imagenElement = document.createElement('div');
        imagenElement.innerHTML = `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" height="650" src="https://www.youtube.com/embed/${link}?autoplay=1&controls=0&mute=1&loop=1&playlist=${link}" allowfullscreen></iframe>`
        imagenElement.className = "rectGrilla"
        gridElement.appendChild(imagenElement);
    });
        proyectoDisplay.imagenesRect.forEach(imagen => {
        const imagenElement = document.createElement('img');
        imagenElement.src = imagen;
        imagenElement.className = "cuadradoApaisar"
        gridElement.appendChild(imagenElement);
    });
    mostradorDeItems.appendChild(gridElement);
}


