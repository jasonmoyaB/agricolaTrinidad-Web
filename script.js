function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
  }
 

/*carrusel,galeria*/ 
let currentIndex = 0;

  function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;

    if (!carousel) {
      console.error("No se encontró el contenedor del carrusel.");
      return;
    }

    currentIndex += direction;
    if (currentIndex < 0) currentIndex = totalItems - 1;
    if (currentIndex >= totalItems) currentIndex = 0;

    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
  }
  


