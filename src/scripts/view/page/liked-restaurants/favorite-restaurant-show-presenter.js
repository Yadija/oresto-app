class FavoriteRestaurantShowPresenter {
  constructor({ view, favoriteRestaurants }) {
    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    this._showFavoriteRestaurants();
  }

  async _showFavoriteRestaurants() {
    const restaurants = await this._favoriteRestaurants.getAllRestaurants();
    this._displayRestaurants(restaurants);
  }

  _displayRestaurants(restaurant) {
    this._view.showFavoriteRestaurants(restaurant);
  }
}

export default FavoriteRestaurantShowPresenter;