import './styles.css';
import loadHomePage from './homepage.js';
import loadAboutPage from './about.js';
import loadMenuPage from './menu.js';

loadHomePage();

// Set up navigation button click handlers
const navButtons = document.querySelectorAll('nav button');

navButtons[0].addEventListener('click', loadHomePage);
navButtons[1].addEventListener('click', loadAboutPage);
navButtons[2].addEventListener('click', loadMenuPage);
