class ThrowableObject extends MovableObject {

speedY = 25;

IMAGES_THROW = [
    "assets/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "assets/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "assets/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "assets/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

IMAGES_SPLASH = [
    "assets/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "assets/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "assets/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "assets/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "assets/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "assets/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  /**
 * Creates an instance of ThrowableObject.
 *
 * @constructor
 * @param {*} x
 * @param {*} y
 */
constructor(x, y) {
    super().loadImage(
      "assets/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
    );
    this.loadImages(this.IMAGES_THROW);
    this.loadImages(this.IMAGES_SPLASH);
    this.x = x;
    this.y = y;
    this.height = 60;
    this.width = 50;
    this.throw();
  }


  /**
 * gravity for throwing bottle
 * 
 */
throw() {
    this.applyGravity();
    this.throwBottle = setInterval(() => {
      this.x += 10;
      this.playAnimation(this.IMAGES_THROW);
      this.updateMoveTime();
      this.sleeping_sound.pause();
    }, 25);
  }


  /**
 * splash animate for bottles
 * 
 */
animateSplash() {
    this.speedY = 0;
    clearInterval(this.throwBottle);
    this.playAnimation(this.IMAGES_SPLASH);
  }
}
