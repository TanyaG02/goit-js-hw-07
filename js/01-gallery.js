import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

let items = galleryItems;

const render = galleryItems
  .map(
    (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", render);

gallery.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) return;
  const activImage = e.target;
  console.log(activImage);

  const instance = basicLightbox.create(`
    <img src="${activImage.dataset.source}" width="800" height="600">
`);

  instance.show();
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      console.log(e);
      instance.close();
    }
  });
}
