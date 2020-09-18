var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  speed: 2000,
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

//MODAL

const imgsGaleria = document.querySelectorAll(".imagenes-galeria");
const modal = document.querySelector(".contenedor-modal");
const imgModal = document.querySelector(".img-modal");
const btnIzquierda = document.querySelector(".btn-izquierda");
const btnDerecha = document.querySelector(".btn-derecha");
const btnCerrarModal = document.querySelector(".btn-cerrar");

let contador = 0;

imgsGaleria.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    let imagenSeleccionada = img.src;
    imgModal.src = imagenSeleccionada;
    let contador = Number(img.dataset.numero);
  });
});
console.log(contador);

btnIzquierda.addEventListener("click", () => {
  console.log(contador);
  contador--;
  if (contador < 1) {
    contador = 6;
  }

  imgModal.src = `/imagenes/galeria/casa-galeria-0${contador}.webp`;
});

btnDerecha.addEventListener("click", () => {
  console.log(contador);
  contador++;
  if (contador > 6) {
    contador = 1;
  }

  imgModal.src = `/imagenes/galeria/casa-galeria-0${contador}.webp`;
});

modal.addEventListener("click", (e) => {
  if (e.target.classList == "contenedor-modal") {
    modal.style.display = "none";
  }
}); //PARA CERRAR EL MODAL SOLO AL PRESIONAR EL AREA OSCURA

btnCerrarModal.addEventListener("click", () => {
  modal.style.display = "none";
});

//SEGUNDA GALERIA

const imgPrincipal = document.querySelector(".img-principal");
const imgPequeñas = document.querySelectorAll(".imagen-casa");

imgPequeñas.forEach((imagen) => {
  imagen.addEventListener("click", (e) => {
    imgActual = e.target.src;
    imgPrincipal.src = imgActual;
  });
});
