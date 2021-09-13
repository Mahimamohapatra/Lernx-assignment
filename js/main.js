/**highlight nav menu according to their sections**/

    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav .container-fluid .navbar-nav li a");
    window.addEventListener("scroll", () => {
    let current = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current =section.getAttribute("id");
          }
        })
        
        navLi.forEach(li => {
          li.classList.remove('active');
          const href = li.getAttribute('href').substring(1);
          if(href === current){
            li.classList.add('active');
          }
        });
      })

/** preloader */

$(document).ready(function() {
  //Preloader
  preloaderFadeOutTime = 500;
  function hidePreloader() {
  var preloader = $('.preloader');
  preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
  });
