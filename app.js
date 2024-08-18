    window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
  if(window.innerWidth > 768) {
    if (scrollPosition > 50) { // Cambia este valor según cuándo quieras que se aplique el efecto
      header.classList.add('scrolled');
      header.style.width = 'auto';
     header.style.translate = '15%';
    } else {
      header.classList.remove('scrolled');
      header.style.width = '100%';
      header.style.translate = '0%';
    }
  }
  });
 



  function mostrarMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.remove('menu_oculto');
    menu.classList.add('menu_mostrado');
   
    console.log("Menu mostrado");
    
    // Cambia la función onclick para ocultar el menú la próxima vez
    document.getElementById('menu-toggle').onclick = ocultarMenu;
}

function ocultarMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.remove('menu_mostrado');
    menu.classList.add('menu_oculto');
    console.log("Menu oculto");
    
    // Cambia la función onclick para mostrar el menú la próxima vez
    document.getElementById('menu-toggle').onclick = mostrarMenu;
}

// Inicializa el botón con la función de mostrar el menú
document.getElementById('menu-toggle').onclick = mostrarMenu;