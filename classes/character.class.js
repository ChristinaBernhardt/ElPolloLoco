class Character extends MovableObject {
  x = 200;
  speed = 10;
  IMAGES_WALKING = [
    "assets/2_character_pepe/2_walk/W-21.png",
    "assets/2_character_pepe/2_walk/W-22.png",
    "assets/2_character_pepe/2_walk/W-23.png",
    "assets/2_character_pepe/2_walk/W-24.png",
    "assets/2_character_pepe/2_walk/W-25.png",
    "assets/2_character_pepe/2_walk/W-26.png",
  ];

  world;

  constructor() {
    super().loadImage("assets/2_character_pepe/2_walk/W-21.png");

    this.loadImages(this.IMAGES_WALKING);

    this.animate();
  }

  animate() {

    setInterval(() => {
      if (this.world.keyboard.RIGHT) {
        this.x += this.speed;
        this.otherDirection = false;

      }
      if (this.world.keyboard.LEFT) {
        this.x -= this.speed;
        this.otherDirection = true;

      }
      this.world.camera_x = -this.x;

    }, 1000/60);


    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
      // Verringere den Wert von x um 1

      // Überprüfe, ob x den gewünschten Wert erreicht hat



      
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        }
    }, 25);
  }
}
