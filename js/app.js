var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".swiper-container-dos", {
  slidesPerView: 3,
  spaceBetween: 10,
});

var swiper = new Swiper(".swiper-container-tres", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".swiper-container-cuatro", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".swiper-container-cinco", {
  slidesPerView: 1,
  spaceBetween: 30,
});
