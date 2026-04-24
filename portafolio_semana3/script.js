document.addEventListener("DOMContentLoaded", () => {
  // Se toman los elementos que controlan la apertura del menu.
  const menuToggle = document.getElementById("menuToggle");
  const menuHero = document.getElementById("menuHero");

  if (!menuToggle || !menuHero) {
    return;
  }

  // Abre y cierra el menu en pantallas pequeñas.
  menuToggle.addEventListener("click", () => {
    const isOpen = menuHero.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Cierra el menu cuando se selecciona un enlace en movil.
  menuHero.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 640) {
        menuHero.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
});
