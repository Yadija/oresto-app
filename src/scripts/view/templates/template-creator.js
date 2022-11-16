import CONFIG from '../../global/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant-title">${restaurant.name}</h2>
  <img class="restaurant-poster" src="${CONFIG.BASE_IMAGE_URL + CONFIG.IMAGE_QUALITY.MEDIUM + restaurant.pictureId}" alt="${restaurant.title}" />
  <div class="restaurant-info">
    <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${restaurant.city}</p>
    <h4>Release Date</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Categories</h4>
    <p>${restaurant.categories.map((categorie) => categorie.name).join(' | ')}</p>
    <h4>Menu</h4>
    <div class="menu">
      <h5>Foods</h5>
      <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
      <h5>Drinks</h5>
      <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
    </div>
    <h4>Reviews</h4>
    <p>${restaurant.customerReviews.map((review) => review.review).join(' | ')}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="card-item" tabindex="0">
      <div class="card-head">
        <p>${restaurant.city}</p>
        <img loading="lazy" src="${CONFIG.BASE_IMAGE_URL + CONFIG.IMAGE_QUALITY.SMALL + restaurant.pictureId}" alt="${restaurant.name}">
      </div>
      <div class="card-desc">
        <p class="rating">⭐️ ${restaurant.rating}</p>
        <h3 class="title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
        <p class="desc">${restaurant.description}</p>
      </div>
    </div>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
