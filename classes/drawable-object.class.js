class DrawableObject {
    x = 100;
    y = 230;
    height = 210;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;


  // loadImage('img/test.png')
  loadImage(path) {
    this.img = new Image(); //Abkürzung
    this.img.src = path;
  }


  draw(ctx){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  
// drawFrame(ctx){
//     if(this instanceof Character || this instanceof Chicken || this instanceof Yellowchicken || this instanceof Endboss){
//      ctx.beginPath();
//     //  ctx.lineWidth = "5";
//     //  ctx.strokeStyle = "red";
//      ctx.rect(this.x, this.y, this.width, this.height);
//      ctx.stroke();
//    }
//    }


  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }



}