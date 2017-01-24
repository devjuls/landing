var menuToggle = document.querySelector('.nav__toggle');
var nav = document.querySelector('.nav');

menuToggle.addEventListener('click', function(e) {
  e.preventDefault();

  nav.classList.toggle('open');
});
