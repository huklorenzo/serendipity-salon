$(document).ready(function () {
    var lastScrollTop = 0;

    $(window).scroll(function () {
      var scrollTop = $(this).scrollTop();

      // Show the navbar when scrolling down, hide it when scrolling up
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        if (scrollTop > 200) {
          $(".navbar").addClass("show");
        }
      } else {
        if (scrollTop < 200) {
          $(".navbar").removeClass("show");
        }
      }

      lastScrollTop = scrollTop;
    });
  });

window.onload = function() {
    window.scrollTo(0, 0);
    
    const images = ['assets/img/homepage/slideshow/1.jpg', 'assets/img/homepage/slideshow/3.jpg', 'assets/img/homepage/slideshow/6.jpg', 'assets/img/homepage/slideshow/21.jpg', 'assets/img/homepage/slideshow/37.jpg', 'assets/img/homepage/slideshow/41.jpg', 'assets/img/homepage/slideshow/55.jpg'];
    const transform = ['scale(1.2)', 'scale(1)', 'scale(1.2)', 'scale(1)', 'scale(1.3)']
    const reveal = document.querySelector('.reveal');
    const reveal2 = document.querySelectorAll('.reveal')[1];

    let nextImage = 0;

    function revealOurBest() {
        if (!reveal) {
          return;
        }
  
        if (window.scrollY >= 600)
        reveal.classList.add('active');
      }

      function revealOurServices() {
        if (!reveal2) {
          return;
        }
  
        if (window.scrollY >= 1000)
        reveal2.classList.add('active');
      }
    
    function doSlideshow() {
      if (nextImage >= images.length) {
        nextImage = 0;
      }
  
      const globalHeader = document.querySelector('#headerBackground');
     
      globalHeader.style.backgroundImage = `url("${images[nextImage]}")`;
      globalHeader.style.transform = transform[nextImage++];
     

      fadeIn(function() {
        setTimeout(doSlideshow, 4000);
      });
    }
  
    function fadeIn(callback) {
      const interval = 25;
      const fading = setInterval(function() {
        clearInterval(fading);
        if (callback) {
            callback();
        }
      }, interval);
    }

    window.addEventListener('scroll', () => {
        revealOurBest();
        revealOurServices();
    });

    doSlideshow();
};