import CONFIG from '../global/config';

class RestaurantItem extends HTMLElement {
  set restaurantItem(restaurantItem) {
    this._restaurantItem = restaurantItem;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card-item" tabindex="0">
        <div class="card-head">
          <p>${this._restaurantItem.city}</p>
          <img class="skeleton" loading="lazy" src="${CONFIG.BASE_IMAGE_URL + CONFIG.IMAGE_QUALITY.SMALL + this._restaurantItem.pictureId}" alt="${this._restaurantItem.name || '-'}">
        </div>
        <div class="card-desc">
          <p class="rating">⭐️ ${this._restaurantItem.rating || '-'}</p>
          <h3 class="title"><a href="/#/detail/${this._restaurantItem.id}">${this._restaurantItem.name || '-'}</a></h3>
          <p class="desc">${this._restaurantItem.description || '-'}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
