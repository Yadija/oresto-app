import CONFIG from '../global/config';

class FooterBar extends HTMLElement {
  constructor() {
    super();
    this._appName = CONFIG.APP_NAME;
    this._copyYears = new Date().getFullYear();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <p>Copyright © ${this._copyYears} - ${this._appName}</p>
      </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
