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
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y < 217;
  }
  // loadImage('img/test.png')
  loadImage(path) {
    this.img = new Image(); //Abkürzung
    this.img.src = path;
  }
  
  draw(ctx){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

drawFrame(ctx){
 if(this instanceof Character || this instanceof Chicken || this instanceof Yellowchicken){
  ctx.beginPath();
  ctx.lineWidth = "5";
  ctx.strokeStyle = "red";
  ctx.rect(this.x, this.y, this.width, this.height);
  ctx.stroke();
}
}


  // Bessere Formel zur Kollisionsberechnung (Genauer)
  isColliding (obj) {
    console.log('character', this.x, this.y, this.height, this.width, this.offsetY);
    console.log('enemy' , obj.x, obj.y, obj.height, obj.width);
      return  (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) && 
            (this.y + this.height) >= obj.y &&
            (this.y) <= (obj.y + obj.height) 
             // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

}

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
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

  
}
