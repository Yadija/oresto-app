const assert = require('assert');

Feature('Favoriting Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('showing empty favorite restaurants', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.content-error');
  I.see('No Favorite Restaurant', '.content-error h1');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  I.seeElement('restaurant-list');
  I.seeElement('restaurant-item');
  I.seeElement('.card-item a');

  const firstRestaurant = locate('.card-item a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');
  const favoritedRestaurantTitle = await I.grabTextFrom(
    '.card-item a',
  );

  assert.strictEqual(firstRestaurantName, favoritedRestaurantTitle);
});
