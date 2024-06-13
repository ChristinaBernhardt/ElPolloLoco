class layer extends MovableObject {
  // extends MovableObject
  height = 480;
  width = 720;
  img;

  constructor(imageName, x) {
    super();
    this.loadImage(imageName);
    this.x = x;
    this.y = 480 - this.height;
  }


  loadImage(path) {
    this.img = new Image(); 
    this.img.src = path;
  }
}
