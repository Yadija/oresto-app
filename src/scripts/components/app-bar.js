class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
        <a href="#posts" class="skip-link">Menuju ke konten</a>
        <a href="/">OResto</a>
        <button id="hamburger" aria-label="navigation-menu">☰</button>
        <nav id="drawer">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Favorite</a></li>
            <li><a href="https://www.instagram.com/yadija_/">About Us</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
