import axios from 'axios';

const key = '49187044-c2c4cc5e7c1f3c23966a70411';
export function search(query) {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}
