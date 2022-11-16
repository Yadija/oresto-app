import CONFIG from '../global/config';
import CONSTANTS from '../global/constants';

const { ENTER_KEY_CODE, ESC_KEY_CODE } = CONSTANTS;

class AppBar extends HTMLElement {
  constructor() {
    super();
    this._title = CONFIG.APP_NAME;
  }

  connectedCallback() {
    this.render();
    this.showDrawer();
  }

  showDrawer() {
    const main = document.querySelector('body');
    const hamburgerButton = this.querySelector('#hamburger');
    const drawer = this.querySelector('#drawer');

    hamburgerButton.addEventListener('click', (event) => {
      drawer.classList.toggle('open');
      event.stopPropagation();
    });

    main.addEventListener('click', (event) => {
      drawer.classList.remove('open');
      event.stopPropagation();
    });

    main.addEventListener('keyup', (event) => {
      if (event.keyCode === ENTER_KEY_CODE) {
        drawer.classList.toggle('open');
        event.stopPropagation();
      } else if (event.keyCode === ESC_KEY_CODE) {
        drawer.classList.remove('open');
        event.stopPropagation();
      }
    });
  }

  render() {
    this.innerHTML = `
      <header>
        <a href="#posts" class="skip-link">Menuju ke konten</a>
        <a href="/">${this._title}</a>
        <button id="hamburger" aria-label="navigation-menu">☰</button>
        <nav id="drawer">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://www.instagram.com/yadija_/">About Us</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
