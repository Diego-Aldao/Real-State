var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1244: {
      slidesPerView: 3,
      spaceBetween: 20,
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
  loop: true,
});

var swiper = new Swiper(".swiper-container-tres", {
  speed: 600,
  parallax: true,
  autoplay: true,
  speed: 1000,
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
  autoplay: true,
  speed: 1000,
  loop: true,
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
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".swiper-container-cinco", {
  slidesPerView: 1,
  spaceBetween: 30,
});

//LEAFLET

var map = L.map("leaflet-mapa").setView([-32.910181, -68.846877], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([-32.909399, -68.843954])
  .addTo(map)
  .bindPopup("CASA NRO-02")
  .openPopup();

L.marker([-32.907778, -68.848224])
  .addTo(map)
  .bindPopup("CASA NRO-03")
  .openPopup();

L.marker([-32.911775, -68.845755])
  .addTo(map)
  .bindPopup("CASA NRO-04")
  .openPopup();

L.marker([-32.910181, -68.846877])
  .addTo(map)
  .bindPopup("CASA NRO-01")
  .openPopup();
