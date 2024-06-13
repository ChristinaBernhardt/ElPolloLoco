class Salsabottle extends MovableObject {
  height = 50;
  width = 50;
  isExploded = false;

  IMAGES_SALSABOTTLE = ["assets/6_salsa_bottle/salsa_bottle.png"];

  constructor() {
    super().loadImage("assets/6_salsa_bottle/salsa_bottle.png");
    this.loadImages(this.IMAGES_SALSABOTTLE);
    this.x = 200 + Math.random() * 3000;
    this.y = 100 + Math.random() * 190;
  }
}
