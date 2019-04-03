(function ($) {
  // Start of use strict
  "use strict";

  /*------------------------------------------------
  * Smooth Scroll
  ------------------------------------------------*/
  $(window).on('load', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
      $(".trans-header").addClass("sticky");
    } else {
      $(".trans-header").removeClass("sticky");
    }

    $('.carousel').carousel();
    
    jQuery('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .not('[data-toggle="tab"]')
      .on('click', function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = jQuery(this.hash);
          target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');

          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            jQuery('html, body').animate({
              scrollTop: target.offset().top - 50
            }, 800, function () {
              // Callback after animation
              // Must change focus!

              // var $target = jQuery(target);
              // $target.focus();
              // if ($target.is(":focus")) { // Checking if the target was focused
              //   return false;
              // } else {
              //   $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              //   $target.focus(); // Set focus again
              // };
            });
          }
        }
      });

    /*------------------------------------------------
    * Portfolio Slider
    ------------------------------------------------*/
    var owl = $('.portfolio-slider');
    owl.owlCarousel({
      loop: true,
      items: 2,
      margin: 15,
      center: true,
      dots: true,
      slideSpeed: 20000,
      nav: false,
      autoplay: false,
      autoplayTimeout: 3000,
      responsiveClass: true,
      responsive: {
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
    });

    /*------------------------------------------------
    * Shrink Header
    ------------------------------------------------*/
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 150) {
        $(".trans-header").addClass("sticky");
      } else {
        $(".trans-header").removeClass("sticky");
      }
    });

    /*------------------------------------------------
    * Auto close navbar-collapse on click a
    ------------------------------------------------*/
    $('.collapse a').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });

    /*------------------------------------------------
    * Activate scrollspy to add active class to navbar items on scroll
    ------------------------------------------------*/
    $('body').scrollspy({
      target: '#main',
      offset: 100
    });

    /*------------------------------------------------
    * Jarallax
    ------------------------------------------------*/
    jarallax(document.querySelectorAll('.jarallax'));
  });
})(jQuery);