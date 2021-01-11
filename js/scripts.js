/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */


    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });


    // $(window).on("load",function() {
    //     $(window).scroll(function() {
    //           var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    //           $(".fades").each(function() {
    //                 /* Check the location of each desired element */
    //                 var objectBottom = $(this).offset().top + $(this).outerHeight();
                    
    //                  If the element is completely within bounds of the window, fade it in 
    //                 if (objectBottom < windowBottom) { //object comes into view (scrolling down)
    //                   if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
    //                 } else { //object goes out of view (scrolling up)
    //                   if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
    //                 }
    //           });
    //     }).scroll(); //invoke scroll-handler on page-load
    //   });

      // Fade out effect on scroll 
    $(window).on("load",function() {
        function fade() {
            var animation_height = $(window).innerHeight() * 0.25;
            var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

            $('.fades').each(function() {

                var objectTop = $(this).offset().top;
                var windowBottom = $(window).scrollTop() + $(window).innerHeight();

                if ( objectTop < windowBottom ) {
                    if ( objectTop < windowBottom - animation_height ) {
                        $(this).css( {
                            transition: 'opacity 0.1s linear',
                            opacity: 1
                        } );

                    } else {
                        $(this).css( {
                            transition: 'opacity 0.25s linear',
                            opacity: (windowBottom - objectTop) * ratio
                        } );
                    }
                } else {
                    $(this).css( 'opacity', 0 );
                }
            });
        }
        $('.fades').css( 'opacity', 0 );
        fade();
        $(window).scroll(function() {fade();});
    });


    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  