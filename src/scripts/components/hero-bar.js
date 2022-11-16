import CONFIG from '../global/config';

class HeroBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <img src="${CONFIG.APP_HERO_IMG}" alt="Jumbotron">
        <div class="hero-thumb">
          <p>Find a restaurant you want</p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-bar', HeroBar);
