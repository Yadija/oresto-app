const assert = require('assert');

Feature('Unfavoriting Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('unfavoriting a restaurant', async ({ I }) => {
  I.seeElement('restaurant-list');
  I.seeElement('article');
  I.seeElement('.card-item a');

  const firstRestaurant = locate('.card-item a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-result-container');
  I.seeElement('article');

  const favoritedRestaurantName = await I.grabTextFrom('.card-item a');
  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);

  const favoritedRestaurant = locate('.card-item a').first();
  const firstFavoritedRestaurant = await I.grabTextFrom(favoritedRestaurant);

  I.click(favoritedRestaurant);

  I.seeElement('#unlikeButton');
  I.click('#unlikeButton');

  const unfavoritedRestaurant = await I.grabTextFrom('.restaurant-title');
  assert.strictEqual(firstFavoritedRestaurant, unfavoritedRestaurant);

  I.amOnPage('/#/favorite');
  I.see('No Favorite Restaurant', '.content-error h1');
});
