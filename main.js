/* styles.css */

body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

#logo {
  width: 200px;
  height: 100px;
  background-color: #ffcc00; /* Yellow background color */
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #333; /* Text color */
}

// Slideshow for restaurant images
let restaurantIndex = 0;
const restaurantImages = document.querySelectorAll('.restaurant img');
const restaurantDescription = document.querySelectorAll('.restaurant p');

function showNextRestaurant() {
  restaurantImages[restaurantIndex].style.display = 'none';
  restaurantDescription[restaurantIndex].style.display = 'none';
  restaurantIndex = (restaurantIndex + 1) % restaurantImages.length;
  restaurantImages[restaurantIndex].style.display = 'block';
  restaurantDescription[restaurantIndex].style.display = 'block';
}

// Automatic slideshow for restaurants (change image every 3 seconds)
setInterval(showNextRestaurant, 3000);

// Slideshow for swimming pool image
const poolImage = document.querySelector('#pool img');
let poolIndex = 0;
const poolImages = ['pool1.jpg', 'pool2.jpg', 'pool3.jpg'];

function showNextPoolImage() {
  poolIndex = (poolIndex + 1) % poolImages.length;
  poolImage.src = poolImages[poolIndex];
}

// Automatic slideshow for swimming pool (change image every 5 seconds)
setInterval(showNextPoolImage, 5000);
