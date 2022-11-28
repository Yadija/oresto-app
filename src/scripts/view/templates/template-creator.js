import CONFIG from '../../global/config';

const showDesc = (description = '-') => {
  const limit = 225;
  if (description.length > limit) return `${description.substring(0, limit)}...`;
  return description;
}
const { BASE_IMAGE_URL, IMAGE_QUALITY } = CONFIG;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="card-item" tabindex="0">
    <div class="card-head">
      <p>${restaurant.city}</p>
      <picture>
        <source srcset="${BASE_IMAGE_URL + IMAGE_QUALITY.SMALL + restaurant.pictureId}" type="image/webp" media="all and (max-width: 600px)" />        
        <source srcset="${BASE_IMAGE_URL + IMAGE_QUALITY.SMALL + restaurant.pictureId}" type="image/jpeg" media="all and (max-width: 600px)" />
        <img class="lazyload skeleton" loading="lazy" src="${BASE_IMAGE_URL + IMAGE_QUALITY.SMALL + restaurant.pictureId}" alt="${restaurant.name || '-'}">
      </picture>
    </div>
    <div class="card-desc">
      <p class="rating">⭐️ ${restaurant.rating || '-'}</p>
      <h3 class="title"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
      <p class="desc">${showDesc(restaurant.description)}</p>
    </div>
  </article>
`;

const renderError = () => {
  const mainContent = document.querySelector('#mainContent');
  mainContent.innerHTML = `
    <div class="content-error">
      <h1 tabindex="0">Failed to Retrieve Data</h1>
      <p tabindex="0">Data cannot be displayed due to an error on the server or because you are not connected to the internet and data is not available in the cache</p>
    </div>
  `;
};

const renderEmptyData = () => {
  const mainContent = document.querySelector('#mainContent');
  mainContent.innerHTML = `
    <div class="content-error">
      <h1 tabindex="0">No Favorite Restaurant</h1>
      <p tabindex="0">You haven't favorited any restaurants yet, so we don't have anything to show you! Go favorite some!</p>
    </div>
  `;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="unlikeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  renderError,
  renderEmptyData,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
