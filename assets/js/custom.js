//  client review slider start
     $(document).ready(function() {
      var owl = $('.review-slider-carousel');
      owl.owlCarousel({
      nav: false,
      loop: true,
      responsive: {
          0: {
          items: 1,
          margin: 20,
          },
          576: {
          items: 1.3,
          margin: 20,
          },
          768: {
            items: 2.3,
            margin: 20,
            },
          1200: {
            items: 3.3,
            margin: 20,
        },
        1800: {
            items: 3.3,
            margin: 50,
        }
      }
      })
  })
  //  client review slider end
 //  financial authorities and publications slider start
 $(document).ready(function() {
  var owl = $('.financial-carousel');
  owl.owlCarousel({
  margin: 50,
  nav: false,
  loop: true,
  responsive: {
      0: {
      items: 2
      },
      576: {
        items: 3
        },
      768: {
      items: 4
      },
      1000: {
      items: 6
      }
  }
  })
})
//  financial authorities and publications slider end