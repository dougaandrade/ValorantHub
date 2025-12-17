$(document).ready(function () {
  $(".carousel").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
$(document).ready(function () {
  $(".carousel-colections").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
