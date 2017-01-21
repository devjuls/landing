//переключение слайдов по кнопке следующий слайд

var slides = document.querySelectorAll('.testimonials .slider__item');
var currentSlide = 0;

function nextSlide() {
          goToSlide(currentSlide+1);
        }

function goToSlide(n) {
          slides[currentSlide].classList.remove('slider__item--active');

          currentSlide = (n+slides.length)%slides.length;

          slides[currentSlide].classList.add('slider__item--active');
        }

var next = document.querySelector('.testimonials__next');

next.onclick = function() {
      nextSlide();
    };
