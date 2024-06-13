class layer extends MovableObject {

height = 480;
width = 720;
img;

  /**
 * Creates an instance of layer.
 *
 * @constructor
 * @param {*} imageName
 * @param {*} x
 */
constructor(imageName, x) {
    super();
    this.loadImage(imageName);
    this.x = x;
    this.y = 480 - this.height;
  }


  /**
 * load Image
 *
 * @param {*} path
 */
loadImage(path) {
    this.img = new Image(); 
    this.img.src = path;
  }
}
