import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

const gallery = document.querySelector('.gallery');

function cardTemplate(obj) {
  return `<li class="gallery-item">
<div class="image-card">
<a class="gallery-link" href="${obj.largeImageURL}">
<img 
loading="lazy" 
class="gallery-image" 
src="${obj.webformatURL}" 
alt="${obj.tags}"/>

<div class="data-field">

<div class="img-data">
<h4 class="data-title">Likes</h4>
<p class="data-value">${obj.likes}</p>
</div>

<div class="img-data">
<h4 class="data-title">Views</h4>
<p class="data-value">${obj.views}</p>
</div>

<div class="img-data">
<h4 class="data-title">Comments</h4>
<p class="data-value">${obj.comments}</p>
</div>

<div class="img-data">
<h4 class="data-title">Downloads</h4>
<p class="data-value">${obj.downloads}</p>
</div>

</div>
</a>
</div>
</li>`;
}

function galleryTemplate(arr) {
  return arr.map(cardTemplate).join('');
}

export function renderGallery(images) {
  const markup = galleryTemplate(images);
  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.on('show.simplelightbox', function () {});
  lightbox.refresh();
}
