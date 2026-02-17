import Lenis from 'https://cdn.jsdelivr.net/npm/@studio-freight/lenis/dist/lenis.mjs'

document.addEventListener('DOMContentLoaded', function() {
    // Populate header
    const header = document.querySelector('header');
    if (header) {
        const linkIntro = document.createElement('a');
        linkIntro.href = 'index.html'
        const img = document.createElement('img');
        img.src = 'Imagenes/Logos/logo.svg';
        img.alt = 'Inicio';
        linkIntro.appendChild(img);
        const itemsHeader = document.createElement('div');
        itemsHeader.className = 'itemsHeader';
        const links = ['Audiovisual', 'Branding', 'Web'];
        links.forEach(linkText => {
            const a = document.createElement('a');
            a.href = ('seccionEvent.html?id=' + linkText);
            a.id = (linkText + "HeaderLink");
            a.textContent = linkText;
            itemsHeader.appendChild(a);
        });
        header.appendChild(linkIntro);
        header.appendChild(itemsHeader);
    }

    // Populate footer
    const footer = document.querySelector('footer');
    if (footer) {
        const p1 = document.createElement('p');
        p1.textContent = '2026';
        footer.appendChild(p1);
        const p2 = document.createElement('p');
        p2.textContent = 'Ismael Ibarburu';
        footer.appendChild(p2);
        const p3 = document.createElement('p');
        p3.textContent = 'Ismael.Ibarburu@gmail.com';
        footer.appendChild(p3);
    }

    // Spotlight effect - track mouse position to reveal background image
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX;
        const y = e.clientY;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Calculate percentage position
        const xPercent = (x / windowWidth) * 100;
        const yPercent = (y / windowHeight) * 100;
        
        // Update CSS custom properties on the body
        document.body.style.setProperty('--mouse-x', xPercent + '%');
        document.body.style.setProperty('--mouse-y', yPercent + '%');
    });
});



document.addEventListener("mouseover", function (e) {
    if (e.target.closest("a")) {
        document.body.style.setProperty('--reveal-radius', '20px');
    }
});

document.addEventListener("mouseout", function (e) {
    if (e.target.closest("a")) {
        document.body.style.setProperty('--reveal-radius', '100px');
    }
});

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
    duration: 2.2,          // smoothness (higher = smoother/slower)
  smoothWheel: true,
  wheelMultiplier: 0.7,     // scroll speed
  touchMultiplier: 1.5,
});


function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}



lenis.on('scroll', (e) => {
  if (e.direction === 1) {
    document.body.classList.add('scroll-down');
  } else {
    document.body.classList.remove('scroll-down');
  }
});

lenis.on('scroll', (e) => {
  document.querySelectorAll('.parallax').forEach(el => {
    const speed = el.dataset.speed || 0.2;
    el.style.transform = `translateY(${e.scroll * speed}px)`;
  });
});

lenis.on('scroll', (e) => {
  const trigger = 0.01; // 30% scroll

  if (e.progress > trigger) {
    document.querySelector('.secret').classList.add('visible');
  } else {
    document.querySelector('.secret').classList.remove('visible');
  }
});


lenis.on('scroll', (e) => {
  const radius = 50 + e.progress * 400;
  document.body.style.setProperty('--reveal-radius', radius + 'px');
});


requestAnimationFrame(raf);


