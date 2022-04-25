import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const picturesGallery = document.querySelector(".gallery");
const pictureMarkup = createPictureMarkup(galleryItems)

picturesGallery.insertAdjacentHTML("beforeend", pictureMarkup)

function createPictureMarkup (pictures){
    return pictures.map(({ preview, original, description }) => 
    `  
    <a class="gallery__item"
        href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        alt="${description}" />
    </a>
    `
    )
    .join('');
}

let lightbox = new SimpleLightbox('.gallery__item', { captionsData: "alt", captionDelay: 250 });



