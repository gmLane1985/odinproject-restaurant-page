import restaurantImage from './restaurant.jpg';

export default function loadHomePage() {
  const content = document.getElementById('content');

  content.textContent = '';

  const headline = document.createElement('h1');
  headline.textContent = "Welcome to Garrett's Amazing Restaurant";

  const description = document.createElement('p');
  description.textContent =
    'We serve the best food in town. Fresh ingredients, cozy vibes, unforgettable flavors.';

  const image = document.createElement('img');
  image.src = restaurantImage;
  image.alt = 'Restaurant interior';

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(description);
}
