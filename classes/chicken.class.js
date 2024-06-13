class Chicken extends MovableObject {
  y = 360;
  height = 70;
  width = 50;
  intervalIdAnimate;
  intervalIdPlayAnimation;

  offset = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  };

  IMAGES_WALKING = [
    "assets/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "assets/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "assets/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  IMAGES_DEAD = ["assets/3_enemies_chicken/chicken_normal/2_dead/dead.png"];

  constructor() {
    super().loadImage("assets/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 500 + Math.random() * 4000;
    this.speed = 0.15 + Math.random() * 0.5;
    this.animate();
  }


  animate() {
    this.intervalIdAnimate = setInterval(() => {
      this.moveLeft();
       if (this.x <= 0) {
        clearInterval(this.interval); 
      }
    }, 1000 / 60); 
    this.intervalIdPlayAnimation = setInterval(() => {
      if (this.dead != true) {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 100);
  }


  die() {
    this.dead = true;
    this.loadImage(this.IMAGES_DEAD);
    clearInterval(this.intervalIdAnimate);
    setTimeout(() => {
      clearInterval(this.intervalIdPlayAnimation);
    }, 500);
  }
}
