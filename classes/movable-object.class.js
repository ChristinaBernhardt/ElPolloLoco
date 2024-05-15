class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  lastHit = 0;
  dead = false;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y < 217;
  }

  // Bessere Formel zur Kollisionsberechnung (Genauer)
  isColliding(obj) {
    // console.log('character', this.x, this.y, this.height, this.width, this.offsetY);
    // console.log('enemy' , obj.x, obj.y, obj.height, obj.width);
    return (
      this.x + this.width >= obj.x &&
      this.x <= obj.x + obj.width &&
      this.y + this.height >= obj.y &&
      this.y <= obj.y + obj.height
    );

    // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
  }

  moveLeft() {
    this.x -= this.speed; // Verringere den Wert von x um 1
  }

  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
  playAnimationOnce(images) {
    if (this.currentImage < images.length) {
      let i = this.currentImage;
      let path = images[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }
  }

  hit() {
    this.energy -= 5
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }

  isDead() {
    return this.dead;
    
  }
}
