// Get the spaceship element
const spaceship = document.getElementById('spaceship');

// Set the initial position and rotation of the spaceship
let spaceshipX = 0;
let spaceshipY = 0;
let spaceshipRotation = 0;

// Function to move and rotate the spaceship
function moveSpaceship(x, y, rotation) {
  spaceship.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
}

// Function to create a bullet
function createBullet() {
    const bullet = document.createElement('img');
    bullet.src = 'images/Bullets.png';
    bullet.className = 'bullet';
    bullet.style.transform = `translate(${spaceshipX}px, ${spaceshipY}px)`;
    document.body.appendChild(bullet);
  
    // Function to move the bullet
    function moveBullet() {
      const bulletY = parseInt(bullet.style.top, 10);
      bullet.style.top = `${bulletY - 10}px`;
  
      // Check if the bullet is out of the screen
      if (bulletY < -10) {
        bullet.remove();
      } else {
        requestAnimationFrame(moveBullet);
      }
    }
  
    // Start moving the bullet
    moveBullet();
  }

// Event listener for arrow key presses
document.addEventListener('keydown', (event) => {
  const key = event.key;

  // Move and rotate the spaceship based on the arrow key pressed
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
    // Create a bullet when the spacebar is pressed
    createBullet();
  }

  // Call the moveSpaceship function to update the spaceship's position and rotation
  moveSpaceship(spaceshipX, spaceshipY, spaceshipRotation);
});


// Function to create a random number between min and max

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a random asteroid
function createAsteroid() {
    const asteroid = document.createElement('img');
    asteroid.src = 'images/asteroid.png';
    asteroid.className = 'asteroid'




}