// У файлі pixabay-api.js зберігай функції для HTTP-запитів.

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

export async function getImages(userQuery, pageNumber) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '?key=43036012-df3a1e6422cb462a655402953';
  const url = BASE_URL + API_KEY;

  const params = {
    q: userQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: pageNumber,
  };
  
  const response = await axios.get(url, { params });
  return response.data;
}