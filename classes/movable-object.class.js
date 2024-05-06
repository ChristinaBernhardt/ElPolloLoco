class MovableObject {
  x = 100;
  y = 230;
  img;
  height = 210;
  width = 100;
  imageCache = {};
  currentImage = 0;
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;

  applyGravity() {
    setInterval(() => {
      if(this.isAboveGround() || this.speedY > 0){
        this.y -= this.speedY;
      this.speedY -= this.acceleration;
    }
    }, 1000 / 25);
  }


  isAboveGround(){
    return this.y < 217;
  }
  // loadImage('img/test.png')
  loadImage(path) {
    this.img = new Image(); //Abkürzung
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  // moveRight() {
  //   console.log("Moving right");
  // }

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed; // Verringere den Wert von x um 1

      // Überprüfe, ob x den gewünschten Wert erreicht hat
      if (this.x <= 0) {
        clearInterval(this.interval); // Stoppe den Interval, wenn x den Wert erreicht
      }
    }, 1000 / 60); // Führe die Funktion alle 1000 Millisekunden (1 Sekunde) aus
  }

  playAnimation(images) {
    let i = this.currentImage % this.IMAGES_WALKING.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
