document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let slideWidth = slides[0].clientWidth;
    let currentSlide = 0;
    const totalSlides = slides.length;

    function moveToSlide(index) {
      if (index < 0) {
        index = totalSlides - 1;
      } else if (index >= totalSlides) {
        index = 0;
      }

      carousel.style.transform = `translateX(${-slideWidth * index}px)`;
      currentSlide = index;
    }

    function nextSlide() {
      moveToSlide(currentSlide + 1);
    }

    function prevSlide() {
      moveToSlide(currentSlide - 1);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    let slideInterval = setInterval(nextSlide, 1000);

    carousel.addEventListener('mouseenter', function() {
      clearInterval(slideInterval);
    });

    carousel.addEventListener('mouseleave', function() {
      slideInterval = setInterval(nextSlide, 1000);
    });
  });