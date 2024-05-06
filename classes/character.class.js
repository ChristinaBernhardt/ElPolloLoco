class Character extends MovableObject {
  x = 200;
  y = 230;
  speed = 10;

  IMAGES_IDLE = [
    "assets/2_character_pepe/1_idle/idle/I-1.png",
    "assets/2_character_pepe/1_idle/idle/I-2.png",
    "assets/2_character_pepe/1_idle/idle/I-3.png",
    "assets/2_character_pepe/1_idle/idle/I-4.png",
    "assets/2_character_pepe/1_idle/idle/I-5.png",
    "assets/2_character_pepe/1_idle/idle/I-6.png",
    "assets/2_character_pepe/1_idle/idle/I-7.png",
    "assets/2_character_pepe/1_idle/idle/I-8.png",
    "assets/2_character_pepe/1_idle/idle/I-9.png",
    "assets/2_character_pepe/1_idle/idle/I-10.png",
  ];

  IMAGES_LONG_IDLE = [
    "assets/2_character_pepe/1_idle/long_idle/I-11.png",
    "assets/2_character_pepe/1_idle/long_idle/I-12.png",
    "assets/2_character_pepe/1_idle/long_idle/I-13.png",
    "assets/2_character_pepe/1_idle/long_idle/I-14.png",
    "assets/2_character_pepe/1_idle/long_idle/I-15.png",
    "assets/2_character_pepe/1_idle/long_idle/I-16.png",
    "assets/2_character_pepe/1_idle/long_idle/I-17.png",
    "assets/2_character_pepe/1_idle/long_idle/I-18.png",
    "assets/2_character_pepe/1_idle/long_idle/I-19.png",
    "assets/2_character_pepe/1_idle/long_idle/I-20.png",
  ];

  IMAGES_WALKING = [
    "assets/2_character_pepe/2_walk/W-21.png",
    "assets/2_character_pepe/2_walk/W-22.png",
    "assets/2_character_pepe/2_walk/W-23.png",
    "assets/2_character_pepe/2_walk/W-24.png",
    "assets/2_character_pepe/2_walk/W-25.png",
    "assets/2_character_pepe/2_walk/W-26.png",
  ];

  IMAGES_JUMPING = [
    "assets/2_character_pepe/3_jump/J-31.png",
    "assets/2_character_pepe/3_jump/J-32.png",
    "assets/2_character_pepe/3_jump/J-33.png",
    "assets/2_character_pepe/3_jump/J-34.png",
    "assets/2_character_pepe/3_jump/J-35.png",
    "assets/2_character_pepe/3_jump/J-36.png",
    "assets/2_character_pepe/3_jump/J-37.png",
    "assets/2_character_pepe/3_jump/J-38.png",
    "assets/2_character_pepe/3_jump/J-39.png",
  ];

  IMAGES_HURT = [
    "assets/2_character_pepe/4_hurt/H-41.png",
    "assets/2_character_pepe/4_hurt/H-42.png",
    "assets/2_character_pepe/4_hurt/H-43.png",
  ];

  IMAGES_DEAD = [
    "assets/2_character_pepe/5_dead/D-51.png",
    "assets/2_character_pepe/5_dead/D-52.png",
    "assets/2_character_pepe/5_dead/D-53.png",
    "assets/2_character_pepe/5_dead/D-54.png",
    "assets/2_character_pepe/5_dead/D-55.png",
    "assets/2_character_pepe/5_dead/D-56.png",
    "assets/2_character_pepe/5_dead/D-57.png",
  ];

  world;
  walking_sound = new Audio("audio/walk.mp3");

  constructor() {
    super().loadImage("assets/2_character_pepe/2_walk/W-21.png");

    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_LONG_IDLE);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);

    this.applyGravity();

    this.animate();
  }

  animate() {
    setInterval(() => {
      this.walking_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.walking_sound.play();
      }
      if (this.world.keyboard.LEFT && this.x > -615) {
        this.moveLeft();
        this.otherDirection = true;
        this.walking_sound.play();
      }
      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump();
      }

      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      } else {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          // Verringere den Wert von x um 1

          // Überprüfe, ob x den gewünschten Wert erreicht hat

          this.playAnimation(this.IMAGES_WALKING);
        }
      }
    }, 25);
  }


  jump() {
    this.speedY = 30;
  }
}
