import CONFIG from '../global/config';

class AppBar extends HTMLElement {
  constructor() {
    super();
    this._title = CONFIG.APP_NAME;
  }

  connectedCallback() {
    this.render();
    this.showDrawer();
    this.toContent();
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
  }

  // eslint-disable-next-line class-methods-use-this
  toContent() {
    const skipToContent = document.querySelector('.skip-link');
    skipToContent.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#posts').focus();
    });

    skipToContent.addEventListener('keyup', (event) => {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.querySelector('#posts').focus();
      }
    });
  }

  render() {
    this.innerHTML = `
      <header>
        <a href="#posts" tabIndex="0" class="skip-link">Menuju ke konten</a>
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
