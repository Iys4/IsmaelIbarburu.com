const seccionesEventos = [{
    titulo: 'Contactame',
    descripcion: "Redes sociales, spots publicitarios e IA, audiovisuales pensados para atraer en esta década.",
    },{
    titulo: 'Audiovisual',
    descripcion: "Redes sociales, spots publicitarios e IA, audiovisuales pensados para atraer en esta década.",
    },
{
    titulo: 'Branding',
    descripcion: "Creación de identidades visuales memorables comenzando desde la marca. sociales, spots publicitarios e IA, audiovisuales pensados para atraer en esta década.",
    },
{
    titulo: 'Web',
    descripcion: "Webs y aplicaciones atractivas y funcionales. Con el usuario como prioridad."
    },
{
    titulo: 'Juegos',
    descripcion: "Juegos interactivos y aplicaciones educativas desarrolladas para web."
    }];
const params = new URLSearchParams(window.location.search);
const idCat = params.get("id");
console.log(idCat);
const tituloCat = document.querySelector ("#tituloCat");
const descripcionCat = document.querySelector ("#descripcionCat");
const proyectosCat = document.querySelector ("#proyectosCat");

cargarTitulos();

function cargarTitulos() {
    let numeroArray = 0;
    const foundIndex = seccionesEventos.findIndex(sec => sec.titulo === idCat);
    if (foundIndex !== -1) {
        numeroArray = foundIndex;
    }
    tituloCat.innerHTML = `${seccionesEventos[numeroArray].titulo}`
    descripcionCat.innerHTML = `${seccionesEventos[numeroArray].descripcion}`
}

function cargarProyectos() {
    if (idCat === 'Juegos' && typeof listaJuegos !== 'undefined') {
        proyectosCat.classList.remove('secret');
        proyectosCat.innerHTML = '';
        const menuNav = document.createElement('nav');
        menuNav.className = 'menuJuegosChico';
        listaJuegos.forEach(juego => {
            const link = document.createElement('a');
            link.href = juego.url;
            link.className = 'linkEstilos itemMenuJuego';
            link.textContent = juego.titulo + ' >';
            menuNav.appendChild(link);
        });
        proyectosCat.appendChild(menuNav);
        return;
    }

    const proyectosFiltrados = listaProyectos.filter(proyecto => proyecto.categorias.includes(idCat));
    proyectosCat.innerHTML = ''; // Clear existing content
    proyectosFiltrados.forEach(proyecto => {
        const proyectoDiv = document.createElement('div');
        proyectoDiv.className = 'proyectoDiv';
        proyectoDiv.style.background = `url('${proyecto.datos}/PortadaIndex/PortadaBit.png') lightgray 50% / cover no-repeat`;

        proyectoDiv.innerHTML = `
            <h3>${proyecto.titulo}</h3>
            <div>
                <h5>${proyecto.titulo}</h5>
            </div>
        `;
        proyectoDiv.addEventListener("mouseleave", () => {
            proyectoDiv.style.background = `url('${proyecto.datos}/PortadaIndex/PortadaBit.png') lightgray 50% / cover no-repeat`;
        });
        proyectoDiv.addEventListener("mouseover", () => {
        proyectoDiv.style.background = `url('${proyecto.datos}/Portada.png') lightgray 50% / cover no-repeat`;
});
        proyectoDiv.addEventListener('click', () => {
            window.location.href = `proyecto.html?id=${proyecto.titulo}`;
        });
        proyectosCat.appendChild(proyectoDiv);
    });
}

cargarProyectos();
