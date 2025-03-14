import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector('.gallery');

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
});

export function renderImg(hits) {
  const items = hits.map(hit => {
    const li = document.createElement('li');
    li.classList.add('gallery-item');
    const link = document.createElement('a');
    link.classList.add('gallery-link');
    link.href = hit.largeImageURL;
    li.append(link);
    const img = document.createElement('img');
    img.classList.add('galleryi-item-img');
    img.src = hit.webformatURL;
    img.alt = hit.tags;
    link.append(img);

    const imgInfo = document.createElement('ul');
    imgInfo.classList.add('gallery-link-list');
    link.append(imgInfo);

    const infoLikes = document.createElement('li');
    infoLikes.textContent = 'Likes';
    const infoLikesSpan = document.createElement('span');
    infoLikesSpan.textContent = hit.likes;
    infoLikes.append(infoLikesSpan);
    imgInfo.append(infoLikes);

    const infoViews = document.createElement('li');
    infoViews.textContent = 'Views';
    const infoViewsSpan = document.createElement('span');
    infoViewsSpan.textContent = hit.views;
    infoViews.append(infoViewsSpan);
    imgInfo.append(infoViews);

    const infoComments = document.createElement('li');
    infoComments.textContent = 'Comments';
    const infoCommentsSpan = document.createElement('span');
    infoCommentsSpan.textContent = hit.comments;
    infoComments.append(infoCommentsSpan);
    imgInfo.append(infoComments);

    const infoDownloads = document.createElement('li');
    infoDownloads.textContent = 'Downloads';
    const infoDownloadsSpan = document.createElement('span');
    infoDownloadsSpan.textContent = hit.downloads;
    infoDownloads.append(infoDownloadsSpan);
    imgInfo.append(infoDownloads);

    return li;
  });
  list.append(...items);

  gallery.refresh();
}

export function clear() {
  list.innerHTML = '';
}
