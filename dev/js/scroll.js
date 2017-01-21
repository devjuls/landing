///scroll

$(document).ready(function() {

  (function() {
    $('.header__link, .projects__link').on('click', function(e){
      var ancor = $(this).attr('href'),
          topLink = $(ancor).offset().top;

      e.preventDefault();
      $('body,html').animate({scrollTop: topLink}, 1500);
    });
  }());

});