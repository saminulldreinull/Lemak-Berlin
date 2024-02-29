window.onload = () => {
  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scroll > 10) {
      document.querySelector(".header").classList.add("header-fixed", "shadow");
      document.querySelector(".logo").classList.add("headers-list");
    } else {
      document.querySelector(".logo").classList.remove("headers-list");
      document.querySelector(".header").classList.remove("header-fixed", "shadow");
    }
    myFunction(); // Aufruf innerhalb des scroll Event Listeners
  });

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach(n => 
      n.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
      })
  );
};
