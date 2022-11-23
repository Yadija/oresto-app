/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
class ReviewContainer extends HTMLElement {
  set reviewContainer(reviewContainer) {
    this._review = reviewContainer;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="review-container">
        ${this._review
          .map(
            (review) =>
              `<div class="review-item"><h4 class="review-person-name">${
                review.name ? review.name : 'Anonymous'
              }</h4><p class="review-person-message">${
                review.review
                  ? review.review
                  : 'This person forgot to enter their review'
              }</p><p class="review-date">${review.date}</p></div>`,
          )
          .join('')}
      </div>
    `;
  }
}

customElements.define('review-container', ReviewContainer);
