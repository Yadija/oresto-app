import 'regenerator-runtime';

/* styles */
import '../styles/main.scss';
import '../styles/skip-content.scss';
import '../styles/skeleton.scss';
import '../styles/responsive.scss';

// components
import './components/app-bar';
import './components/loading-indicator';
import './components/restaurant-list';
import './components/footer-bar';

// lazy loading
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import App from './view/app';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
