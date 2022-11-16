import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
      <hero-bar></hero-bar>
      <h2>Explore Restaurant</h2>
      <div id="posts" class="posts"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('#posts');
    restaurants.forEach((movie) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(movie);
    });
  },
};

export default RestaurantList;
