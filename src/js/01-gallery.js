import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryImageMarkap(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

//galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryImageMarkap(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}"
   />
</a>`;
    })
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

//function onGalleryContainerClick(event) {
//event.preventDefault();
//const isGalleryImage = event.target.classList.contains('gallery__image');
//if (!isGalleryImage) {
//return;
//}

//const currentImgUrl = event.target.dataset.source;
//}
