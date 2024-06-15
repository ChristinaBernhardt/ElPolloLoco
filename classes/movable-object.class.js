class MovableObject extends DrawableObject {

  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  lastHit = 0;
  dead = false;

  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  
  /**
   * gravity of jumping
   * 
   */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }


  /**
   * check is above ground
   *
   * @returns {boolean}
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 217;
    }
  }


  /**
   * check colliding
   *
   * @param {*} obj
   * @returns {boolean}
   */
  isColliding(obj) {
    return (
      this.x + this.width - this.offset.right >= obj.x + obj.offset.left &&
      this.x + this.offset.left <= obj.x + obj.width - obj.offset.right &&
      this.y + this.height - this.offset.bottom >= obj.y + obj.offset.top &&
      this.y + this.offset.top <= obj.y + obj.height - obj.offset.bottom
    );
  }


  /**
   * animate move left
   * 
   */
  moveLeft() {
    this.x -= this.speed; // Verringere den Wert von x um 1
  }


  /**
   * animate move right
   * 
   */
  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
  }


  /**
   * animate images
   *
   * @param {*} images
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }


  /**
   * animate images just once
   *
   * @param {*} images
   */
  playAnimationOnce(images) {
    if (this.currentImage < images.length) {
      let i = this.currentImage;
      let path = images[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }
  }


  /**
   * hit character
   * 
   */
  hit() {
    this.energy -= 2.5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }


  /**
   * hit endboss
   * 
   */
  hitEndboss() {
    this.updateMoveTime();
    this.energy -= 20;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }


  /**
 * character is hurt
 *
 * @returns {boolean}
 */
isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }


  /**
 * character or endboss is dead
 *
 * @returns {boolean}
 */
isDead() {
    return this.dead;
  }


  /**
 * show and hide images
 * 
 */
showAndHideImage() {
    const imageContainer = document.getElementById("image-container");
    imageContainer.style.display = "block";
    imageContainer.classList.add("fade-in");
    setTimeout(() => {
      imageContainer.classList.remove("fade-in");
      imageContainer.classList.add("fade-out");
    }, 3000);
    setTimeout(() => {
      imageContainer.style.display = "none";
      imageContainer.classList.remove("fade-out");
    }, 4000);
  }


/**
 * Updates the last move time to the current time.
 * 
 * - Sets the `lastMoveTime` property to the current timestamp.
 * 
 * @memberof Character
 */
updateMoveTime() {
  let currentTime = new Date().getTime();
  this.lastMoveTime = currentTime;
}
}
