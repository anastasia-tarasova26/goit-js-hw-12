export function htmlMarkupCreator(galleryItems) {
  return galleryItems
    .map(item => {
      const {
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = item;
      return `<li class="list-item">
      <div class="gallery-photo">
        <a href="${largeImageURL}"
          ><img src="${webformatURL}" alt="${tags}"
        /></a>
      </div>
      <div class="text-wrapper">
        <div class="list-item-container">
          <p class="header-text">likes</p>
          <p>${likes}</p>
        </div>
        <div class="list-item-container">
          <p class="header-text">Views</p>
          <p>${views}</p>
        </div>
        <div class="list-item-container">
          <p class="header-text">Comments</p>
          <p>${comments}</p>
        </div>
        <div class="list-item-container">
          <p class="header-text">Downloads</p>
          <p>${downloads}</p>
        </div>
      </div>
    </li>`;
    })
    .join('');
}