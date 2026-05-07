import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const list = document.querySelector('.gallery');
const buttonLoadMore = document.querySelector('.gallery-button');
const loader = document.querySelector('.loader');
let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
});
export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
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
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}
export function clearGallery() {
  list.innerHTML = ``;
}
export function showLoader() {
  loader.classList.remove('hidden');
}
export function hideLoader() {
  loader.classList.add('hidden');
}
export function showLoadMoreButton() {
  buttonLoadMore.classList.remove('hidden');
}
export function hideLoadMoreButton() {
  buttonLoadMore.classList.add('hidden');
}
