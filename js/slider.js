 $('.slider').slick({
    arrows: false,
    autoplay: true,
    speed: 500,
    dots: true
  });

  $('.brands_slider').slick({
  	 slidesToShow: 4,
  	 lazyLoad: 'ondemand',
  	 autoplay: true,
  	 infinity: true,
  	  responsive: [
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 3
      }
    },
    {
    	breakpoint: 630,
      settings: {
        slidesToShow: 2
      }
    }

    ]
  });