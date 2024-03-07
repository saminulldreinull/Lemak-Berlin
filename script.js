window.onload = () => {
  let openMenu = document.querySelector(".open-menu");

  openMenu.addEventListener("click", (e) => {
    document.documentElement.style.overflow = 'hidden';
  });

  let closeMenu = document.querySelector(".close-menu");
  closeMenu.addEventListener("click", (e) => {
    document.documentElement.style.overflow = 'visible';
  });

  // Füge Event-Listener zu den Navigationslinks hinzu
  let navLinks = document.querySelectorAll(".nav-item");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      closeMenu.click();  // Ruft den Klick-Event-Handler für den Schließen-Button auf
    });
  });

  window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 10) {
      document.querySelector("header").classList.add("shadow");
    } else {
      document.querySelector("header").classList.remove("shadow");
    }
  });
};