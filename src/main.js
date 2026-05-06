import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import imgErrorIcon from '/img/bi_x-octagon.png';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  buttonLoadMore,
  scrolling,
} from './js/render-functions';

const form = document.querySelector('.form');
let page = 1;
let per_page = 15;
let query = '';
form.addEventListener('submit', hendleSubmit);
buttonLoadMore.addEventListener('click', hendleClic);
async function hendleSubmit(event) {
  try {
    event.preventDefault();
    clearGallery();
    hideLoadMoreButton();
    query = event.currentTarget.elements['search-text'].value
      .toLowerCase()
      .trim();
    event.currentTarget.elements['search-text'].value = '';
    page = 1;
    showLoader();
    const data = await getImagesByQuery(query, page);
    if (data.hits.length === 0) {
      iziToast.error({
        iconUrl: imgErrorIcon,
        title: 'Error',
        class: 'gallery-box',
        message: `Sorry, there are no images matching your search ${query}. Please try again!
`,
        position: 'topRight',
        messageColor: 'white',
        messageSize: '16px',
        backgroundColor: '#ef4040',
        titleColor: '#fff',
      });
      return;
    }
    if (page * per_page < data.totalHits) {
      page += 1;
      createGallery(data.hits);
      showLoadMoreButton();
    } else {
      createGallery(data.hits);
      return iziToast.info({
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
        messageSize: '16px',
      });
    }
  } catch (error) {
    iziToast.error({
      iconUrl: imgErrorIcon,
      title: 'Error',
      class: 'gallery-box',
      message: `Sorry, there are no images matching your search ${query}. Please try again!
`,
      position: 'topRight',
      messageColor: 'white',
      messageSize: '16px',
      backgroundColor: '#ef4040',
      titleColor: '#fff',
      timeout: false,
    });
  } finally {
    hideLoader();
  }
}

async function hendleClic() {
  try {
    showLoader();
    const data = await getImagesByQuery(query, page);
    if (page * per_page < data.totalHits) {
      page += 1;
      createGallery(data.hits);
      scrolling();
      showLoadMoreButton();
    } else {
      createGallery(data.hits);
      scrolling();
      hideLoadMoreButton();
      return iziToast.info({
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
        messageSize: '16px',
      });
    }
  } catch (error) {
    iziToast.error({
      iconUrl: imgErrorIcon,
      title: 'Error',
      class: 'gallery-box',
      message: `Sorry, there are no images matching your search ${query}. Please try again!
`,
      position: 'topRight',
      messageColor: 'white',
      messageSize: '16px',
      backgroundColor: '#ef4040',
      titleColor: '#fff',
      timeout: false,
    });
  } finally {
    hideLoader();
  }
}
