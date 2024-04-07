import { getImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.search-form');
const input = document.querySelector('input');
const btnLoadMore = document.querySelector('#load-more');
form.addEventListener('submit', onFormSubmit);
btnLoadMore.addEventListener('click', onLoadMoreClick);
const loader = document.querySelector('.loader');

let userQuery = '';
let pageNumber;
let maxPage = 0;
const perPage = 15;

async function onFormSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  pageNumber = 1;

  userQuery = input.value.trim();

  if (!userQuery) {
    hideLoadMore();
    iziToast.show({
      title: 'Warning',
      message: 'Please enter a search query',
      position: 'topRight',
      maxWidth: 400,
    });
    return;
  }

  try {
    loader.style.display = 'block';
    const data = await getImages(userQuery, pageNumber);
    if (data.totalHits === 0) {
      loader.style.display = 'none';
      hideLoadMore();
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        maxWidth: 400,
      });
      return;
    }
    maxPage = Math.ceil(data.totalHits / perPage);
    renderGallery(data.hits);
  } catch (error) {
    loader.style.display = 'none';
    hideLoadMore();
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topRight',
      maxWidth: 400,
    });
  }

  checkBtnStatus();
  loader.style.display = 'none';
  input.value = '';
}

async function onLoadMoreClick() {
  loader.style.display = 'block';
  pageNumber += 1;

  try {
    const data = await getImages(userQuery, pageNumber);
    renderGallery(data.hits);
  } catch (error) {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topRight',
      maxWidth: 400,
    });
  }

  autoScroller();
  checkBtnStatus();
  loader.style.display = 'none';
}

function checkBtnStatus() {
  if (pageNumber >= maxPage) {
    hideLoadMore();
    iziToast.warning({
      title: 'Warning',
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
      maxWidth: 400,
    });
  } else {
    showLoadMore();
  }
}

function showLoadMore() {
  btnLoadMore.style.display = 'block';
}
function hideLoadMore() {
  btnLoadMore.style.display = 'none';
}
function autoScroller() {
  const imageCard = document.querySelector('.image-card');
  const cardHeight = imageCard.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
