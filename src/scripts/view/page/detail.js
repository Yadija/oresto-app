import '../../components/restaurant-detail';

import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { renderError } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <restaurant-detail></restaurant-detail>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loadingIndicatorElement = document.querySelector('loading-indicator');
    const restaurantDetailElement = document.querySelector('restaurant-detail');

    loadingIndicatorElement.style.display = 'block';

    try {
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      restaurantDetailElement.restaurantDetail = restaurant;

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          description: restaurant.description,
          rating: restaurant.rating,
          city: restaurant.city,
        },
      });
    } catch {
      renderError();
    } finally {
      loadingIndicatorElement.style.display = 'none';
    }
  },
};

export default Detail;
