import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const list = document.querySelector('.gallery');
export const buttonLoadMore = document.querySelector('.hidden');
let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
});
export function createGallery(images) {
  images.forEach(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) =>
      list.insertAdjacentHTML(
        'beforeend',
        `<li class="gallery-item">
  <a href="${largeImageURL}" class="gallery-link">
    <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
    <ul class="gallery-text">
      <li class="gallery-text-item">
        Likes<span class="gallery-span-item">${likes}</span>
      </li>
      <li class="gallery-text-item">
        Views<span class="gallery-span-item">${views}</span>
      </li>
      <li class="gallery-text-item">
        Comments<span class="gallery-span-item">${comments}</span>
      </li>
      <li class="gallery-text-item">Downloads<span class="gallery-span-item">${downloads}</span></li>
    </ul>
  </a>
</li>`
      )
  );
  gallery.refresh();
}
export function clearGallery() {
  list.innerHTML = ``;
}
export function showLoader() {
  buttonLoadMore.insertAdjacentHTML('afterend', `<span class="loader"></span>`);
}
export function hideLoader() {
  const span = document.querySelector('.loader');
  if (span) span.remove();
}
export function showLoadMoreButton() {
  buttonLoadMore.classList.add('gallery-button');
}
export function hideLoadMoreButton() {
  buttonLoadMore.classList.remove('gallery-button');
}
export function scrolling() {
  const li = list.querySelector('.gallery-item');
  const { height } = li.getBoundingClientRect();
  window.scrollBy({
    top: height * 2,
    left: 0,
    behavior: 'smooth',
  });
}
