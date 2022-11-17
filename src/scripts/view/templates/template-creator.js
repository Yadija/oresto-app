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

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  renderError,
  renderEmptyData,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
