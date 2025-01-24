$(function () {
  $(window).on('scroll',function(){
    // nav scroll opacity
    if ($(this).scrollTop() > 300) {
      $('nav').addClass('opacity');
    } else {
      $('nav').removeClass('opacity');
    }
  })

  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  $("#navbarNavAltMarkup a").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  });

  if($(window).width() < 768) {
    $('.navbar a').on('click', function() {
      $('.navbar-toggler').click();
  });
  }

});

// wow
new WOW().init();

// swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    //width>=500
    500: {
      slidesPerView: 2,
      spaceBetween: 30
    },
     //width>=768
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
     //width>=1280
    1280: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});