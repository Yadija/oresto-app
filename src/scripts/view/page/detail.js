import '../../components/restaurant-detail';

import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
      <restaurant-detail id="posts"></restaurant-detail>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loadingIndicatorElement = document.querySelector('loading-indicator');
    const restaurantDetailElement = document.querySelector('restaurant-detail');
    loadingIndicatorElement.style.display = 'block';

    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    restaurantDetailElement.restaurantDetail = restaurant;
    loadingIndicatorElement.style.display = 'none';
  },
};

export default Detail;
