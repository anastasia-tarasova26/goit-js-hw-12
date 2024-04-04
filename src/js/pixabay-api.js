import axios from 'axios';
import { CONSTANTS } from './constants.js';

export async function urlCreator(searchedPhoto, pageParam) {
  const getUrl = await axios.get(CONSTANTS.API_URL, {
    params: {
      key: CONSTANTS.API_KEY,
      q: searchedPhoto,
      image_type: CONSTANTS.IMAGE_TYPE,
      orientation: CONSTANTS.PHOTO_ORIENTATION,
      safesearch: CONSTANTS.SAFESEARCH,
      page: pageParam,
      per_page: CONSTANTS.PHOTOS_PER_PAGE,
    },
  });
  return getUrl;
}