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
  walking_sound = new Audio('audio/walk.mp3')

  constructor() {
    super().loadImage("assets/2_character_pepe/2_walk/W-21.png");

    this.loadImages(this.IMAGES_WALKING);

    this.animate();
  }

  animate() {

    setInterval(() => {
      this.walking_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.x += this.speed;
        this.otherDirection = false;
        this.walking_sound.play();
      }
      if (this.world.keyboard.LEFT && this.x > -615) {
        this.x -= this.speed;
        this.otherDirection = true;
        this.walking_sound.play();

      }
      this.world.camera_x = -this.x + 100;

    }, 1000/60);


    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
      // Verringere den Wert von x um 1

      // Überprüfe, ob x den gewünschten Wert erreicht hat

this.playAnimation(this.IMAGES_WALKING);

      
 
        }
    }, 25);
  }
}
