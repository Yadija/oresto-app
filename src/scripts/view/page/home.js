import '../../components/restaurant-list';

import RestaurantSource from '../../data/restaurant-source';

const Home = {
  async render() {
    return `
      <hero-bar></hero-bar>
      <h2>Explore Restaurant</h2>
      <restaurant-list id="posts"></restaurant-list>
    `;
  },

  async afterRender() {
    const restaurantListElement = document.querySelector('restaurant-list');
    const restaurants = await RestaurantSource.listRestaurant();
    restaurantListElement.restaurantList = restaurants;
  },
};

export default Home;
