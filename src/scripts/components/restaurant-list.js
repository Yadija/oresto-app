import { createRestaurantItemTemplate } from '../view/templates/template-creator';

class RestaurantList extends HTMLElement {
  set restaurantList(restaurantList) {
    this._restaurantList = restaurantList;
    this.render();
  }

  render() {
    this.classList.add('restaurant-result-container');
    this.tabIndex = 0;
    this.innerHTML = '';
    this._restaurantList.forEach((restaurant) => {
      this.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
