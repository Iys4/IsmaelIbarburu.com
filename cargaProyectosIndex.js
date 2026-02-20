const proyectosIndex = document.querySelector("#proyectosIndex");

let paralaje = -0.1;
function cargarProyectosIndex() {
    if (!proyectosIndex) return;
    proyectosIndex.innerHTML = ''; // Clear existing content
    listaProyectos.forEach(proyecto => {
        let num =parseFloat((Math.random() * 0.05).toFixed(3));
        paralaje = paralaje + num;
        const proyectoDiv = document.createElement('div');
        proyectoDiv.className = 'proyectoDiv parallax proyectoDiv2';
        proyectoDiv.dataset.speed = paralaje;
        proyectoDiv.style.background = `url('${proyecto.datos}/PortadaIndex/PortadaBit.png') lightgray 50% / cover no-repeat`;
        proyectoDiv.innerHTML = `
            <div>
                <h5>${proyecto.titulo}</h5>
            </div>
            <h3>${proyecto.titulo}</h3>
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
        
        proyectosIndex.appendChild(proyectoDiv);
    });
}

cargarProyectosIndex();

function splitText(element) {
  const text = element.textContent;
  element.innerHTML = text
    .split("")
    .map(letter => `<span>${letter}</span>`)
    .join("");
}

const todoIntro = document.querySelectorAll(".intro-text");
console.log (todoIntro);

window.addEventListener("DOMContentLoaded", () => {
    todoIntro.forEach(element => {
          const el = element;
  splitText(el);
  const letters = el.querySelectorAll("span");

  letters.forEach((letter, i) => {
    setTimeout(() => {
      letter.style.opacity = 1;
      letter.style.transform = "translateY(0)";
    }, i * 90); // stagger timing
  });
    });
});


