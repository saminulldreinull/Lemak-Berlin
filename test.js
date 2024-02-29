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

  // When the user scrolls the page, execute myFunction
  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  document.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav a');
  
    sections.forEach((section, index) => {
      if (window.scrollY >= section.offsetTop - 50) {
        // Entferne 'active' von allen Links
        navLinks.forEach((link) => { link.classList.remove('active'); });
  
        // Füge 'active' dem entsprechenden Link hinzu
        var activeLink = document.querySelector(`nav a[href="#${section.id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  });
  
};
