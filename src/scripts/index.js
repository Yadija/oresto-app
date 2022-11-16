import 'regenerator-runtime';

/* styles */
import '../styles/main.scss';
import '../styles/skip-content.scss';
import '../styles/responsive.scss';

// components
import './components/app-bar';
import './components/hero-bar';
import './components/footer-bar';

// data
import data from '../DATA.json';
import App from './view/app';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

const posts = document.getElementById('posts');
data.restaurants.forEach((restaurant) => {
  const card = document.createElement('div');
  card.innerHTML = `
    <div class="card tabindex="0"">
      <div class="card-head">
        <p>Kota ${restaurant.city}</p>
        <img src="${restaurant.pictureId}" alt="${restaurant.name}">
      </div>
      <div class="card-desc">
        <p class="rating">rating: ${restaurant.rating}</p>
        <h3 class="title">${restaurant.name}</h3>
        <p class="desc">${restaurant.description}</p>
      </div>
    </div>
  `;

  posts.appendChild(card);
});
