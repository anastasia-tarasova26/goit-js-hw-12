import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { CONSTANTS } from './js/constants';
import { urlCreator } from './js/pixabay-api.js';
import { htmlMarkupCreator } from './js/render-functions.js';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelectorAll('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');
const listItem = document.querySelectorAll('.list-item');
const loaders = {
  firstLoader: loader[0],
  secondLoader: loader[1],
};

let pageParam = 1;
let inputValue = null;
let galleryLightBox = null;

form.addEventListener('submit', e => {
  e.preventDefault();
  gallery.innerHTML = '';

  inputChecker(sessionStorage.getItem('previousInput'), input.value);

  if (!input.value) {
    showPopUpMessage(CONSTANTS.ERROR_MESSAGES.EMPTY_INPUT, 'error');
  } else {
    loaders.firstLoader.classList.remove('hidden');
    inputValue = input.value;
    urlCreator(input.value)
      .then(({ data: { hits } }) => {
        if (!hits.length) {
          showPopUpMessage(CONSTANTS.ERROR_MESSAGES.IMAGES_NOT_FOUND, 'error');
        } else {
          gallery.insertAdjacentHTML('beforeend', htmlMarkupCreator(hits));
          if (!galleryLightBox) {
            galleryLightBox = new SimpleLightbox('.gallery-photo a');
          } else {
            galleryLightBox.refresh();
          }
          loadMoreBtn.classList.remove('hidden');
        }
        loaders.firstLoader.classList.add('hidden');
      })
      .catch(error => {
        console.debug(error);
        showPopUpMessage(CONSTANTS.ERROR_MESSAGES.RESOURSE_ERROR, 'error');
      });
  }

  sessionStorage.setItem('previousInput', input.value);
});

loadMoreBtn.addEventListener('click', e => {
  loaders.secondLoader.classList.remove('hidden');

  urlCreator(inputValue, pageParam)
    .then(({ data: { hits, totalHits } }) => {
      loaders.secondLoader.classList.add('hidden');

      gallery.insertAdjacentHTML('beforeend', htmlMarkupCreator(hits));
      if (hits.length === CONSTANTS.PHOTOS_PER_PAGE) {
        loadMoreBtn.classList.remove('hidden');
      } else {
        loadMoreBtn.classList.add('hidden');
      }
      galleryLightBox.refresh();
      gentleScrollCreator();
      photoLimitCalculator(totalHits, pageParam);
      pageParam++;
    })
    .catch(error => {
      console.debug(error);
      showPopUpMessage(CONSTANTS.ERROR_MESSAGES.RESOURSE_ERROR, 'error');
    });
});

function showPopUpMessage(message, status) {
  switch (status) {
    case 'error':
      iziToast.show({
        ...CONSTANTS.POP_UP_CONFIG,
        message,
      });
      break;
    case 'notification':
      iziToast.show({
        ...CONSTANTS.POP_UP_CONFIG_NOTIFICATION,
        message,
      });
  }
}

function photoLimitCalculator(totalAllowedPhotos, page) {
  if (totalAllowedPhotos <= page * CONSTANTS.PHOTOS_PER_PAGE) {
    loadMoreBtn.classList.add('hidden');
    showPopUpMessage(
      CONSTANTS.NOTIFICATION_MESSAGE.PHOTO_LIMIT_REACHED,
      'notification'
    );
  }
}

function gentleScrollCreator() {
  const firstGalleryChild = gallery.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: firstGalleryChild.height * 4, // height * 4 works better
    behavior: 'smooth',
  });
}

function inputChecker(storedItem, currentInput) {
  if (storedItem !== currentInput) {
    return (pageParam = 1);
  }
}
