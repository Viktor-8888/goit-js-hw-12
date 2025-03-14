import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import imgErrorIcon from './img/bi_x-octagon.png';
import * as api from './js/pixabay-api';
import * as render from './js/render-functions';

const form = document.querySelector('form');
const loader = document.querySelector('.loader');

loader.classList.add('is-closed');

form.addEventListener('submit', httpRequest);
function httpRequest(event) {
  event.preventDefault();
  const form = event.target;
  const searcher = form.elements.search.value.trim();
  if (searcher === '') {
    return;
  }
  form.elements.search.value = '';
  render.clear();
  loader.classList.remove('is-closed');
  api
    .search(searcher)
    .then(response => {
      if (response.data.hits.length === 0) {
        iziToast.error({
          iconUrl: imgErrorIcon,
          class: 'box',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          messageColor: 'white',
          messageSize: '16px',
          backgroundColor: '#ef4040',
          titleColor: '#fff',
        });
      } else {
        render.renderImg(response.data.hits);
      }
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      iziToast.error({
        iconUrl: imgErrorIcon,
        class: 'box',
        title: 'Error',
        message: 'Sorry, error!',
        position: 'topRight',
        messageColor: 'white',
        messageSize: '16px',
        backgroundColor: '#ef4040',
        titleColor: '#fff',
      });
    })
    .finally(() => {
      loader.classList.add('is-closed');
    });
}
