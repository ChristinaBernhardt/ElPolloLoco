class layer {
  // extends MovableObject
  height = 480;
  width = 720;
  img;

  constructor(imageName, x) {
    this.loadImage(imageName)
    this.x = x;
    this.y = 480 - this.height;
  }

  // loadImage('img/test.png')
  loadImage(path) {
    this.img = new Image(); //Abkürzung
    this.img.src = path;
  }
}
