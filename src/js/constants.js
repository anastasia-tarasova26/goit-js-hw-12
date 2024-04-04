export const CONSTANTS = {
  API_KEY: '42384910-73277182c896d015737fb8e33',
  API_URL: 'https://pixabay.com/api/',
  PHOTO_ORIENTATION: 'horizontal',
  IMAGE_TYPE: 'photo',
  SAFESEARCH: true,
  PHOTOS_PER_PAGE: 15,
  ERROR_MESSAGES: {
    EMPTY_INPUT: 'Input must not be empty. Please try again!',
    IMAGES_NOT_FOUND:
      'Sorry, there are no images matching your search query. Please try again!',
    RESOURSE_ERROR: 'Requested resource is not found!',
  },
  NOTIFICATION_MESSAGE: {
    PHOTO_LIMIT_REACHED:
      "We're sorry, but you've reached the end of search results.",
  },
  POP_UP_CONFIG: {
    message: null,
    iconUrl: '/img/error-icon.png',
    messageColor: 'white',
    backgroundColor: '#EF4040',
    position: 'topRight',
  },
  POP_UP_CONFIG_NOTIFICATION: {
    message: null,
    iconUrl: '/img/exclamation-mark.png',
    messageColor: 'white',
    backgroundColor: '#87CEEB',
    position: 'topRight',
  },
};