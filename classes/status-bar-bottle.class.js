class StatusBarBottle extends DrawableObject {

IMAGES = [
    "assets/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png",
    "assets/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png",
    "assets/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png",
    "assets/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png",
    "assets/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png",
    "assets/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png",
  ];

percentage = 0;

  /**
 * Creates an instance of StatusBarBottle.
 *
 * @constructor
 */
constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 50;
    this.y = 100;
    this.width = 200;
    this.height = 40;
    this.setPercentage(0);
  }

  
  /**
 * set percentage for bottles
 *
 * @param {*} percentage
 */
setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }
}
