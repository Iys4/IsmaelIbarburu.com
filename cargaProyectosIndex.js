const proyectosIndex = document.querySelector("#proyectosIndex");

function cargarProyectosIndex() {
    if (!proyectosIndex) return;
    
    proyectosIndex.innerHTML = ''; // Clear existing content
    
    listaProyectos.forEach(proyecto => {
        let paralaje = (Math.random() * 0.05).toFixed(3);
        let offset = (Math.random() * 40 -20).toFixed(3);
        const proyectoDiv = document.createElement('div');
        proyectoDiv.className = 'proyectoDiv parallax proyectoDiv2';
        proyectoDiv.dataset.speed = paralaje;
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


