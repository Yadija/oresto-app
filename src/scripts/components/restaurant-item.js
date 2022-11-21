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
    const { BASE_IMAGE_URL, IMAGE_QUALITY } = CONFIG;

    this.innerHTML = `
      <article class="card-item" tabindex="0">
        <div class="card-head">
          <p>${this._restaurantItem.city}</p>
          <picture>
            <source srcset="${BASE_IMAGE_URL + IMAGE_QUALITY.SMALL + this._restaurantItem.pictureId}" type="image/webp" media="all and (max-width: 600px)" />        
            <source srcset="${BASE_IMAGE_URL + IMAGE_QUALITY.SMALL + this._restaurantItem.pictureId}" type="image/jpeg" media="all and (max-width: 600px)" />
            <img class="lazyload skeleton" loading="lazy" src="${BASE_IMAGE_URL + IMAGE_QUALITY.SMALL + this._restaurantItem.pictureId}" alt="${this._restaurantItem.name || '-'}">
          </picture>
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
