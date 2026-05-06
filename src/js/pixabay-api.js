import axios from 'axios';

export async function getImagesByQuery(query, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '49187044-c2c4cc5e7c1f3c23966a70411',
      page: page,
      per_page: 15,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
}
