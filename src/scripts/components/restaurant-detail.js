import './menu-container';
import './review-container';
import './review-form';

import CONFIG from '../global/config';

class RestaurantDetail extends HTMLElement {
  set restaurantDetail(restaurantDetail) {
    this._restaurantDetail = restaurantDetail;
    this.render();
  }

  render() {
    const {
      address,
      categories,
      city,
      customerReviews,
      description,
      menus,
      name,
      pictureId,
      rating,
    } = this._restaurantDetail;

    const { foods, drinks } = menus;

    this.innerHTML = `
      <div class="jumbotron-detail">
        <img class="skeleton" src="${CONFIG.BASE_IMAGE_URL + CONFIG.IMAGE_QUALITY.LARGE + pictureId}" alt="${name}" />
        <div class="jumbotron-thumb">
          <h2>${name}</h2>
          <p>${categories.map((categorie) => categorie.name).join(' | ')}</p>   
        </div>
      </div>
      <div class="restaurant-info">
        <section class="restaurant-desc">
          <h3>Description</h3>
          <p>${description}</p>
        </section>
        <section>
          <h3>Information</h3>
          <h4>City</h4>
          <p>${city}</p>
          <h4>Address</h4>
          <p>${address}</p>
          <h4>Rating</h4>
          <p>⭐️ ${rating}</p>
        </section>
        <section class="restaurant-menu">
          <h3>Menu</h3>
          <div class="menu-detail">
            <menu-container title="Foods" menu='${JSON.stringify(foods)}'></menu-container>
            <menu-container title="Drinks" menu='${JSON.stringify(drinks)}'></menu-container>
          </div>
        </section>
        <section class="restaurant-review">
          <h3 tabindex="0">Customer Review</h3>
          <review-container review='${JSON.stringify(customerReviews)}'></review-container>
          <review-form></review-form>
        </section>
      </div>
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
