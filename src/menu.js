export default function loadMenuPage() {
  const content = document.getElementById('content');

  content.textContent = '';

  const headline = document.createElement('h1');
  headline.textContent = 'Our Menu';

  const appetizersTitle = document.createElement('h2');
  appetizersTitle.textContent = 'Appetizers';
  appetizersTitle.style.marginTop = '2rem';
  appetizersTitle.style.marginBottom = '1rem';

  const appetizers = document.createElement('p');
  appetizers.innerHTML =
    '<strong>Garlic Bread</strong> - $8<br>' +
    '<strong>Bruschetta</strong> - $12<br>' +
    '<strong>Calamari Fritti</strong> - $14';

  const mainTitle = document.createElement('h2');
  mainTitle.textContent = 'Main Courses';
  mainTitle.style.marginTop = '2rem';
  mainTitle.style.marginBottom = '1rem';

  const mains = document.createElement('p');
  mains.innerHTML =
    '<strong>Grilled Salmon</strong> - $28<br>' +
    '<strong>Ribeye Steak</strong> - $32<br>' +
    '<strong>Vegetarian Pasta Primavera</strong> - $22<br>' +
    '<strong>Chicken Parmesan</strong> - $24';

  const dessertTitle = document.createElement('h2');
  dessertTitle.textContent = 'Desserts';
  dessertTitle.style.marginTop = '2rem';
  dessertTitle.style.marginBottom = '1rem';

  const desserts = document.createElement('p');
  desserts.innerHTML =
    '<strong>Tiramisu</strong> - $9<br>' +
    '<strong>Chocolate Lava Cake</strong> - $11<br>' +
    '<strong>Panna Cotta</strong> - $10';

  content.appendChild(headline);
  content.appendChild(appetizersTitle);
  content.appendChild(appetizers);
  content.appendChild(mainTitle);
  content.appendChild(mains);
  content.appendChild(dessertTitle);
  content.appendChild(desserts);
}
