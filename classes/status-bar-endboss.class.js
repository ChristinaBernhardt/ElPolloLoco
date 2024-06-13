class StatusBarEndboss extends DrawableObject {

IMAGES = [
    "assets/7_statusbars/2_statusbar_endboss/green/green0.png",
    "assets/7_statusbars/2_statusbar_endboss/green/green20.png",
    "assets/7_statusbars/2_statusbar_endboss/green/green40.png",
    "assets/7_statusbars/2_statusbar_endboss/green/green60.png",
    "assets/7_statusbars/2_statusbar_endboss/green/green80.png",
    "assets/7_statusbars/2_statusbar_endboss/green/green100.png",
  ];

percentage = 100;

  /**
 * Creates an instance of StatusBarEndboss.
 *
 * @constructor
 */
constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 50;
    this.y = 140;
    this.width = 200;
    this.height = 40;
    this.setPercentage(100);
  }


  /**
 * set percentage for endboss
 *
 * @param {*} percentage
 */
setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }
}
