class DrawableObject {
  x = 100;
  y = 230;
  height = 210;
  width = 100;
  img;
  imageCache = {};
  currentImage = 0;

 
  loadImage(path) {
    this.img = new Image(); 
    this.img.src = path;
  }


  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }


  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }


  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
