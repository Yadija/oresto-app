/* eslint-disable no-undef */
const assert = require('assert');

Feature('Posting Review On Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('posting review on restaurant', async ({ I }) => {
  I.seeElement('restaurant-list');
  I.seeElement('restaurant-item');
  I.seeElement('.card-item a');

  const firstRestaurant = locate('.card-item a').first();
  I.click(firstRestaurant);

  I.seeElement('.review-form');

  const nameInput = 'Bagas';
  const reviewInput = 'Enak';

  I.fillField('name-input', nameInput);
  I.fillField('review-input', reviewInput);

  I.click('.review-form-submit');

  const lastReview = locate('.review-item .review-person-message').last();
  const lastReviewMessage = await I.grabTextFrom(lastReview);

  assert.strictEqual(lastReviewMessage, reviewInput);
});
