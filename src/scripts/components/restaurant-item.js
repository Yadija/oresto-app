import CONFIG from '../global/config';

class RestaurantItem extends HTMLElement {
  set restaurantItem(restaurantItem) {
    this._restaurantItem = restaurantItem;
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  showDesc(description = '-') {
    const limit = 225;
    if (description.length > limit) return `${description.substring(0, limit)}...`;
    return description;
  }

  render() {
    this.innerHTML = `
      <article class="card-item" tabindex="0">
        <div class="card-head">
          <p>${this._restaurantItem.city}</p>
          <img class="skeleton" loading="lazy" src="${CONFIG.BASE_IMAGE_URL + CONFIG.IMAGE_QUALITY.SMALL + this._restaurantItem.pictureId}" alt="${this._restaurantItem.name || '-'}">
        </div>
        <div class="card-desc">
          <p class="rating">⭐️ ${this._restaurantItem.rating || '-'}</p>
          <h3 class="title"><a href="/#/detail/${this._restaurantItem.id}">${this._restaurantItem.name || '-'}</a></h3>
          <p class="desc">${this.showDesc(this._restaurantItem.description)}</p>
        </div>
      </article>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
