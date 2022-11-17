import '../../components/restaurant-detail';

import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { renderError } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <restaurant-detail id="posts"></restaurant-detail>
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

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant,
      });
    } catch {
      renderError();
    } finally {
      loadingIndicatorElement.style.display = 'none';
    }
  },
};

export default Detail;
