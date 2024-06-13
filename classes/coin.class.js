class Coin extends MovableObject {
  height = 100;
  width = 100;

  IMAGES_COINS = ["assets/8_coin/coin_1.png", "assets/8_coin/coin_2.png"];

  constructor() {
    super().loadImage("assets/8_coin/coin_1.png");
    this.loadImages(this.IMAGES_COINS);
    this.x = 200 + Math.random() * 3000;
    this.y = 100 + Math.random() * 200;
    this.animate();
  }

  
  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_COINS);
    }, 150);
  }
}
