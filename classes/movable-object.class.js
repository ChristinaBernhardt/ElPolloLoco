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

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject){
      return true;
    } else {
    return this.y < 217;
  }}

  isColliding(obj) {
    return (
      this.x + this.width - this.offset.right >= obj.x + obj.offset.left &&
      this.x + this.offset.left <= obj.x + obj.width - obj.offset.right &&
      this.y + this.height - this.offset.bottom >= obj.y + obj.offset.top &&
      this.y + this.offset.top <= obj.y + obj.height - obj.offset.bottom
    );
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
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  hitEndboss() {
    this.energy -= 20;
    console.log(this.energy);
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

  showAndHideImage() {
    const imageContainer = document.getElementById("image-container");
    // Bild einblenden
    imageContainer.style.display = "block";
    imageContainer.classList.add("fade-in");
    // Nach 3 Sekunden Bild ausblenden
    setTimeout(() => {
      imageContainer.classList.remove("fade-in");
      imageContainer.classList.add("fade-out");
    }, 3000);
    // Nach der Ausblend-Animation (1 Sekunde) das Bild komplett ausblenden
    setTimeout(() => {
      imageContainer.style.display = "none";
      imageContainer.classList.remove("fade-out");
    }, 4000);
  }
}
