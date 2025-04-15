document.addEventListener('DOMContentLoaded', function () {
var swiper = new Swiper(".mySwiper", {
    rewind: true,
    slidesPerView: auto,
    spaceBetween: 15,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.50": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        "@2.00": {
          slidesPerView: 5,
          spaceBetween: 50,
        }
  },
});
});
