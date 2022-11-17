import 'regenerator-runtime';

/* styles */
import '../styles/main.scss';
import '../styles/skip-content.scss';
import '../styles/responsive.scss';

// components
import './components/app-bar';
import './components/loading-indicator';
import './components/footer-bar';

import App from './view/app';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
