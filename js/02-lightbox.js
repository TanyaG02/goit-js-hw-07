import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

let items = galleryItems;

const render = galleryItems
  .map(
    (item) => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image"
  src="${item.preview}" 
  alt="${item.description}"/>
</a>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", render);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
