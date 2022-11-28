import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div class="restaurant-search-container">
      <h2>Your Favorite Restaurant</h2>
      <input id="query" type="text" placeholder="Search your favorite restaurant...">
        <div class="restaurant-result-container">
          <restaurant-list id="posts"></restaurant-list>
        </div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('keyup', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    let restaurantResultContainer = document.querySelector('.restaurant-result-container');

    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
      restaurantResultContainer.style = 'display: grid';
    } else {
      html = this._getEmptyRestaurantTemplate();
      restaurantResultContainer.style = 'display: block';
    }
    
    restaurantResultContainer.innerHTML = html;
    restaurantResultContainer.dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found"><h1>Restaurant Not Found</h1></div>';
  }
}

export default FavoriteRestaurantSearchView;
