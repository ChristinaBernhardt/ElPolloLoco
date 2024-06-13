class StatusBarCoin extends DrawableObject {

IMAGES = [
    "assets/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png",
    "assets/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png",
    "assets/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png",
    "assets/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png",
    "assets/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png",
    "assets/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png",
  ];

percentage = 0;

  /**
 * Creates an instance of StatusBarCoin.
 *
 * @constructor
 */
constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 50;
    this.y = 60;
    this.width = 200;
    this.height = 40;
    this.setPercentage(0);
  }


  /**
 * set percentage for coins
 *
 * @param {*} percentage
 */
setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }
}
