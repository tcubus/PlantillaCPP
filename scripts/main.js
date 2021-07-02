(function ($) {
    // USE STRICT
    "use strict";

    $(function() {
      /*Preloader animsition*/
      $(window).on('load', function () {
          $('.page-loader').fadeOut('slow', function () {
              $(this).remove();
          });
      });

      // Button search
      $('.ic-search').on('click', function(e) {
          $('.search').toggle(500);
      })

      // Change icon menu dropdown
      $('.ic-dropdown').on('click', function(e) {
        if ($(this).parent().hasClass('open')){
          $(this).parent().removeClass('open');
          $(this).removeClass('rotate-180');
        }
        else {
          $('.dropdown').removeClass('open');
          $(this).parent().toggleClass('open');
          $('.ic-dropdown').removeClass('rotate-180');
          $(this).toggleClass('rotate-180');  
        }
          
      });

      // Slider Project Homepage 01
      $('.slider-project').owlCarousel({
          loop: true,
          nav: true,
          autoplay: true,
          responsive: {
              0: {
                  items: 1
              },
              768: {
                  items: 2
              },
              992: {
                  items: 3
              }
          }
      })
      $(".slider .owl-prev").html('<i class="fa fa-caret-left" style = "font-size:20px;"></i>');
      $(".slider .owl-next").html('<i class="fa fa-caret-right" style = "font-size:20px;"></i>');

      // Slider Project Homepage 02
      $('.slider-project-home-2').owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          autoplay: true,
          responsive: {
              0: {
                  items: 1
              },
              768: {
                  items: 2
              },
              992: {
                  items: 3
              }
          }
      })
      $(".slider-project-home-2 .owl-prev").html('<i class="fa fa-caret-left" style = "font-size:20px;"></i>');
      $(".slider-project-home-2 .owl-next").html('<i class="fa fa-caret-right" style = "font-size:20px;"></i>');

      // RANGE FILTER
      $("#slider-range").slider({
          range: true,
          min: 2,
          max: 50,
          values: [2, 50],
          slide: function(event, ui) {
              $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
          }
      });
      $("#amount").val("$" + $("#slider-range").slider("values", 0) +
          " - $" + $("#slider-range").slider("values", 1));

      // PRODUCT DETAIL ACCORDION
      $('.collapse').on('shown.bs.collapse', function() {
          $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
      }).on('hidden.bs.collapse', function() {
          $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
      });

      // Fancybox
      $('.fancybox').fancybox({
          padding: 0,
          helpers: {
              title: {
                  type: 'over'
              }
          },
          beforeShow: function() {
              this.title = (this.title ? '' + this.title + '' : '') + 'Image ' + (this.index + 1) + ' of ' + this.group.length;
          }
      });
      $(".fancybox-services-detail").fancybox({
          padding: 0,
          helpers: {
              title: {
                  type: 'over'
              }
          },
          beforeShow: function() {
              this.title = (this.title ? '' + this.title + '' : '') + 'Image ' + (this.index + 1) + ' of ' + this.group.length;
          }
      });
      $('.sidebar-product a').on('click', function(e) {
          $('.sidebar-product .active').removeClass('active');
          $(this).addClass('active');
      });

      $('.sidebar-project-list a').on('click', function(e) {
          $('.sidebar-project-list .active').removeClass('active');
          $(this).addClass('active');
      });

    });

})(jQuery);  
