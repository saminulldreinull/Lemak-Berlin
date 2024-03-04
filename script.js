
initSlideIndex('picture-container1');
  initSlideIndex('picture-container2');


function initSlideIndex(containerId) {
  let container = document.getElementById(containerId);
  container.dataset.slideIndex = 1;
  showDivs(1, containerId);
}

function plusDivs(n, containerId) {
  let container = document.getElementById(containerId);
  let currentSlideIndex = parseInt(container.dataset.slideIndex);
  showDivs(currentSlideIndex += n, containerId);
}

function showDivs(n, containerId) {
  let container = document.getElementById(containerId);
  let slides = container.getElementsByClassName("mySlides");
  let slideCount = slides.length;

  if (n > slideCount) { n = 1; }
  if (n < 1) { n = slideCount; }

  for (let i = 0; i < slideCount; i++) {
    slides[i].style.display = "none";  
  }

  slides[n - 1].style.display = "block";
  container.dataset.slideIndex = n; // Aktualisiert den Index im data-slide-index Attribut
}

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll > 10) {
    document.querySelector(".header").classList.add("shadow");
  } else {
    document.querySelector(".header").classList.remove("shadow");
  }
});


