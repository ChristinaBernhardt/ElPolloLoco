class MovableObject {
  x = 100;
  y = 230;
  img;
  height = 200;
  width = 100;
  imageCache = {};
  currentImage = 0;

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

  moveRight() {
    console.log("Moving right");
  }

  moveLeft() {}
}
