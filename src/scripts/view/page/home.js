import '../../components/hero-bar';

import RestaurantSource from '../../data/restaurant-source';
import { renderError } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <hero-bar></hero-bar>
      <h2>Explore Restaurant</h2>
      <restaurant-list id="posts"></restaurant-list>
    `;
  },

  async afterRender() {
    const loadingIndicatorElement = document.querySelector('loading-indicator');
    const restaurantListElement = document.querySelector('restaurant-list');
    loadingIndicatorElement.style.display = 'block';

    try {
      const restaurants = await RestaurantSource.listRestaurant();
      restaurantListElement.restaurantList = restaurants;
    } catch {
      renderError();
    } finally {
      loadingIndicatorElement.style.display = 'none';
    }
  },
};

export default Home;
