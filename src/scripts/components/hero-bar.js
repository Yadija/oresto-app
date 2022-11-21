import CONFIG from '../global/config';

class HeroBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const heroImg = CONFIG.APP_HERO_IMG;

    this.innerHTML = `
      <div class="hero">
        <picture class="skeleton">
          <source srcset="${heroImg.SMALL}" type="image/webp" media="all and (max-width: 650px)" />        
          <source srcset="${heroImg.SMALL}" type="image/jpeg" media="all and (max-width: 650px)" />
          <source srcset="${heroImg.MEDIUM}" type="image/webp" media="all and (min-width: 651px) and (max-width: 960px)" />    
          <source srcset="${heroImg.MEDIUM}" type="image/jpeg" media="all and (min-width: 651px) and (max-width: 960px)" />
          <source srcset="${heroImg.LARGE}" type="image/webp" media="all and (min-width: 961px)" />        
          <source srcset="${heroImg.LARGE}" type="image/jpeg" media="all and (min-width: 961px)" />
          <img class="skeleton" src="${heroImg.LARGE}" alt="Jumbotron"/>
        </picture>
        <div class="hero-thumb">
          <p>Find a restaurant you want</p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-bar', HeroBar);
