import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { renderError, renderEmptyData } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <h2>Your Favorite Restaurant</h2>
    <restaurant-list id="posts"></restaurant-list>
    `;
  },

  async afterRender() {
    const loadingIndicatorElement = document.querySelector('loading-indicator');
    const restaurantListElement = document.querySelector('restaurant-list');
    loadingIndicatorElement.style.display = 'block';

    try {
      const favoriteRestaurant = await FavoriteRestaurantIdb.getAllRestaurants();
      if (favoriteRestaurant.length > 0) {
        restaurantListElement.restaurantList = favoriteRestaurant;
      } else {
        renderEmptyData();
      }
    } catch {
      renderError();
    } finally {
      loadingIndicatorElement.style.display = 'none';
    }
  },
};

export default Favorite;
