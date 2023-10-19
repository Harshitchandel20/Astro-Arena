const spaceship = document.getElementById('spaceship');

let spaceshipX = 0;
let spaceshipY = 0;
let spaceshipRotation = 0;

// Function to move and rotate the spaceship
function moveSpaceship(x, y, rotation) {
  spaceship.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
}

function createBullet() {
    const bullet = document.createElement('img');
    bullet.src = 'images/Bullets.png';
    bullet.className = 'bullet';
    bullet.style.transform = `translate(${spaceshipX}px, ${spaceshipY}px)`;
    document.body.appendChild(bullet);
  
    function moveBullet() {
      const bulletX = parseInt(bullet.style.left, 10);
      const bulletY = parseInt(bullet.style.top, 10);
      bullet.style.left = `${bulletX + bullet}px`;
      bullet.style.top = `${bulletY + bullet}px`;
  
      if (
        bulletX < -10 ||
        bulletX > window.innerWidth ||
        bulletY < -10 ||
        bulletY > window.innerHeight
      ) {
        bullet.remove();
      } else {
        requestAnimationFrame(moveBullet);
      }
    }
  
    moveBullet();
  }

// Event listener for arrow key presses
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (key === 'ArrowUp') {
    spaceshipY -= 10;
    spaceshipRotation = 0;
  } else if (key === 'ArrowDown') {
    spaceshipY += 10;
    spaceshipRotation = 180;
  } else if (key === 'ArrowLeft') {
    spaceshipX -= 10;
    spaceshipRotation = -90;
  } else if (key === 'ArrowRight') {
    spaceshipX += 10;
    spaceshipRotation = 90;
  }else if (key === ' ') {
    createBullet();
  }
  moveSpaceship(spaceshipX, spaceshipY, spaceshipRotation);
});


// Function to create a random number between min and max

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a random asteroid

var asteroidImages = [
    "images/asteroid1.png",
    "images/asteroid2.png",
    "images/asteroid3.png",
    "images/asteroid4.png",
    "images/asteroid5.png",
    "images/asteroid6.png",
    "images/asteroid7.png",
    "images/asteroid8.png"
  ];

  // Function to create a random asteroid element
  function createAsteroid() {
    var asteroid = document.createElement("img");
    asteroid.src = asteroidImages[Math.floor(Math.random() * asteroidImages.length)];
    asteroid.classList.add("asteroid");

    // Set random position and animation
    var x = getRandomNumber(0,window.innerWidth - asteroid.width);
    var y = getRandomNumber(0, window.innerHeight - asteroid.height);
    asteroid.style.left = x + "px";
    asteroid.style.top = y + "px";
    asteroid.style.animation = "asteroid-fall " + (Math.random() * 5 + 3) + "s linear infinite";

    // Append asteroid to the container
    document.getElementById("asteroids-container").appendChild(asteroid);
  }

  // Create multiple asteroids
  for (var i = 0; i < 8; i++) {
    createAsteroid();
  }

  