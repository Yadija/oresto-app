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
    const restaurantDetailElement = document.querySelector('restaurant-detail');

    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    restaurantDetailElement.restaurantDetail = restaurant;
  },
};

export default Detail;
