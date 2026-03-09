/* Année automatique dans le footer */

const year = document.querySelector("[data-year]");
if (year) {
  year.textContent = new Date().getFullYear();
}


/* LIGHTBOX IMAGES */

const images = document.querySelectorAll(".zoomable");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (images.length > 0 && lightbox && lightboxImg) {

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  });

}