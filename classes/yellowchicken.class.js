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
      this.checkDead();
      this.moveLeft();
      // Überprüfe, ob x den gewünschten Wert erreicht hat
      if (this.x <= 0) {
        clearInterval(this.interval); // Stoppe den Interval, wenn x den Wert erreicht
      }
    }, 1000 / 60); // Führe die Funktion 60 Mal pro Sekunde aus
  
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 100);
  
    setInterval(() => {
      if (this.energy === 0) {
        if (!this.dead) {
          this.currentImage = 0;
         
          setTimeout(() => {
            this.loadImage(this.IMAGES_DEAD);
          }, 1000); 
          setTimeout(() => {
            this.dead = true;
          }, 2000); // Spiele die Todesanimation nach 2 Sekunden ab
        }
      }  
    }, 50);
  }

  /**
* handle death chickens
*/
checkDead() {
  setInterval(() => {
      if (this.dead) {
          this.loadImage(this.IMAGES_DEAD);
          // clearInterval();
          // clearInterval(this.walkingChicken);
          // setTimeout(() => {this.speed = 0;
          // }, 500);
      };
  }, 50);
}
}

