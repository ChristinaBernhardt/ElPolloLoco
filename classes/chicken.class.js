class Chicken extends MovableObject {
  
y = 360;
height = 70;
width = 50;
intervalIdAnimate;
intervalIdPlayAnimation;
offset = {
    top: 20,
    bottom: 20,
    left: 10,
    right: 10,
  };

  IMAGES_WALKING = [
    "assets/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "assets/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "assets/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  IMAGES_DEAD = ["assets/3_enemies_chicken/chicken_normal/2_dead/dead.png"];

/**
 * Represents a Chicken enemy in the game.
 * Extends the Entity class and initializes with a walking animation and movement parameters.
 *
 * @constructor
 */
constructor() {
  super().loadImage("assets/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
  this.loadImages(this.IMAGES_WALKING);
  this.loadImages(this.IMAGES_DEAD);
  this.x = 500 + Math.random() * 4000;
  this.speed = 0.15 + Math.random() * 0.5;
  this.animate();
}

/**
 * Animates the chicken's movement and walking animation.
 * Starts two intervals: one for continuous movement to the left and one for playing walking animation frames.
 */
animate() {
  this.intervalIdAnimate = setInterval(() => {
    this.moveLeft();
    if (this.x <= 0) {
      clearInterval(this.intervalIdAnimate); // Stop moving when reaching the edge
    }
  }, 1000 / 60);

  this.intervalIdPlayAnimation = setInterval(() => {
    if (!this.dead) {
      this.playAnimation(this.IMAGES_WALKING);
    }
  }, 50);
}

/**
 * Causes the chicken to die.
 * Sets the 'dead' flag, changes the image to a dead chicken, and stops animation intervals after a delay.
 */
die() {
  this.dead = true;
  this.loadImage(this.IMAGES_DEAD);
  clearInterval(this.intervalIdAnimate);
  setTimeout(() => {
    clearInterval(this.intervalIdPlayAnimation);
  }, 500);
}
}