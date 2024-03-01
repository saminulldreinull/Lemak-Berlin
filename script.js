window.onload = () => {
  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scroll > 10) {
      document.querySelector(".header").classList.add( "shadow");
    } else {
      document.querySelector(".header").classList.remove("header-fixed", "shadow");
    }})
  }
 