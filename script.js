window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll > 10) {
    document.querySelector("header").classList.add("shadow");
  } else {
    document.querySelector("header").classList.remove("shadow");
  }
});

window.onload = () => {
  let openMenu = document.querySelector(".open-menu");
  openMenu.addEventListener("click", (e) => {
    document.body.style.overflowY = 'hidden';
  });
  let closeMenu = document.querySelector(".close-menu");
  closeMenu.addEventListener("click", (e) => {
    document.body.style.overflowY = 'visible';
  });
};