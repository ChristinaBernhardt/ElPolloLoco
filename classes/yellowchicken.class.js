class Yellowchicken extends MovableObject {
  y = 380;
  height = 50;
  width = 40;

  IMAGES_WALKING = [
    "assets/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "assets/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "assets/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  IMAGES_DEAD = [
    "assets/3_enemies_chicken/chicken_small/2_dead/dead.png"
  ]

  constructor() {
    super().loadImage("assets/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 300 + Math.random() * 2500;
    this.speed = 0.7 + Math.random() * 0.5;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);

      this.moveLeft();
    }, 100);
  }
}
