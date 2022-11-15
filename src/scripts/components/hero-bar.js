class HeroBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <img src="./images/heros/hero-image_1.jpg" alt="Jumbotron">
        <div class="hero-thumb">
          <p>Find a restaurant you want</p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-bar', HeroBar);
