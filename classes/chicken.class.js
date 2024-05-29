class Chicken extends MovableObject {
  y = 360;
  height = 70;
  width = 50;
  intervalIdAnimate;
  intervalIdPlayAnimation;

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
    this.x = 300 + Math.random() * 2000;
    this.speed = 0.15 + Math.random() * 0.5;
    this.animate();
  }

  animate() {
    this.intervalIdAnimate = setInterval(() => {
      this.moveLeft();
      // Überprüfe, ob x den gewünschten Wert erreicht hat
      if (this.x <= 0) {
        clearInterval(this.interval); // Stoppe den Interval, wenn x den Wert erreicht
      }
    }, 1000 / 60); // Führe die Funktion 60 Mal pro Sekunde aus

    this.intervalIdPlayAnimation = setInterval(() => {
           if (this.dead != true){
            this.playAnimation(this.IMAGES_WALKING);
          }
    }, 100);
  }

  /**
   * handle death chickens
   */
  die() {
      this.dead = true
      this.loadImage(this.IMAGES_DEAD);
      clearInterval(this.intervalIdAnimate);
      setTimeout(() => {
      clearInterval(this.intervalIdPlayAnimation);
      console.log(this.intervalIdAnimate, this.intervalIdPlayAnimation);
      }, 500);
    }
  }



