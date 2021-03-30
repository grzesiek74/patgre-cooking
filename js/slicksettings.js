$(".what-we-do-slick").slick({
  dots: true,
  arrows: false,
  autoplay: true,
  infinite: true,
  pauseOnHover: false,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 592,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});
