import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
// import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ content }) {
    this._content = content;

    this._initialAppShell();
  }

  // eslint-disable-next-line class-methods-use-this
  _initialAppShell() {
    // TODO
  }

  async renderPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.querySelector('#drawer').classList.remove('open');

    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipToContent = document.querySelector('.skip-link');
    skipToContent.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });

    skipToContent.addEventListener('keyup', (event) => {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.querySelector('#mainContent').focus();
      }
    });
  }
}

export default App;
