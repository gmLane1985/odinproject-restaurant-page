export default function loadAboutPage() {
  const content = document.getElementById('content');

  content.textContent = '';

  const headline = document.createElement('h1');
  headline.textContent = 'About Us';

  const description = document.createElement('p');
  description.textContent =
    "Welcome to Garrett's Amazing Restaurant, where passion for food meets hospitality. Founded in 2015, we've been serving our community with fresh, locally-sourced ingredients and authentic recipes passed down through generations.";

  const story = document.createElement('p');
  story.textContent =
    'Our chef, Garrett, trained in culinary schools across Europe and brings a global perspective to classic comfort food. Every dish is prepared with care and attention to detail, ensuring each bite is a memorable experience.';

  const mission = document.createElement('p');
  mission.textContent =
    'Our mission is simple: to provide an inviting atmosphere where families and friends can gather to enjoy exceptional food and create lasting memories together.';

  content.appendChild(headline);
  content.appendChild(description);
  content.appendChild(story);
  content.appendChild(mission);
}
