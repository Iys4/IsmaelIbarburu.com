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
    if (idCat === seccionesEventos[0].titulo) {
        numeroArray = 0;
    } else if (idCat === seccionesEventos[1].titulo) {
        numeroArray = 1;
    } else if (idCat === seccionesEventos[2].titulo) {
        numeroArray = 2;
    } else if (idCat === seccionesEventos[3].titulo) {
        numeroArray = 3;
    } else if (idCat === seccionesEventos[1].titulo) {
        numeroArray = 3;
    }
    tituloCat.innerHTML = `${seccionesEventos[numeroArray].titulo}`
    descripcionCat.innerHTML = `${seccionesEventos[numeroArray].descripcion}`
}

function cargarProyectos() {
    const proyectosFiltrados = listaProyectos.filter(proyecto => proyecto.categorias.includes(idCat));
    proyectosCat.innerHTML = ''; // Clear existing content
    proyectosFiltrados.forEach(proyecto => {
        const proyectoDiv = document.createElement('div');
        proyectoDiv.className = 'proyectoDiv';
        proyectoDiv.style.background = `url('${proyecto.datos}/Portada.png') lightgray 50% / cover no-repeat`;

        proyectoDiv.innerHTML = `
            <h3>${proyecto.titulo}</h3>
            <div>
                ${proyecto.categorias.map(cat => `<h5>${cat}</h5>`).join('')}
            </div>
        `;
        proyectoDiv.addEventListener("mouseleave", () => {
            proyectoDiv.style.background = `url('${proyecto.datos}/Portada.png') lightgray 50% / cover no-repeat`;
        });
        proyectoDiv.addEventListener("mouseover", () => {
        proyectoDiv.style.background = `url('${proyecto.datos}/Portada2/Portada2.png') lightgray 50% / cover no-repeat`;
});
        proyectoDiv.addEventListener('click', () => {
            window.location.href = `proyecto.html?id=${proyecto.titulo}`;
        });
        proyectosCat.appendChild(proyectoDiv);
    });
}

cargarProyectos();
