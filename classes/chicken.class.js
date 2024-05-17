class Chicken extends MovableObject {
  y = 360;
  height = 70;
  width = 50;

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
    this.x = 200 + Math.random() * 2000;
    this.speed = 0.15 + Math.random() * 0.5;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
      // Überprüfe, ob x den gewünschten Wert erreicht hat
      if (this.x <= 0) {
        clearInterval(this.interval); // Stoppe den Interval, wenn x den Wert erreicht
      }
    }, 1000 / 60); // Führe die Funktion alle 1000 Millisekunden (1 Sekunde) aus
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 100);
  }
}
