import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { renderError, renderEmptyData } from '../templates/template-creator';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    const loadingIndicatorElement = document.querySelector('loading-indicator');
    // const restaurantListElement = document.querySelector('restaurant-list');
    loadingIndicatorElement.style.display = 'block';

    try {
      const favoriteRestaurant = await FavoriteRestaurantIdb.getAllRestaurants();
      if (favoriteRestaurant.length > 0) {
        // restaurantListElement.restaurantList = favoriteRestaurant;
        new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
        new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
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
