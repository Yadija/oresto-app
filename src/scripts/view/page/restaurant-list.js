const RestaurantList = {
  async render() {
    return `
      <hero-bar></hero-bar>
      <h2>Explore Restaurant</h2>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default RestaurantList;
